import React from 'react'
import { Parallax } from 'react-parallax'
import six from '../assets/parallax/6.jpg'
const Six = () => {
    return (
        <Parallax
            bgImage={six}
            bgImageAlt="the man"
            strength={800}
            className='h-screen object-center'
        >
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime, impedit recusandae ut eaque culpa voluptates aspernatur qui praesentium eum, est minus dolorum enim rerum, corporis veritatis consequuntur aperiam ex!</h2>
        </Parallax>
    )
}

export default Six