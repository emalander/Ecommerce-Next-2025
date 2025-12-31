
"use  client"
import { QuantitySelector } from "@/src/components";
import Title from "@/src/components/ui/title/Title";
import { initialData } from "@/src/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCarrito = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2], 
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 gap-10 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] rounded-4xl bg-gray-100">
        <div className="ml-5 mt-5">
        <Title title='Verificar orden' />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/" className="underline mb-5">
              Editar carrito
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
                <p className="bg-amber-300">$ {product.price} x 3</p>
                <p className="bg-amber-400">Subtotal $ {product.price * 3}</p>
                
                <button className="underline mt-3 cursor-pointer">
                  Remover
                </button>
              </div>
            </div>
          ))
        }</div>
        </div>
      {/* Checkout */}
      <div className="bg-white rounded-xl shadow-2xl p-7">
        <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
        <div className="mb-10">
          <p className="font-semibold">Juan Perez</p>
          <p>Av Nazca 3400</p>
          <p>CABA</p>
          <p>Juan Perez</p>
        </div>
        {/* ------------ */}
        <div className="w-full h-0.5 bg-gray-200 my-1"/>
        <h2 className="text-xl  font-bold mb-2">Resumen de orden</h2>
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
          <p className="mb-5">
            <span className="text-xs">
              Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros <a href="#" className="underline">Términos y condiciones</a>
            </span>
          </p>
          <Link
           className="flex btn-primary justify-center mt-2"
           href="/orders/123">
            Colocar orden
          </Link>
        </div>
      </div>
    </div>
  )
}
