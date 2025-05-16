import { FRONTEND_ADMIN_PATHS, NAVBAR_WIDTH } from "@/app/lib";
import { Navbar, NavbarIcon } from "@/app/ui/admin";

export default function AdminNavbar() {
  return (
    <Navbar width={NAVBAR_WIDTH}>
      <NavbarIcon
        icon={"CigaretteIcon"}
        href={FRONTEND_ADMIN_PATHS.PRODUCTS}
        label={"Cigarets"}
      />
    </Navbar>
  );
}
