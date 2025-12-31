import { geistMono } from "@/src/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link
        href='/'
      >
        <span className={`${geistMono.className} antialiased font-bold`}>Ema</span>
        <span>| Shop</span>
        <span>{new Date().getFullYear()}</span>
      </Link>
      <Link
        href='/'
        className="mx-3"
      >
        Privacidad & Legal
      </Link>
      <Link
        href='/'
      >
        Ubicaciones
      </Link>
    </div>
  )
}
