'use client'

import { geistSans } from "@/src/config/fonts"
import { useUIStore } from "@/src/store";
import Link from "next/link"
import {IoSearchOutline, IoCartOutline } from 'react-icons/io5';

const TopMenu = () => {

  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5  justify-between items-center w-full">
        <div>
          <Link href="/">
            <span className={`${geistSans.className} antialiased font-bold`}>EmaShop</span>
            <span> | Shop</span>
          </Link>    
        </div>
        {/* Center menu */}
        <div className="hidden sm:block">
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-jira-background-clean2" href="/category/men">Hombres</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-jira-background-clean2" href="/category/women">Mujeres</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-jira-background-clean2" href="/category/kids">Niños</Link>
        </div>
        {/* Search, Cart, Menu */}
        <div className="flex items-center">
          <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5"/>
          </Link>
          <Link href="/cart" className="mx-2">
            <div className="relative">
              <span className="absolute text-xs rounded-full px-2 font-bold -top-2 -right-2 bg-jira-accent-blue text-jira-background-clean">
                3
              </span>
              <IoCartOutline className="w-5 h-5"/>
            </div>
          </Link>
          <button 
            onClick={openSideMenu}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
            Menú
          </button>
        </div>
    </nav>
  )
}

export default TopMenu