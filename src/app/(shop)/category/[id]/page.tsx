import { ProductGrid } from "@/src/components/products/product-grid/ProductGrid";
import Title from "@/src/components/ui/title/Title";
import { Category } from "@/src/interfaces";
import { initialData } from "@/src/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default async function CategoryPage({params}: Props) {

  const {id} = await params; // importante el await ! 

  const products = seedProducts.filter( product => product.gender === id);

  const labels:Record<Category, string> = {
    'men': 'Hombres',
    'women':'Mujeres',
    'kids':'Niños',
    'unisex':'Unisex'
  }
  console.log(id)
  //if(id === 'kids') {
  //  notFound();
  //}

  return (
    <>
      <Title 
        title="Tienda"
        subtitle={`Todos los productos de ${labels[id]}`}
        className="mb-2"
      ></Title>
      <ProductGrid products= {products}>
        
      </ProductGrid>
    </>
  )
}
