import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str) => {
  return str.replace("/default", "/en");
};

export function middleware({ nextUrl }) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(nextUrl.pathname) &&
    !nextUrl.pathname.includes("/api/") &&
    nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(
        `${stripDefaultLocale(nextUrl.pathname)}${nextUrl.search}`
      )
    : undefined;
}
