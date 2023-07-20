import React from "react";
import {useSelector , useDispatch} from "react-redux";
import  {closeModel } from "../store/navStore";


const   SideBar = (props) => {

    const dispatch = useDispatch(); 

    // icons 

    const CloseIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 cursor-pointer   ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        )
    }

    const HomeIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-4 h-4 cursor-pointer  ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        )
    }

    const AboutIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-4 h-4 cursor-pointer ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        )
    }

    const ContactIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-4 h-4 cursor-pointer ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        )
    }

    const SettingsIcon = () => {
        return (    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-4 h-4 cursor-pointer ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        )
    }

    return (
        <div className="bg-dark-100 stroke-gray-400 h-full px-6  ">
            <div className="flex justify-end md:hidden ">
                <div className="bg-black " onClick={()=>dispatch(closeModel())}>
                    <CloseIcon />
                </div>
            </div>
            <ul className="capitalize text-gray-400 ">
                <li className="p-2  flex  items-center ">
                    <HomeIcon />
                    <a href="#" className="pl-4">Home</a>
                </li>
                <li className="p-2   flex items-center">
                    <AboutIcon />
                    <a href="#" className="pl-4">About</a>
                </li>
                <li className="p-2    flex items-center">
                    <ContactIcon />
                    <a href="#" className="pl-4">Contact</a>
                </li>
                
                <li className="p-2   flex items-center">
                    <AboutIcon />
                    <a href="#" className="pl-4">Playlist</a>
                </li>
                <li className="p-2    flex items-center">
                    <ContactIcon />
                    <a href="#" className="pl-4">Create Playlist</a>
                </li>
                
                <li className="p-2 opacity-[95%] bg-black flex items-center  ">
                    <SettingsIcon />
                    <a href="#" className="pl-4 ">settings</a>
                </li>
                
            </ul>
        </div>
    )
}

export default SideBar