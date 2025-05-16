"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export interface BreadcrumbsProps {
  separator?: string;
  anchor?: string;
}

export const Breadcrumbs = ({
  separator = "/",
  anchor = "admin",
}: BreadcrumbsProps) => {
  const pathname = usePathname();
  const allSegments = pathname.split("/").filter(Boolean);

  const anchorIndex = allSegments.indexOf(anchor);

  if (anchorIndex === -1) return null; // если anchor не найден, ничего не отображать

  const relevantSegments = allSegments.slice(anchorIndex);
  const crumbs = relevantSegments.map((segment, index) => {
    const href = "/" + allSegments.slice(0, anchorIndex + index + 1).join("/");
    const label = decodeURIComponent(segment).replace(/-/g, " ");
    return { label, href };
  });

  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        <li>
          <Link
            href={crumbs[0].href}
            className="hover:underline text-blue-600 capitalize"
          >
            Home
          </Link>
        </li>
        {crumbs.slice(1).map((crumb, index) => (
          <Fragment key={crumb.href}>
            <li className="mx-1">{separator}</li>
            <li>
              {index === crumbs.length - 2 ? (
                <span className="text-gray-500 capitalize">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:underline text-blue-600 capitalize"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
