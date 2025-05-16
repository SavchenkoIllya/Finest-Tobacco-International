// app/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

// Middleware перенаправляет запросы на соответствующие локали
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Если путь уже содержит локаль, ничего не делаем
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Корневой путь обрабатывается в app/page.tsx через redirect
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Определяем предпочтительный язык из заголовка
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : null;

  const locale = locales.includes(preferredLocale ?? "")
    ? preferredLocale
    : defaultLocale;

  // Перенаправляем все остальные пути на соответствующую локаль
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Исключаем статические файлы, API и т.д.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
