import { productService } from "@/features/products/services/productService";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE_DIVISOR = 3;

export function useProducts() {
  const products = productService.getProducts();
  const pageSize = products.length / PAGE_SIZE_DIVISOR;

  const pagination = usePagination({ items: products, pageSize });

  return {
    products: pagination.visibleItems,
    page: pagination.page,
    setPage: pagination.setPage,
    count: pagination.count,
    pageSize: pagination.pageSize,
  };
}
