import { COOKIES_NAMES } from "@/app/lib";
import { LoginForm } from "@/app/ui/landing/components/forms/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const auth = cookieStore.get(COOKIES_NAMES.AUTH_TOKEN);

  if (auth?.value) {
    redirect("/dashboard/admin");
  }

  return (
    <main className={"dashboard_bg"}>
      <div
        className={
          " min-h-[100dvh] min-w-[100dvw] flex justify-center items-center"
        }
      >
        <LoginForm />
      </div>
    </main>
  );
}
