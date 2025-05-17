import { COOKIES_NAMES, NAVBAR_WIDTH } from "@/app/lib";
import { Breadcrumbs } from "@/app/ui/admin";
import AdminNavbar from "@/app/ui/admin/components/Navbar/AdminNavbar";
import { cookies } from "next/headers";
import { Fragment, ReactNode } from "react";
import { confirmJWT } from "@/app/actions";

export default async function AdminDashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const auth = cookieStore.get(COOKIES_NAMES.AUTH_TOKEN);
  await confirmJWT(auth?.value);

  return (
    <Fragment>
      <AdminNavbar />
      <div style={{ marginLeft: NAVBAR_WIDTH }} className={"p-8"}>
        <div className={"mb-8"}>
          <Breadcrumbs />
        </div>
        {children}
      </div>
    </Fragment>
  );
}
