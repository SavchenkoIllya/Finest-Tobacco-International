"use server";
import { db } from "@/app/db";
import { usersTable } from "@/app/db/schema";
import { User } from "@/app/db/types";
import { COOKIES_NAMES, ERROR_MESSAGES } from "@/app/lib";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function authUser(
  email: User["select"]["email"],
  password: User["select"]["password"],
) {
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  const user = users[0];

  if (!user) {
    return { error: ERROR_MESSAGES.USER_NOT_FOUND };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { error: ERROR_MESSAGES.PASSWORD_NOT_MATCH };
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" },
  );

  return { token };
}

export async function confirmJWT(token?: string) {
  try {
    jwt.verify(token ?? "", process.env.JWT_SECRET!);

    return true;
  } catch (e) {
    console.error(e);
    redirect("/");
  }
}

export async function login(prevState: string | undefined, formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  const redirectTo = formData.get("redirectTo") as string;

  if (!email || !password) {
    return ERROR_MESSAGES.INVALID_CREDENTIALS;
  }

  const result = await authUser(email, password);

  if (result?.error) {
    return result.error;
  }

  if (result.token) {
    const cookieStore = await cookies();

    cookieStore.set({
      name: COOKIES_NAMES.AUTH_TOKEN,
      value: result.token,
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  redirect(redirectTo);
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIES_NAMES.AUTH_TOKEN);
}
