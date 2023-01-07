import React from 'react'
import { Parallax } from 'react-parallax'
import five from '../assets/parallax/5.jpg'
const Five = () => {
    return (
        <Parallax
            bgImage={five}
            bgImageAlt="the man"
            strength={800}
            className='h-screen object-center'
        >
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime, impedit recusandae ut eaque culpa voluptates aspernatur qui praesentium eum, est minus dolorum enim rerum, corporis veritatis consequuntur aperiam ex!</h2>
        </Parallax>
    )
}

export default Five