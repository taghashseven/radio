import React from "react";  
import music from './music'
import CurrentMusic from "./CurrentMusic";

const List = () => {
   
    const OptionIcon = ({stroke , fill })=> {
        return (
            <svg viewBox="0 0 24 24"  className="w-6 h-6" stroke={stroke}>
               <circle cx='10' r='10' cy='10' ></circle>
            </svg>
        )
            
            
    }


    const PlayIcon = ({stroke , fill})=>{
        return (
            <svg viewBox="0 0 24 24 "  className="w-6 h-6 " stroke={stroke}>
                <path d="M 2 2 V 20 L 20 10 Z   "></path>
            </svg>
        )
    }
    return (
       <div className="relative overflow-auto">
         <ul className="mx-2 rounded-sm overflow-auto  ">

            {music.map((song) => {
                const { id, name, artist, album, year, genre, duration, cover } = song;
                return (
                    <li className="flex mb-2 gap-2 bg-slate-800 text-white  " key={id} >
                        <img src='%PUBLIC_URL%/cover.jpg' alt='' className="w-12" />

                        <div className="self-center ">
                            <h4>{song.name}</h4>
                            <p className="text-sm opacity-80 ">{song.artist}</p>
                        </div>

                    <div className="ml-auto flex  items-center space-x-2">
                            <OptionIcon stroke='black ' />
                            <PlayIcon stroke='black' />
                        </div>
                    </li>
                );
            })}
            </ul>

            
       </div>
    )
}

export default List