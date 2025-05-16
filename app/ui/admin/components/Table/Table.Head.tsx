"use client";
import { cn } from "@/app/ui";
import { SORT_ICONS } from "./consts";
import { DataWithId, TableHeadProps } from "./types";

export const TableHead = <T extends DataWithId>({
  columns,
  sortConfig,
  onSort,
}: TableHeadProps<T>) => {
  const handleSort = (key: keyof T, sortable: boolean | undefined) => {
    if (sortable !== false) {
      onSort(key);
    }
  };

  const getSortIcon = (key: keyof T) => {
    if (sortConfig.key !== key) return SORT_ICONS.NONE;

    switch (sortConfig.direction) {
      case "asc":
        return <span className="text-xl">{SORT_ICONS.ASC}</span>;
      case "desc":
        return <span className="text-xl">{SORT_ICONS.DESC}</span>;
      default:
        return SORT_ICONS.NONE;
    }
  };

  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map(({ key, label, sortable, width, className }, idx) => {
          const isSortable = sortable !== false;

          return (
            <th
              key={`${String(key)}-${idx}`}
              scope="col"
              style={{ width }}
              className={cn(
                "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                isSortable ? "cursor-pointer hover:bg-gray-100" : "",
                className,
              )}
              onClick={() => handleSort(key, sortable)}
            >
              <div className="flex items-center space-x-1">
                <span>{label}</span>
                {isSortable && (
                  <div className="flex flex-col">{getSortIcon(key)}</div>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
