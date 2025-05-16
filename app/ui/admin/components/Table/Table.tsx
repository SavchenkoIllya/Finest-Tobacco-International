"use client";
import {
  RenderToolbarProps,
  TableBody,
  TableDefaultToolbar,
  TableHead,
  TablePagination,
} from "./index";
import { DataGridProps, DataWithId } from "./types";

export function Table<T extends DataWithId>({
  columns,
  data,
  totalCount,
  loading = false,
  error = null,
  sortConfig = {
    key: null,
    direction: null,
  },
  onSortChange,
  page,
  pageSize,
  pageSizeOptions = [5, 10, 20, 50],
  onPageChange,
  onPageSizeChange,
  searchTerm = "",
  onSearchChange,
  renderToolbar,
  className = "",
  loadingIndicator = <div className="flex justify-center p-4">Загрузка...</div>,
  emptyStateMessage = (
    <div className="p-4 text-center text-gray-500">Данные не найдены</div>
  ),
  onRefresh,
  enableGlobalSearch = true,
}: Readonly<DataGridProps<T>>) {
  // Вычисляем общее количество страниц
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  // Обработчик изменения сортировки
  const handleSortChange = (key: keyof T) => {
    const column = columns.find((col) => col.key === key);
    if (!column?.sortable && column?.sortable !== undefined) return;

    let direction = sortConfig.direction;

    if (sortConfig.key === key) {
      // Циклическая смена направления: null -> asc -> desc -> null
      if (direction === null) {
        direction = "asc";
      } else if (direction === "asc") {
        direction = "desc";
      } else {
        direction = null;
      }
    } else {
      // Если выбран новый столбец, начинаем с asc
      direction = "asc";
    }

    const newSortConfig = {
      key: direction === null ? null : key,
      direction,
    };

    // Передаем изменения вверх через обработчик
    onSortChange(newSortConfig);
  };
  const toolbarProps: RenderToolbarProps = {
    searchTerm,
    setSearchTerm: onSearchChange || (() => {}),
    currentPage: page,
    rowsPerPage: pageSize,
    setRowsPerPage: onPageSizeChange,
    totalPages,
    handleRefresh: onRefresh,
  };

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {/* Панель инструментов */}
      {renderToolbar ? (
        renderToolbar(toolbarProps)
      ) : (
        <TableDefaultToolbar
          enableGlobalSearch={enableGlobalSearch}
          searchTerm={searchTerm}
          searchChange={onSearchChange || (() => {})}
          pageSize={pageSize}
          pageSizeChange={onPageSizeChange}
          pageSizeOptions={pageSizeOptions}
        />
      )}

      {/* Контейнер таблицы */}
      <div className="overflow-x-auto rounded-lg">
        {loading && loadingIndicator}
        {error && <div className="p-4 text-center text-red-500">{error}</div>}
        {!loading && !error && (
          <table className="min-w-full divide-y divide-gray-200">
            <TableHead
              columns={columns}
              sortConfig={sortConfig}
              onSort={handleSortChange}
            />
            <TableBody
              columns={columns}
              data={data}
              emptyStateMessage={emptyStateMessage}
            />
          </table>
        )}
      </div>

      {/* Пагинация */}
      {data.length > 0 && !loading && !error && (
        <TablePagination
          currentPage={page}
          pageSize={pageSize}
          totalCount={totalCount}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
          pageSizeOptions={pageSizeOptions}
        />
      )}
    </div>
  );
}
