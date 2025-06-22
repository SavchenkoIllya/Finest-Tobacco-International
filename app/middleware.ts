import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : null;

  const locale = locales.includes(preferredLocale ?? "")
    ? preferredLocale
    : defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
