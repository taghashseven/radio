import React    from "react";
import { useState , useRef , useEffect } from "react";
import SideBar from "./SideBar";
import { useSelector , useDispatch } from "react-redux";
import { openModel , closeModel } from "../store/navStore";


const Nav = () => {


    const dispatch = useDispatch();
    const openModelHandler = () => {
        dispatch(openModel());
    }
   

    const SearchIcon = () => {
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
         )      
    }

    const MenuIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        )
    }

   

    return (
        <div >
            <nav className="flex  bg-red-400 w-full  justify-between italic p-2  ">
                <h1>MusicRadio</h1>
                <div className="flex grow  justify-end ">
                    <div className="mx-4 md:hidden">
                        <SearchIcon  /> 
                    </div>
                    <div className="mx-4  md:hidden " onClick={()=>dispatch(openModel())} >
                        <MenuIcon  /> 
                    </div>

                    <form className="hidden md:flex bg-white rounded-lg p-[1px]">
                        <SearchIcon  />
                        <input type="text" className="outline-none px-2 rounded-lg w-[400px] bg-inherit" placeholder="search"/>
                    </form>

                </div>
                
            </nav>
        </div >
    );
}

export default Nav; 