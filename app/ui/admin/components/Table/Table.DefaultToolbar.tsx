import { DefaultToolbarProps } from "./types";

export const TableDefaultToolbar = ({
  enableGlobalSearch,
  searchTerm,
  searchChange,
  pageSize,
  pageSizeChange,
  pageSizeOptions,
}: DefaultToolbarProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {enableGlobalSearch && (
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => searchChange(e.target.value)}
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Строк на странице:</span>
        <select
          value={pageSize}
          onChange={(e) => pageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pageSizeOptions?.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
