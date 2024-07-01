"use client"

import React from "react";


import { useAppSelector } from "@/redux/store";




function Main({children} : {children: React.ReactNode}) {

    const theme = useAppSelector((state) => state.theme.theme);

    return (
        <main style={{minHeight: '604px'}} className={(theme === "dark") ? "flex flex-col justify-between" : "flex flex-col justify-between bg-slate-200 text-black"}>
            {children}
        </main>
    );
}


export default Main;