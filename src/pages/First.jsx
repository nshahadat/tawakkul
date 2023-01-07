import React, { useRef } from 'react'
// import { Parallax } from 'react-parallax'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import one from '../assets/parallax/1.jpg'

const First = () => {
    const ref = useRef()

    return (
        <Parallax
            ref={ref}
            pages={1}
        // bgImage={one}
        // bgImageAlt="the man"
        // strength={800}
        // className='h-screen'
        >
            <ParallaxLayer
                offset={1}
                speed={1}
                factor={2}
                style={{
                    backgroundImage: `url(${one})`,
                    backgroundSize: 'cover',
                }}
            >

                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime, impedit recusandae ut eaque culpa voluptates aspernatur qui praesentium eum, est minus dolorum enim rerum, corporis veritatis consequuntur aperiam ex!</h2>

            </ParallaxLayer>
        </Parallax>
    )
}

export default First
