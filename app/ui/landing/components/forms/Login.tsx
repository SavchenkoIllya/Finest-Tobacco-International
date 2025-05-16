"use client";
import { login } from "@/app/actions";
import { FRONTEND_ADMIN_PATHS } from "@/app/lib";
import { useActionState, useState } from "react";

export const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const callbackUrl = FRONTEND_ADMIN_PATHS.HOME;

  const [errorMessage, formAction, isPending] = useActionState(
    login,
    undefined,
  );

  const handleToggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={"bg-zinc-100 p-8 rounded-2xl"}>
      <form action={formAction} className={"flex flex-col space-y-4"}>
        <h1 className={"text-2xl font-bold"}>Login into system</h1>
        <input
          className={"dashboard_input"}
          autoFocus={true}
          id="email"
          type="email"
          name="email"
          required
          placeholder={"Enter email"}
        />
        <input
          type={isVisible ? "text" : "password"}
          className={"dashboard_input"}
          placeholder={"********"}
          id="password"
          name="password"
          required
          minLength={6}
        />
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button
          type={"button"}
          className={"text-sm cursor-pointer"}
          onClick={handleToggleVisibility}
        >
          {isVisible ? "Hide" : "Show"} password
        </button>
        {/*<a className={"text-blue-600 hover:underline cursor-pointer"}>*/}
        {/*  Create account*/}
        {/*</a>*/}

        <button
          type={"submit"}
          className={"dashboard_button_info"}
          aria-disabled={isPending}
          disabled={isPending}
        >
          Login
        </button>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};
