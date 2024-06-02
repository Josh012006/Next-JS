import About from "@/components/main/About";
import Home from "@/components/main/Home";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

function Main() {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Projects />
        </>
    );
}

export default Main;
