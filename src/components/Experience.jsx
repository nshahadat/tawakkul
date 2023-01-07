import React from 'react'
import { Parallax } from 'react-parallax'

const Experience = () => {

    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={`https://source.unsplash.com/random/?dark,sky`}
            bgImageAlt="morning"
            strength={-400} >
            <div
                className='h-screen max-w-7xl md:w-10/12 mx-auto flex flex-col justify-center items-center text-white'  >
                <div
                    className='grid md:grid-cols-2 md:gap-5 gap-20  justify-between items-center md:text-left text-center md:mx-0 mx-2 '  >
                    {/* left side part  */}
                    <div >
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='500'
                            className='md:text-7xl text-4xl uppercase md:leading-normal leading-normal md: font-semibold md:mb-8 mb-5'>At <br /> Tawakkul <br /> Group</h1>
                        <p data-aos='fade-up' data-aos-duration='550' className='border-b-2 border-pink-500 text-white inline-block md:text-xl '>hello@tawakkulgroup.com</p>
                    </div>
                    {/* right side part  */}
                    <div>
                        <h2 data-aos='fade-up' data-aos-duration='600' className='md:text-2xl text-lg font-bold leading-normal  mb-8 '>Our mission is to make people's <br /> life easier by providing  </h2>
                        <h1 data-aos='fade-up' data-aos-duration='650' className='md:text-6xl text-3xl  md:leading-normal leading-normal font-semibold  mb-8 '  >Smart, Efficient and Honest Services & Products</h1>
                        <h2 data-aos='fade-up' data-aos-duration='700' className='md:text-2xl text-lg font-bold text-white leading-normal' >  whilst maintaining Islamic Shariah Law
                        </h2>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Experience