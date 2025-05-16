import { ReactNode } from "react";

// TODO: cleanup types
export type SortDirection = "asc" | "desc" | null;

export type DataWithId = {
  id: string | number;
};

export type DataGridUtilProps = {
  enableGlobalSearch?: boolean;
};

export interface ColumnDef<T extends DataWithId, K extends keyof T = keyof T> {
  key: K;
  label: string;
  sortable?: boolean;
  render?: (value: T[K], row: T) => ReactNode;
  width?: string;
  className?: string;
}

export interface SortConfig<T> {
  key: keyof T | null;
  direction: SortDirection;
}

export interface PaginationConfig {
  page: number;
  pageSize: number;
  totalCount: number;
}

export type FiltersType<T> = { [K in keyof T]?: unknown };

export type RenderToolbarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  rowsPerPage: number;
  setRowsPerPage: (size: number) => void;
  totalPages: number;
  handleRefresh?: () => void;
};

export type SearchChangeFn = (value: string) => void;

export type PageSizeChangeFn = (size: number) => void;

export interface DefaultToolbarProps extends DataGridUtilProps {
  searchTerm: RenderToolbarProps["searchTerm"];
  searchChange: SearchChangeFn;
  pageSize: PaginationConfig["pageSize"];
  pageSizeOptions?: DataGridPagination["pageSizeOptions"];
  pageSizeChange: PageSizeChangeFn;
}

export type DataGridPagination = {
  initialPage?: number;
  initialPageSize?: number;
  pageSizeOptions?: number[];
};

export interface DataGridProps<T extends DataWithId> extends DataGridUtilProps {
  // Конфигурация колонок
  columns: ColumnDef<T>[];

  // Данные
  data: T[];
  totalCount: number;
  loading?: boolean;
  error?: string | null;

  // Настройки сортировки
  sortConfig?: SortConfig<T>;
  onSortChange: (sortConfig: SortConfig<T>) => void;

  // Настройки пагинации
  page: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;

  // Настройки поиска
  searchTerm?: string;
  onSearchChange?: (searchTerm: string) => void;

  // Кастомные элементы
  renderToolbar?: (props: RenderToolbarProps) => ReactNode;

  // Доп. настройки
  className?: string;
  loadingIndicator?: ReactNode;
  emptyStateMessage?: ReactNode;
  onRefresh?: () => void;
}

// Дополнительные пропсы для дочерних компонентов
export interface TableHeadProps<T extends DataWithId> {
  columns: ColumnDef<T>[];
  sortConfig: SortConfig<T>;
  onSort: (key: keyof T) => void;
}

export interface TableBodyProps<T extends DataWithId> {
  columns: ColumnDef<T>[];
  data: T[];
  emptyStateMessage: ReactNode;
}

export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
}
