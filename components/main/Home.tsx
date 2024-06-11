import { Bebas_Neue } from "next/font/google";


const font = Bebas_Neue({ subsets: ["latin"], weight: '400' });


function Home () {
    return (
        <section id="home" className="p-4 grid grid-cols-2 items-center">
            <div className="col-span-1 min-h-96 z-10 flex flex-col justify-center">
                <div className="m-4 mb-7 flex flex-col justify-center">
                    <p className="mb-3">Hello there, I'm</p>
                    <p className={`${font.className}`} style={{letterSpacing:"2px", fontSize: '64px', lineHeight: '60px'}}>JOSUÉ MONGAN</p>
                    <p className="mt-3" style={{fontSize: '20px'}}>PASSIONATE MERN STACK DEVELOPER AND SELF-TAUGHT C++ DEVELOPER</p>
                </div>
                <a className="rounded-lg p-2 bg-slate-700 m-4 w-44" href="/J_Mongan CV.pdf" target="_blank">Download Resume <i className="fa-solid fa-download" aria-hidden="true"></i></a>
                <div className="m-4">
                    <a href="https://github.com/Josh012006" target="_blank"><i className="fa-brands fa-github m-2" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/josu%C3%A9-mongan-a7b6242b8/" target="_blank"><i className="fa-brands fa-linkedin m-2" aria-hidden="true"></i></a>
                </div>
            </div>
            <div id="style" className="overlaying col-span-1 min-h-96"></div>
        </section>
    )
}


export default Home;