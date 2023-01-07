import React from 'react'
import { Parallax } from 'react-parallax';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={`https://source.unsplash.com/random/?dark,fire`}
            bgImageAlt="morning"
            strength={-400} >
            <div
                className='h-screen max-w-screen sm:max-w-7xl md:w-10/12 mx-auto relative flex flex-col justify-around ' >
                {/* footer top info  */}
                <div
                    className='py-[5%] '>
                    <h2
                        data-aos='fade-up'
                        data-aos-duration='500'
                        className='uppercase text-xl md:text-2xl py-[5%] text-center md:text-left'>If you’d like more information about how you can get involved with our work</h2>
                    {/* main title  */}
                    <h1
                        data-aos='fade-up'
                        data-aos-duration='550'
                        className='2xl:text-7xl text-5xl font-semibold 2xl:leading-loose leading-normal  mb-8 text-center md:text-left'>Please join us on  Tawakkul Group  Websites & Social Media</h1>
                    <button
                        data-aos='fade-up'
                        data-aos-duration='600'
                        className='text-xl float-right inline-block border-b-2 mb-10 border-pink-500'>+8801998860924</button>
                </div>
                {/* footer bottom info  */}
                <div
                    className='absolute px-[5%] sm:px-[0%] bottom-0 py-5 border-t-[1px] border-white flex justify-between items-center w-full'>
                    <p>&copy; {year} Tawakkul Group | All right reserved</p>
                    <p className='text-right'>Site developed by Tawakkul IT Team</p>
                </div>
            </div>

        </Parallax>
    )
}

export default Footer