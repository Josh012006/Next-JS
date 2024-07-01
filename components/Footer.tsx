"use client"

import { Zeyada } from "next/font/google";
import { useAppSelector } from "@/redux/store";


const font = Zeyada({ subsets: ["latin"], weight: '400' });


function Footer() {

    const theme = useAppSelector((state) => state.theme.theme);


    return(
        <footer className={(theme === "dark") ? `flex justify-between items-center min-h-16 px-3 lg:px-14 ${font.className}` : `flex justify-between items-center min-h-16 px-3 lg:px-14 ${font.className} text-black bg-slate-300`}>
            <span className="text-xl">Happy you made it to the end!</span>
            <span className="text-2xl pr-2 lg:pr-16">Josué Mongan</span>
        </footer>
    )
}

export default Footer;