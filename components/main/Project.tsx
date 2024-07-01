import React from "react";
import Image from "next/image";


function Project ({children, src, title, projectLink} : {children: React.ReactNode, src:string, title:string, projectLink:string}) {

    return (
        <div className="project flex-col items-center flex my-10 lg:mx-28" style={{minHeight: '450px'}}>
            <h3 className="text-center text-2xl m-4">{title}</h3>
            <div className="grid grid-cols-2 items-center">
                <div className="text-justify col-span-2 lg:col-span-1 p-6">
                    <div>{children}</div>
                    <br />
                    <br />
                    <a href={projectLink} style={{textDecoration: 'none', color: "rgb(63, 72, 204)"}} target="_blank">You can see the source code here →</a>
                </div>
                <div className="col-span-2 lg:col-span-1 m-6 flex justify-center items-center">
                    <video width="500" height="500" controls autoPlay muted className="rounded-lg"><source src={src} type="video/mp4" /></video>
                </div>
            </div>
        </div>
    )
}


export default Project;