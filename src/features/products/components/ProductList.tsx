import { Heading, Stack } from "@chakra-ui/react";
import { useProducts } from "@/features/products/hooks/useProduct";
import { ProductTable } from "@/features/products/components/ProductTable";
import { ProductPagination } from "@/features/products/components/ProductPagination";

export function ProductList() {
  const { products, page, setPage, count, pageSize } = useProducts();
  return (
    <Stack width="full" gap="5">
      <Heading size="xl">Products</Heading>
      <ProductTable products={products} />
      <ProductPagination
        count={count}
        pageSize={pageSize}
        page={page}
        onPageChange={setPage}
      />
    </Stack>
  );
}
