import React from "react";
import { useState , useEffect } from "react";
import List  from "../components/List";
import Nav  from "../components/nav"; 
import CurrentMusic from "../components/CurrentMusic";
import './ListPage.css'
import SideBar from "../components/SideBar";
import { useSelector , useDispatch } from "react-redux";
import navStore from "../store/navStore";


const ListPage = () => {

    const navState = useSelector(state => state.nav.openModel);

    console.log(navState)

    return (
        <div className="fixed  w-full top-0 bottom-0 bg-dark-200 grid  layout grid-cols-12">
            <div class='col-span-12'>
                <Nav />
            </div>

            <div className="col-span-12 md:grid grid-cols-12  main">
                <div className={"col-span-2 fixed md:relative  w-4/6 md:w-full  top-0 bottom-0 bg-red-300 z-10  md:block  " + (navState ? '' : 'hidden') }>
                    <SideBar />
                </div>
                <div className="col-span-10 overflow-auto">
                    <List />
                    <div className="col-span-12 absolute bottom-0 bg-yellow-200 w-full ">  
                    <CurrentMusic />
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default ListPage