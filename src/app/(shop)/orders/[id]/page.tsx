
"use  client"

import Title from "@/src/components/ui/title/Title";
import { initialData } from "@/src/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCardOutline } from "react-icons/io5";

const productsInCarrito = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2], 
];

interface Props {
  params:{
    id:string;
  }
}

export default async function CartPage({params}:Props) {

  const {id} = await params;



  return (
    <div className="flex justify-center items-center mb-72 gap-10 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] rounded-4xl bg-gray-100">
        <div className="ml-5 mt-5">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-b-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500':false,
                  'bg-green-500':true,
                }
              )
            }>
              <IoCardOutline size={30}/>
              <span className="mx-2">Pagada</span>
            </div>
          </div>
        </div>
        {/* Items --------------------------------------------------*/}
        {
          productsInCarrito.map(product => (
            <div key={product.slug} className="flex mb-5 border-1  border-gray-200 rounded-2xl bg-white">
              <Image
                src={`/products/${product.images[0]}`}
                width={100}
                height={100}
                style = {{
                  width:'100px',
                  height:'100px'
                }}
                alt={product.title}
                className="ml-3 rounded "
              />
              <div>
                <p className="bg-amber-50 mt-1">{product.title}</p>
                <p className="bg-amber-50">$ {product.price} x 3</p>
                <p className="bg-amber-100 font-semibold">Subtotal $ {product.price * 3}</p>
                
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
          <div className={
              clsx(
                "flex items-center rounded-b-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500':false,
                  'bg-green-500':true,
                }
              )
            }>
              <IoCardOutline size={30}/>
              <span className="mx-2">Pagada</span>
            </div>
        </div>
      </div>
    </div>
  )
}
