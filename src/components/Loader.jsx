import React from 'react'
import Typewriter from "react-ts-typewriter";

const Loader = ({ title, video }) => {
    console.log(video)

    return (
        <div>
            <div className="loader">
            {/* <marquee direction="right" scrollamount="10">Tawakul</marquee>
            <marquee direction="left" scrollamount="30">Tawakul</marquee>
            <marquee direction="right" scrollamount="20">Tawakul</marquee>
            <marquee direction="" scrollamount="40">Tawakul</marquee>
            <marquee direction="left" scrollamount="30">Tawakul</marquee> */}
            <video autoPlay muted controls='' loop className="block h-screen w-full object-cover blur-[10px]">
                <source src={video} type="video/mp4"/>
            </video>
            <div className="intro ">
            <h1 className="intro-title text-[30px] sm:text-[70px]"><Typewriter text={title} loop={true} speed={500} delay={100} className="" /></h1>
            </div>
            </div>
        </div>
    )
}

export default Loader