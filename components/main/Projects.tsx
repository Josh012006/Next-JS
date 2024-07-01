"use client"

import { Merriweather } from "next/font/google";
import Project from "./Project";
import { useState } from "react";

import Image from 'next/image';
import { useAppSelector } from "@/redux/store";


const font = Merriweather({ subsets: ["latin"], weight: '400' });


function Projects () {

    const [toShow, setToShow] = useState(1);

    const theme = useAppSelector((state) => state.theme.theme);

    const express = (theme === "dark") ? "express-white" : "express";
    const mysql = (theme === "dark") ? "mysql" : "mysql-black";

    return(
        <section id="projects" className={(theme === "dark") ? "pt-5 flex flex-col justify-center relative" : "pt-5 flex flex-col justify-center relative bg-slate-200 text-black"}>
            <div
                style={{
                    backgroundImage: `url('/projects/gallery/g${toShow}.png')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                className="absolute -z-10 inset-0 opacity-20"
            ></div>
            <div
                style={{
                    backgroundImage: `url('/projects/gallery/g${toShow}.png')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain'
                }}
                className="relative -z-10 w-3/4 h-3/4 md:w-1/2 md:h-1/2 rounded-full overflow-hidden shadow-lg"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <h2 className={`text-4xl font-bold text-center m-4 ${font.className}`}>Projects</h2>
            <p className="text-center p-4">
                I've completed a number of small projects to display my skills. I will show an 
                overview here but they can be further seen on my github page.
            </p>
            <img alt="usedLanguages" src='https://github-readme-stats.vercel.app/api/top-langs/?username=Josh012006&langs_count=10&text_color=000000&bg_color=FFEADE&title_color=3A0603&layout=compact&border_color=F09B59' width='350' height="350" className="m-3 self-center" />
            <h3 className="text-center text-2xl my-8 font-bold">Click on an image to see the project!</h3>
            <div className="flex flex-col justify-center">
                <div className="lg:pl-96 sm:pl-48 pl-32">
                    <div id="gallery">
                        <div id="1" className="gal" style={{backgroundImage: "url('/projects/gallery/g1.png')"}} onClick={() => setToShow(1)}></div>
                        <div id="2" className="gal" style={{backgroundImage: "url('/projects/gallery/g2.png')"}} onClick={() => setToShow(2)}></div>
                        <div id="3" className="gal" style={{backgroundImage: "url('/projects/gallery/g3.png')"}} onClick={() => setToShow(3)}></div>
                        <div id="4" className="gal" style={{backgroundImage: "url('/projects/gallery/g4.png')"}} onClick={() => setToShow(4)}></div>
                        <div id="5" className="gal" style={{backgroundImage: "url('/projects/gallery/g5.png')"}} onClick={() => setToShow(5)}></div>
                        <div id="6" className="gal" style={{backgroundImage: "url('/projects/gallery/g6.png')"}} onClick={() => setToShow(6)}></div>
                    </div>
                </div>
                <div id="myProjects" className="flex flex-col items-center justify-around">
                    {toShow == 1 && <Project src='/projects/weather.mp4' title="Weather App" projectLink="https://github.com/Josh012006/Weather-App">
                        A simple JavaScript based web app that helps you see the weather ⛅.
                        <br />
                        <br />
                        It makes usage of two APIs: one to fetch the country code and another for the weather informations.
                        It displays a solid use of JavaScript and the DOM but also a good understanding of network requests and
                        asynchronous programming.
                        <br />
                        During this project I've learned how to use APIs and how to handle the data they send back. I've also
                        learned how to use the DOM to display the data in a user-friendly way.
                        <br />
                        <br />
                        I've struggled😅 a bit to find a good way to display the weather data and managing the restrictions for the search bar.
                        But I've managed to do it and I'm really proud of the result. It's a really simple app but I think it really makes a
                        solid use of the basic technologies.
                        <br />
                        <br />
                        <div className="flex image">
                            <Image alt="HTML" src='/languages/html.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="CSS" src='/languages/css.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Javascript" src='/languages/javascript.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                    {toShow == 2 && <Project src='/projects/express.mp4' title="Selling Website" projectLink="https://github.com/Josh012006/Express">
                        Modest website for selling products coded mainly using Express and Handlebars. It's really simple 😄.
                        <br />
                        <br />
                        This project really helped me using express to handle routes. Through it I've also discovered the usage
                        of the view engine Handlebars. I've used a middleware to make the site only available between 9 AM and 5 PM.
                        <br />
                        <br />
                        Through this project I've learned how to use Express to handle routes and how to use Handlebars to display
                        the data. It really gave me a good understanding of routes definition and middlewares. I'm also really proud of
                        the design of the website.
                        <br />
                        <br />
                        <div className="flex image">
                            <Image alt="Javascript" src='/languages/javascript.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Express" src={`/languages/${express}.png`} width='70' height="50"  className="m-3 image" />
                            <Image alt="Handlebars" src='/languages/handlebars.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                    {toShow == 3 && <Project src='/projects/movie.mp4' title="Movie App" projectLink="https://github.com/Josh012006/Movie-App">
                        Movie App created using React, React-Router and Express. The configuration is done with Vite.
                        <br />
                        <br />
                        This project is made in React. I've used purely react and it was useful to build my foundation in the framework.
                        I've used React Router to handle the routes and Express to serve the data. The setup is made with Vite-Express.
                        It also helped me use a MySQL database to store the movies.
                        <br />
                        <br />
                        I think I've struggled a lot regarding the filter for the search and mostly the connection and the management of the database.
                        But it was a really good learning experience and I'm really proud of the result.
                        <br />
                        <br />
                        <div className="grid grid-cols-3 image">
                            <Image alt="React" src='/languages/react.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Express" src={`/languages/${express}.png`} width='70' height="50"  className="m-3 image" />
                            <Image alt="MySQL" src={`/languages/${mysql}.png`} width='50' height="50"  className="m-3 image" />
                            <Image alt="Vite" src='/languages/vite.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                    {toShow == 4 && <Project src='/projects/tasksCpp.mp4' title="Task manager in C++" projectLink="https://github.com/Josh012006/Tasks-Manager">
                        Simple tasks manager wrote in C++. I haven't done the GUI yet so it runs in the terminal.
                        But I plan to do it with Qt.
                        <br />
                        <br />
                        I implemented a task manager that can help you keep your tasks, delete some and even see
                        the saved tasks. The tasks are saved in a file so that they don't disappear after the user
                        closes the program.
                        It is fully implemented in C++. I made it so that the code is really easy to understand for
                        someone with some knowledge of C++ and STL. For the time being it only works in the Terminal.
                        But there will be an app version done with Qt in the near future.
                        <br />
                        <br />
                        <div className="flex image">
                            <Image alt="C++" src='/languages/cpp.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                    {toShow == 5 && <Project src='/projects/tasksJS.mp4' title="Task manager with React and Redux" projectLink="https://github.com/Josh012006/Redux">
                        Task management app written in React using Redux toolkit to manage state.
                        <br />
                        <br />
                        This project make use of React, React Router and Redux toolkit. It's also a task manager but with React and a user-friendly interface.
                        The setup is made using Vite. Through this project, I was able to use Redux Toolkit to manage the state of the app. It was really
                        more easy 😮‍💨 than using Redux alone or manage state with props.
                        <br />
                        <br />
                        <div className="grid grid-cols-3 image">
                            <Image alt="React" src='/languages/react.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Redux" src='/languages/redux.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Vite" src='/languages/vite.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                    {toShow == 6 && <Project src='/projects/cms.mp4' title="CMS Site" projectLink="https://github.com/Josh012006/CMS">
                        A simple CMS app where users can post content and view others' posts. Built with TypeScript and Vite. I've used MongoDB as the database.
                        <br />
                        <br />
                        On this site you can make posts and like others' posts. This project really helped me dive deeper into TypeScript and MongoDB. With the use of
                        Mongoose, I was able to define user, post and media models and controllers. It was my first time really dealing with the storage of images in a database.
                        So it also helped me touch multer. I've also used the FilePond library that is perfect for files uploading.
                        <br />
                        <br />
                        <div className="grid grid-cols-3 image">
                            <Image alt="React" src='/languages/react.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Express" src={`/languages/${express}.png`} width='70' height="50"  className="m-3 image" />
                            <Image alt="MongoDB" src='/languages/mongodb.png' width='100' height="100"  className="m-3 image" />
                            <Image alt="Typescript" src='/languages/typescript.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="Vite" src='/languages/vite.png' width='50' height="50"  className="m-3 image" />
                            <Image alt="TailwindCSS" src='/languages/tailwindcss.png' width='50' height="50"  className="m-3 image" />
                        </div>
                    </Project>}
                </div>
            </div>
        </section>
    )
}


export default Projects;