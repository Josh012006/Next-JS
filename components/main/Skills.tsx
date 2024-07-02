"use client"

import { Merriweather } from "next/font/google";
import Image from 'next/image';
import { useAppSelector } from "@/redux/store";


const font = Merriweather({ subsets: ["latin"], weight: '400' });


function Skills () {

    const theme = useAppSelector((state) => state.theme.theme);

    const nextjs = (theme === "dark") ? "nextjs" : "nextjs-black";
    const mysql = (theme === "dark") ? "mysql" : "mysql-black";
    const num = (theme === "dark") ? 70 : 50;
    const num1 = (theme === "dark") ? 150 : 100;

    const style = (theme === "dark") ? {
        background: "linear-gradient(to bottom, transparent, rgba(4, 26, 47, 0.8), rgba(0, 11, 20, 0.8)), url('/skills2.png') center center",

        boxShadow: "20px 20px 30px 30px inset #041a2f"
    } : {
        background: "url('/skills2.png') center center",
    };

    const express = (theme === "dark") ? "express-white" : "express";
    const borderColor = (theme === "dark") ? "white" : "black";

    return(
        <>
            <section id="skills" className="pt-5 flex flex-col justify-center" style={{minHeight: '550px', ...style}}>
                <h2 className={`text-4xl font-bold text-center m-4 ${font.className}`}>My Skills</h2>
                <div className="flex flex-col justify-center">
                    <div className="image-container flex flex-col lg:flex-row justify-around items-center">
                        <Image alt="MongoDB" src='/languages/mongodb.png' width='150' height="150"  className="m-3 image" />
                        <Image alt="Express" src={`/languages/${express}.png`} width='100' height="100"  className="m-3 image" />
                        <Image alt="React" src='/languages/react.png' width='80' height="80"  className="m-6 image" />
                        <Image alt="Nodejs" src='/languages/nodejs.png' width='100' height="100"  className="m-3 image" />
                    </div>
                    <div className="image-container flex flex-col lg:flex-row justify-around items-center lg:px-11">
                        <Image alt="Nextjs" src={`/languages/${nextjs}.png`} width={`${num1}`} height={`${num1}`}  className="m-3 image" />
                        <Image alt="Redux" src='/languages/redux.png' width='100' height="100"  className="m-3 image" />
                        <Image alt="C++" src='/languages/cpp.png' width='90' height="90"  className="m-8 image" />
                    </div>
                </div>
            </section>
            <section className="py-10 lg:px-10">
                <p className="text-center">Throughout my formation, I've acquired many hard and soft skills.</p>
                <div className="p-4">
                    <div>
                        <h2 className="font-bold text-xl text-center my-4 underline">My hard skills 🛠️ include:</h2>
                        <ul className="flex flex-col">
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <p className="col-span-2 lg:col-span-1 text-center">Systems Programming languages</p>
                                <div className="flex items-center col-span-2 lg:col-span-1">
                                    <Image alt="C++" src='/languages/cpp.png' width='60' height="60"  className="m-3 image" />
                                    <Image alt="C" src='/languages/c.png' width='50' height="50"  className="m-3 image" />
                                </div>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <div className="items-center col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-4">
                                    <Image alt="HTML" src='/languages/html.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="CSS" src='/languages/css.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="Javascript" src='/languages/javascript.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="Typescript" src='/languages/typescript.png' width='50' height="50"  className="m-3 image" />
                                </div>
                                <p className="col-span-2 lg:col-span-1 text-center">Web programming languages</p>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <div className="flex items-center col-span-2 lg:col-span-1 image">
                                    <Image alt="MySQL" src={`/languages/${mysql}.png`} width='50' height="50" className="m-3 image" />
                                    <Image alt="MongoDB" src='/languages/mongodb.png' width='100' height="100" className="m-3 image" />
                                </div>
                                <p className="col-span-2 lg:col-span-1 text-center">Databases</p>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <p className="col-span-2 lg:col-span-1 text-center">Web development frameworks</p>
                                <div className="items-center col-span-2 lg:col-span-1 image grid grid-cols-3 lg:grid-cols-5">
                                    <Image alt="React" src='/languages/react.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Redux" src='/languages/redux.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Nextjs" src={`/languages/${nextjs}.png`} width={`${num}`} height={`${num}`} className="m-3 image" />
                                    <Image alt="Nodejs" src='/languages/nodejs.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Express" src='/languages/express.png' width='50' height="50" className="m-3 image" />
                                </div>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <p className="col-span-2 lg:col-span-1 text-center">Tools and Others</p>
                                <div className="items-center col-span-2 lg:col-span-1 image grid grid-cols-4 lg:grid-cols-5">
                                    <Image alt="SASS" src='/languages/sass.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Tailwindcss" src='/languages/tailwindcss.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Bootstrap" src='/languages/bootstrap.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Git" src='/languages/git.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Github" src='/languages/github.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Postman" src='/languages/postman.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="MongoCompass" src='/languages/compass.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="VSCode" src='/languages/vscode.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="CLion" src='/languages/clion.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Github Copilot" src='/languages/copilot.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Vite" src='/languages/vite.png' width='50' height="50" className="m-3 image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl text-center my-4 underline">My soft skills 🤝 include:</h2>
                        <ul className="flex flex-col">
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <p className="col-span-2 lg:col-span-1 text-center">Teamwork</p>
                                <div className="flex items-center col-span-2 lg:col-span-1">
                                    <Image alt="Teamwork" src='/softSkills/teamwork.png' width='60' height="60"  className="m-3 image" />
                                    <Image alt="SCRUM" src='/softSkills/scrum.png' width='50' height="50"  className="m-3 image" />
                                </div>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <div className="items-center col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-4">
                                    <Image alt="Communication" src='/softSkills/communication.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="Problem Solving" src='/softSkills/problemSolving.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="Adaptability" src='/softSkills/adaptability.png' width='50' height="50"  className="m-3 image" />
                                    <Image alt="Time Management" src='/softSkills/timeManagement.png' width='50' height="50"  className="m-3 image" />
                                </div>
                                <p className="col-span-2 lg:col-span-1 text-center">Communication, Problem Solving, Adaptability, Time Management</p>
                            </li>
                            <li className={`grid grid-cols-2 m-3 items-center justify-items-center border border-${borderColor} lg:border-0 rounded-lg p-3`}>
                                <div className="flex items-center col-span-2 lg:col-span-1 image">
                                    <Image alt="Leadership" src='/softSkills/leadership.png' width='50' height="50" className="m-3 image" />
                                    <Image alt="Creativity" src='/softSkills/creativity.png' width='50' height="50" className="m-3 image" />
                                </div>
                                <p className="col-span-2 lg:col-span-1 text-center">Leadership, Creativity</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;