"use client"

import { useAppSelector } from "@/redux/store";
import { Merriweather } from "next/font/google";


const font = Merriweather({ subsets: ["latin"], weight: '400' });



function About () {

    const theme = useAppSelector((state) => state.theme.theme);

    const style = (theme === "dark") ?  {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5)), url('/about.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        boxShadow: "20px 20px 30px 30px #041a2f",
    } : {};

    return(
        <section id="about" className={(theme === "dark") ? "pt-5" : "pt-5 bg-slate-200 text-black"} style ={style}>
            <h2 className={`text-4xl font-bold text-center mt-4 ${font.className}`}>About me</h2>
            <div className="grid grid-cols-5">
                <div id="profile" className="col-span-5 pt-28 lg:col-span-2 min-h-96"></div>
                <div id="presentation" className="text-justify col-span-5 lg:col-span-3 px-6 flex flex-col justify-center">
                    <p className="m-3">
                        Hi, I'm Josué Mongan, a passionate and dedicated MERN full-stack web developer and
                        self-taught C++ enthusiast. My journey in programming began in high school, and ever
                        since, I have been driven by a relentless curiosity to delve deeper into the vast world
                        of computer science.
                    </p>
                    <p className="m-3">
                        With a solid foundation in the MERN stack—comprising MongoDB, Express.js, React, and Node.js—I
                        have developed a keen ability to build robust, scalable, and user-friendly web applications.
                        My expertise in C++ further complements my skill set, allowing me to tackle complex algorithms
                        and performance-critical applications with confidence and precision.
                    </p>
                    <p className="m-3">
                        I thrive on challenges and am always eager to expand my knowledge, staying abreast of the latest
                        technological advancements and industry best practices. My goal is to continue growing as a
                        developer, contributing to innovative projects, and making a meaningful impact through my work.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;