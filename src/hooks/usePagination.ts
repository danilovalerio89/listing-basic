import { useState } from "react";

interface UsePaginationProps<T> {
  items: T[];
  pageSize: number;
}

export function usePagination<T>({ items, pageSize }: UsePaginationProps<T>) {
  const [page, setPage] = useState(1);

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  const visibleItems = items.slice(startRange, endRange);

  return {
    page,
    setPage,
    visibleItems,
    count: items.length,
    pageSize,
  };
}
