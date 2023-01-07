import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Follow from './Follow'
import SideMenu from './SideMenu'
import logo from '../assets/it & marketing.png'

const Sidebar = () => {
    const [humberger, setHumberger] = useState(true)
    const [follow, setFollow] = useState(false)
    const handleOpen = () => {
        setHumberger(false)
    }
    const handleClose = () => {
        setHumberger(true)
    }

    return (
        <>
            <div
                className='h-screen w-20 sm:w-28 flex flex-col justify-between items-center py-24 absolute top-0 left-0 border-r-[1px] border-r-[rgb(255,255,255,0.2)] z-40'>
                <div className='cursor-pointer'>
                    <Link to='/'>
                        <img className='h-12' src={logo} alt="" />
                    </Link>
                </div>
                <div className='cursor-pointer'>
                    {/* open icon  */}
                    {humberger === true && <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
                    {/* close icon  */}
                    {humberger === false && <span onClick={handleClose} className="btn btn-sm btn-circle text-4xl">✕</span>}
                </div>
                <Link to='/portfolio' target='_blank' className='text-md rotate-[270deg] uppercase '>Portfolio</Link>
                <div className='cursor-pointer'>
                    {
                        follow === false ?
                            <p onClick={() => setFollow(true)} className='text-md rotate-[270deg] uppercase '>Follow us</p>
                            : <p onClick={() => setFollow(false)} className='text-md rotate-[270deg] uppercase '>Follow us</p>
                    }
                </div>
            </div>
            {humberger === false && <SideMenu />}
            {follow === true && <Follow />}
        </>
    )
}

export default Sidebar