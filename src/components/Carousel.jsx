import React from 'react'
import Sidebar from './Sidebar'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import { Parallax } from 'react-parallax'

const Carousel = () => {

    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            strength={-200} >
            <div className='h-screen'>
                <Sidebar />
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide relative "
                    data-bs-ride="carousel">
                    {/* button div  */}
                    <div
                        className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        >
                        </button>
                    </div>
                    {/* video set div  */}
                    <div
                        className="carousel-inner relative w-full overflow-hidden">
                        {/* video 1  */}
                        <div
                            className="carousel-item active relative float-left w-full">
                            <video
                                autoPlay muted controls=''
                                loop
                                className="block h-screen w-full object-cover">
                                <source src={video1} type="video/mp4" />
                            </video>
                            <div
                                className="carousel-caption md:block absolute text-right md:text-center bottom-[40%]">
                                {/* caption  */}
                                <h5 className="text-4xl md:text-7xl font-extrabold uppercase mb-2 ">Tawakkul Group</h5>
                                <p className='text-l md:text-xl border-b-2 inline '>Welcome to The Universe of Tawakkul Group </p>
                            </div>
                        </div>
                        {/* video 2  */}
                        <div
                            className="carousel-item relative float-left w-full ">
                            <video autoPlay muted controls='' loop
                                className="block h-screen w-full object-cover">
                                <source src={video2} type="video/mp4" />
                            </video>
                            <div className="carousel-caption md:block absolute text-right md:text-center bottom-[40%]">
                                {/* caption  */}
                                <h5 className="text-4xl md:text-7xl font-extrabold uppercase mb-2 ">Smart and Efficient </h5>
                                <p className='text-l md:text-xl border-b-2 inline '>We are here to answer all of your IT & Marketing related problem </p>
                            </div>
                        </div>
                        {/* video 3  */}
                        <div className="carousel-item relative float-left w-full">
                            <video autoPlay muted controls='' loop
                                className="block h-screen w-full object-cover">
                                <source src={video3} type="video/mp4" />
                            </video>
                            <div className="carousel-caption md:block absolute text-right md:text-center bottom-[40%]">
                                {/* caption  */}
                                <h5 className="text-4xl md:text-7xl font-extrabold uppercase mb-2 ">Honest Services & Products</h5>
                                <p className='text-l md:text-xl border-b-2 inline '>We will deliver the best service that can be offered In sha Allah </p>
                            </div>
                        </div>
                    </div>
                    {/* control button  */}
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-36"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        {/* <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
                        <span className="invisible md:visible text-4xl opacity-30"></span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-36"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        {/* <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
                        <span className="invisible md:visible text-4xl opacity-30"></span>
                    </button>
                </div>
            </div>
        </Parallax>
    )
}

export default Carousel