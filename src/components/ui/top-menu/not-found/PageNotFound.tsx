import { geistSans } from "@/src/config/fonts"
import Link from "next/link"
import Image from "next/image"

export const  PageNotFound= () =>{
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${geistSans.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Lo sentimos mucho!</p>
        <p className="font-semibold">
          <span>Puedes regresa al </span>
          <Link className="font-bold m-1 p-1 rounded-md transition-all hover:bg-gray-100" href="/">HOME</Link>
        </p>
      </div>
      PageNotFound
      
    <div className="px-5 mx-5">
      <Image 
        src="/imgs/starman_750x750.png" alt="Starman" className="p-5 sm:p-0" width={550} height={550}
      />
    </div>
    </div>
  )
}