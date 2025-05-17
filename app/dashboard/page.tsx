import { LoginForm } from "@/app/ui/landing/components/forms/Login";

export default async function Dashboard() {
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
