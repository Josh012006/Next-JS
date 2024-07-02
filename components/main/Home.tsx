"use client"

import { useAppSelector } from "@/redux/store";
import { Bebas_Neue } from "next/font/google";


const font = Bebas_Neue({ subsets: ["latin"], weight: '400' });


function Home () {

    const theme = useAppSelector((state) => state.theme.theme);

    const background = (theme === "dark") ? "linear-gradient(to right, transparent, rgba(0, 11, 20, 0.5),rgba(0, 0, 0, 0.5), rgba(54, 75, 103, 0.5))" : "";

    return (
        <section id="home" className={(theme === "dark") ? `p-4 grid grid-cols-12 lg:grid-cols-4 items-center shadow-custom-1` : `p-4 grid grid-cols-12 lg:grid-cols-4 items-center bg-slate-200 text-black shadow-custom-2`}>
            <div className="col-span-12 lg:col-span-3 min-h-96 z-10 flex flex-col justify-center">
                <div className="m-4 mb-7 flex flex-col justify-center">
                    <p className="mb-3 typewriter whitespace-normal">Hello there, I'm</p>
                    <p className={`${font.className} typewriter`} style={{letterSpacing:"2px", fontSize: '64px', lineHeight: '60px'}}><span className="whitespace-normal">JOSUÉ MONGAN</span></p>
                    <p className="mt-3 typewriter whitespace-normal" style={{fontSize: '20px'}}><span className="whitespace-normal">PASSIONATE MERN STACK DEVELOPER<br /> AND SELF-TAUGHT C++ DEVELOPER</span></p>
                </div>
                <a className={(theme === "dark") ? `rounded-lg p-2 bg-slate-700 m-4 w-44` : `rounded-lg p-2 bg-slate-400 m-4 w-44`} href="/J_Mongan CV.pdf" target="_blank">Download Resume <i className="fa-solid fa-download" aria-hidden="true"></i></a>
                <div className="m-4">
                    <a href="https://github.com/Josh012006" target="_blank"><i className="fa-brands fa-github m-2" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/josu%C3%A9-mongan-a7b6242b8/" target="_blank"><i className="fa-brands fa-linkedin m-2" aria-hidden="true"></i></a>
                </div>
            </div>
            <div id="style" className="overlaying col-span-1 min-h-96" style = {{background: background}}></div>
        </section>
    )
}


export default Home;