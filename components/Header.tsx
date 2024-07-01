"use client"

import Link from "next/link";
import { Zeyada } from "next/font/google";
import { useAppSelector } from "@/redux/store";



const font = Zeyada({ subsets: ["latin"], weight: '400' });

function Header () {

    const theme = useAppSelector((state) => state.theme.theme);

    return(
        <header className={(theme === "dark") ? `grid grid-cols-12 items-center min-h-20 ${font.className} z-50 top-0 shadow-custom` : `grid grid-cols-12 items-center min-h-20 ${font.className} z-50 top-0 bg-slate-300 text-black`}>
            <Link href='/' className="col-span-12 mx-auto my-2 lg:col-span-5 lg:m-2 font-bold text-4xl lg:pl-40">JM</Link>
            <nav className="col-span-12 lg:col-span-7 text-xl lg:text-2xl flex justify-around items-center my-3 lg:my-1">
                <Link href="/#home" className="m-3 lg:m-5">Home</Link>
                <Link href="/#about" className="m-3 lg:m-5">About me</Link>
                <Link href="/#skills" className="m-3 lg:m-5">Skills</Link>
                <Link href="/#projects" className="m-3 lg:m-5">Projects</Link>
                <Link href="/contact" className="m-3 lg:m-5">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;