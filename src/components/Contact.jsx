import React from 'react'
import { Parallax } from 'react-parallax'
import ContactForm from './ContactForm'
import Gmap from './Gmap'


const Contact = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={`https://source.unsplash.com/random/?dark,ocean`}
            bgImageAlt="morning"
            strength={-400} >
            <div
                className='h-screen max-w-7xl md:w-10/12 mx-auto grid md:grid-cols-2 md:gap-10 items-center '>
                <Gmap />
                <ContactForm />
            </div>
        </Parallax>
    )
}

export default Contact
