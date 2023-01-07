import React from 'react'
import 'swiper/css';

import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';


const Slide = () => {

    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={`https://source.unsplash.com/random/?dark,road`}
            bgImageAlt="morning"
            strength={-400} >
<div className="flex justify-center items-center mt-6 h-fit sm:h-screen overflow-auto flex-col sm:flex-row">
    <div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

<Link to='/it' target='_blank'>
        <div className="w-80 h-full  relative">

            <div className="pb-24 bg-white py-4 px-4 border-8 border-blue-600 rounded-xl h-full shadow-2xl flex justify-center items-center flex-col">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="w-64 h-64 rounded-xl" />

                    <p className="text-black mt-4">Tawakkul IT and Marketing</p>
            </div>

        </div>
        </Link>
    </div>

    <div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
    <Link to='/fabrics' target='_blank'>
<div className="w-80 h-full  relative">

    <div className="pb-24 bg-white py-4 px-4 border-8 border-green-600 rounded-xl h-full shadow-2xl flex justify-center items-center flex-col">
        <img src="https://images.unsplash.com/photo-1534639077088-d702bcf685e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFicmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "className="w-64 h-64 rounded-xl object-cover" />

            <p className="text-black mt-4">Tawakkul Fabrics and Accessories</p>
    </div>

</div>
</Link>
</div>

<div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
<Link to='/property' target='_blank'>
<div className="w-80 h-full  relative">

    <div className="pb-24 bg-white py-4 px-4 border-8 border-orange-600 rounded-xl h-full shadow-2xl flex justify-center items-center flex-col">
        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-64 h-64 rounded-xl object-cover" />

            <p className="text-black mt-4">Tawakkul Property Solution</p>
    </div>

</div>
</Link>
</div>

<div className="grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
<Link to='/lifestyle' target='_blank'>
<div className="w-80 h-full  relative">

    <div className="pb-24 bg-white py-4 px-4 border-8 border-purple-600 rounded-xl h-full shadow-2xl flex justify-center items-center flex-col">
        <img src="https://images.unsplash.com/photo-1600268971003-c19ffd730c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGxpZmVzdHlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-64 h-64 rounded-xl object-cover" />

            <p className="text-black mt-4">Tawakkul Lifestyle</p>
    </div>

</div>
</Link>
</div>
</div>

        </Parallax>
    )
}

export default Slide