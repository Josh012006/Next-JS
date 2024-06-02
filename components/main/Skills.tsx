import { Merriweather } from "next/font/google";
import Image from 'next/image';


const font = Merriweather({ subsets: ["latin"], weight: '400' });


function Skills () {
    return(
        <section id="skills" className="pt-5 flex flex-col justify-center" style={{minHeight: '550px'}}>
            <h2 className={`text-4xl font-bold text-center m-4 ${font.className}`}>My Skills</h2>
            <div className="image-container flex flex-col lg:flex-row justify-around items-center">
                <Image alt="MongoDB" src='/languages/mongodb.png' width='150' height="150" layout="intrinsic" className="m-3 image" />
                <Image alt="Express" src='/languages/express.png' width='100' height="100" layout="intrinsic" className="m-3 image" />
                <Image alt="React" src='/languages/react.png' width='80' height="80" layout="intrinsic" className="m-6 image" />
                <Image alt="Nodejs" src='/languages/nodejs.png' width='100' height="100" layout="intrinsic" className="m-3 image" />
            </div>
            <div className="image-container flex flex-col lg:flex-row justify-around items-center lg:px-11">
                <Image alt="Nextjs" src='/languages/nextjs.png' width='150' height="150" layout="intrinsic" className="m-3 image" />
                <Image alt="Redux" src='/languages/redux.png' width='100' height="100" layout="intrinsic" className="m-3 image" />
                <Image alt="C++" src='/languages/cpp.png' width='90' height="90" layout="intrinsic" className="m-8 image" />
            </div>
        </section>
    )
}

export default Skills;