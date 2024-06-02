import { Merriweather } from "next/font/google";
import Project from "./Project";


const font = Merriweather({ subsets: ["latin"], weight: '400' });


function Projects () {

    return(
        <section id="projects" className="pt-5 flex flex-col justify-center">
            <h2 className={`text-4xl font-bold text-center m-4 ${font.className}`}>Projects</h2>
            <p className="text-center">
                I've completed a number of small projects to display my skills. I will show an 
                overview here but they can be further seen on my github page.
            </p>
            <img alt="usedLanguages" src='https://github-readme-stats.vercel.app/api/top-langs/?username=Josh012006&langs_count=10&text_color=000000&bg_color=FFEADE&title_color=3A0603&layout=compact&border_color=F09B59' width='350' height="350" className="m-3 self-center" />
            <h3 className="text-center text-3xl my-8 font-bold">Click on an image to see the project!</h3>
            <div className="lg:pl-96 pl-24">
                <div id="gallery">
                    <div id="1" className="gal" style={{backgroundImage: "url('/projects/gallery/g1.png')"}}></div>
                    <div id="2" className="gal" style={{backgroundImage: "url('/projects/gallery/g2.png')"}}></div>
                    <div id="3" className="gal" style={{backgroundImage: "url('/projects/gallery/g3.png')"}}></div>
                    <div id="4" className="gal" style={{backgroundImage: "url('/projects/gallery/g4.png')"}}></div>
                    <div id="5" className="gal" style={{backgroundImage: "url('/projects/gallery/g5.png')"}}></div>
                    <div id="6" className="gal" style={{backgroundImage: "url('/projects/gallery/g6.png')"}}></div>
                </div>
            </div>
            <div id="myProjects" className="flex flex-col items-center justify-around">
                <Project src='/projects/weather.mp4' title="Weather App" projectLink="https://github.com/Josh012006/Weather-App">
                    A simple JavaScript based web app that helps you see the weather ⛅.
                    <br />
                    <br />
                    It makes usage of two APIs: one to fetch the country code and another for the weather informations.
                    It displays a solid use of JavaScript and the DOM but also a good understanding of network requests and
                    asynchronous programming.
                </Project>
                <Project src='/projects/express.mp4' title="Selling Website" projectLink="https://github.com/Josh012006/Express">
                    Modest website for selling products coded mainly using Express and Handlebars. It's really simple 😄.
                    <br />
                    <br />
                    This project really helped me using express to handle routes. Through it I've also discovered the usage 
                    of the view engine Handlebars. I've used a middleware to make the site only available between 9 AM and 5 PM.
                </Project>
                <Project src='/projects/movie.mp4' title="Movie App" projectLink="https://github.com/Josh012006/Movie-App">
                    Movie App created using React, React-Router and Express. The configuration is done with Vite.
                    <br />
                    <br />
                    It's my first real React Project. It's a website where you can search films by their name and display their infos. 
                    The movies' infos are stored in a SQL database.
                </Project>
                <Project src='/projects/tasksCpp.mp4' title="Task manager in C++" projectLink="https://github.com/Josh012006/Tasks-Manager">
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
                </Project>
                <Project src='/projects/tasksJS.mp4' title="Task manager with React and Redux" projectLink="https://github.com/Josh012006/Redux">
                    Task management app written in react using redux toolkit to manage state.
                    <br />
                    <br />
                    This project make use of React, React Router and Redux toolkit. It's also a task manager but with React and a user-friendly interface.
                    The setup is made using Vite.
                </Project>
                <Project src='/projects/nextjs.mp4' title="Portfolio with Next.js" projectLink="https://github.com/Josh012006/Next-JS">
                    That's the project your are currently looking at. It's done meticulously with Next.js.
                    <br />
                    <br />
                    It demonstrates my ability to use Next.js to build interesting and complete React apps.
                </Project>
            </div>
        </section>
    )
}


export default Projects;