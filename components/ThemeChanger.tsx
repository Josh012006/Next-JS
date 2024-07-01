"use client"

import { AppDispatch, useAppSelector } from "@/redux/store";
import { changeTheme } from "@/redux/themeSlice";
import { useDispatch } from "react-redux";



function ThemeChanger() {

    const dispatch = useDispatch<AppDispatch>();

    const theme = useAppSelector((state) => state.theme.theme);

    const color = theme === "dark" ? "white" : "black";

    return (
        <div className="themeChanger fixed z-50 bottom-20 m-3 right-0 w-14">
            <div onClick={() => {dispatch(changeTheme())}} className={`cursor-pointer w-12 h-12 rounded-3xl p-4 bg-${color} z-50 flex items-center justify-center`}>
                {theme === "dark" && <i className="fa-solid fa-sun text-black" aria-hidden="true"></i>}
                {theme === "light" && <i className="fa-solid fa-moon text-white" aria-hidden="true"></i>}
            </div>
        </div>
    );
}

export default ThemeChanger;