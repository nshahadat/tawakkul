import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {

    return (
        <div>
            <div style={{
                backgroundImage: `url("https://images.pexels.com/photos/14469236/pexels-photo-14469236.jpeg?auto=compress&cs=tinysrgb&w=600")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} className='h-screen absolute top-0 left-28 md:w-screen z-50 bg-[#003049] pl-10 sm:pl-20'>
                <div className=' h-screen flex flex-col justify-evenly '>
                    <Link to='/it' target='_blank'>
                        <div className='font-bold uppercase '>
                            <h1 className='text-2xl md:text-5xl hover:text-[#f72585] duration-500'>Tawakkul It & Marketing</h1>
                            <h2 className='text-sm md:text-md'>Tawakkul Group</h2>
                        </div>
                    </Link>
                    <Link to='/fabrics' target='_blank'>
                        <div className='font-bold uppercase '>
                            <h1 className='text-2xl md:text-5xl hover:text-[#f72585] duration-500'>Tawakkul Fabrics & Accessories</h1>
                            <h2 className='text-sm md:text-md'>Tawakkul Group</h2>
                        </div>
                    </Link>
                    <Link to='/property' target='_blank'>
                        <div className='font-bold uppercase '>
                            <h1 className='text-2xl md:text-5xl hover:text-[#f72585] duration-500'>Tawakkul Property Solution</h1>
                            <h2 className='text-sm md:text-md'>Tawakkul Group</h2>
                        </div>
                    </Link>
                    <Link to='/lifestyle' target='_blank'>
                        <div className='font-bold uppercase '>
                            <h1 className='text-2xl md:text-5xl hover:text-[#f72585] duration-500'>Tawakkul Lifestyle</h1>
                            <h2 className='text-sm md:text-md'>Tawakkul Group</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu