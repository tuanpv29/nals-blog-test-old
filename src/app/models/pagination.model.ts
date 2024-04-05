export interface Pagination {
  count: number;
  page: number;
  offset: number;
  total: number;
  prev: number | null;
  next: number | null;
}
