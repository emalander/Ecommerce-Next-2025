import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/src/components";
import { geistMono } from "@/src/config/fonts";
import { initialData } from "@/src/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;

  }
}

// eslint-disable-next-line react/display-name
export default async function({params}:Props) {

  const {slug} = await params;
  console.log(slug)
  const product = initialData.products.find(product =>  product.slug === slug);

  if(!product) {
    notFound();
  }



  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
       {/* Slideshow Desktop*/}
       <div className="col-span-1 md:col-span-2 ">
           <ProductSlideShow
            title={product.title}
            images={product.images}
            className="hidden md:block"
          /> 
       
       {/* Slideshow Mobile*/}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
       </div>
       {/* Detalles */}
       <div className="col-span-1 px-5 ">
        <h1 className={`${geistMono.className} antialiased font-bold text-xl`}>
          {product.title} 
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* Tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        {/* Cantidad */}
        <QuantitySelector 
          quantity = {2}
        />
        {/* Button */}
        <button className="btn-primary my-3 cursor-pointer">
          Agregar al carrito
        </button>
        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>   
        <p className="font-light">
          {product.description}   
        </p>      
       </div>
    </div>
  )
}
