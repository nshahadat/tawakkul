import React from 'react'
import { FacebookOutlined, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Follow = () => {

    return (
        <div className='h-screen absolute top-0 left-20 md:left-28 md:w-full z-50 bg-[#003049]'>
            <div className='h-screen flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-bold mx-2 mb-10 text-[#f72585] flex items-center justify-center'>Social Share</h1>
                <div className='flex justify-center gap-6 md:gap-10'>
                    <p>
                        <a href="https://www.facebook.com/thetawakkulgroup" target="_blank" rel="noreferrer"><FacebookOutlined /></a>
                    </p>
                    <p>
                        <Instagram />
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/company/tawakkulit/" target="_blank" rel="noreferrer"><LinkedIn /></a>
                    </p>
                    <p>
                        <YouTube />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Follow