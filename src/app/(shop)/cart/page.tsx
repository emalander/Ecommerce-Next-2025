
"use  client"
import { QuantitySelector } from "@/src/components";
import Title from "@/src/components/ui/title/Title";
import { initialData } from "@/src/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCarrito = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2], 
];

export default function CartPage() {
  
  //redirect('/empty');

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] bg-red-500">
        <Title title='Carrito' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
          </div>
        </div>
        {/* Items --------------------------------------------------*/}
        {
          productsInCarrito.map(product => (
            <div key={product.slug} className="flex mb-5">
              <Image
                src={`/products/${product.images[0]}`}
                width={100}
                height={100}
                style = {{
                  width:'100px',
                  height:'100px'
                }}
                alt={product.title}
                className="mr-5 rounded"
              />
              <div>
                <p className="bg-amber-200">{product.title}</p>
                <p className="bg-amber-300">$ {product.price}</p>
                <QuantitySelector quantity={3} />
                <button className="underline mt-3 cursor-pointer">
                  Remover
                </button>
              </div>
            </div>
          ))
        }</div>
      {/* Checkout */}
      <div className="absolute top-10 right-10 bg-white rounded-xl shadow-2xl p-7 h-fit">
        <h2 className="text-xl mb-2">Resumen de orden</h2>
        <div className="w-full h-px bg-gray-200 my-3"/>
        <div className="grid grid-cols-2">
          <span>No productos</span>
          <span className="text-right">3 articulos</span>
          <span>Subtotal</span>
          <span className="text-right">$ 100</span>
          <span>Impuestos</span>
          <span className="text-right">$ 100</span>
        </div>
        <div className="w-full h-px bg-gray-200 my-1"/>
        <div className="grid grid-cols-2">
          <span className="mt-5 text-2xl">Total:</span>
          <span className="mt-5 text-2xl text-right">$ 100</span>
        </div>
        <div className="mt-5 mb-2 w-full">
          <Link
           className="flex btn-primary justify-center mt-2"
           href="/checkout/address">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
