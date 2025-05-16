import { DataWithId, TableBodyProps } from "./types";

export const TableBody = <T extends DataWithId>({
  columns,
  data,
  emptyStateMessage,
}: TableBodyProps<T>) => {
  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length}>{emptyStateMessage}</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row) => (
        <tr key={row.id} className="hover:bg-gray-50">
          {columns.map((column) => (
            <td
              key={`${row.id}-${String(column.key)}-${column.label}`}
              className="px-6 py-4 whitespace-nowrap"
            >
              {column.render ? (
                column.render(row[column.key], row)
              ) : (
                <div className="text-sm text-gray-900">
                  {String(row[column.key] ?? "")}
                </div>
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
