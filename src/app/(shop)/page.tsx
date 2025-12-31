import Title from "@/src/components/ui/title/Title";
import { initialData } from "@/src/seed/seed";
import { ProductGrid } from "@/src/components/products/product-grid/ProductGrid";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      ></Title>
      <ProductGrid products={products}>

      </ProductGrid>
    </>
  );
}
