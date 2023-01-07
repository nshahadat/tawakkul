import React, { useState } from 'react'
import Modal from '../components/Modal'

const Portfolio = () => {
    const [portfolioImage, setPortfolioImage] = useState('')
    const [portfolioVideo, setPortfolioVideo] = useState('')
    const [show, setShow] = useState('')
    const pImage = (link) => {
        setPortfolioImage(link)
        setShow(true)
    }
    const pVideo = (link) => {
        setShow(false)
        setPortfolioImage(link)
    }


    return (
        <>
            <div className='grid md:grid-cols-12 gap-3'>
                <div className='md:col-span-2 grid md:grid-rows-6 gap-3 h-screen'>
                    <div className='md:row-span-1 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" />
                            </div>
                            <div className="card__overlay cover ">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='md:row-span-3 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover w-full h-full">
                                    <source src='https://player.vimeo.com/external/552791637.sd.mp4?s=93a1f7c7e63f3e2bc2ef97a7afbe52ae44df762c&profile_id=165&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>

                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/552791637.sd.mp4?s=93a1f7c7e63f3e2bc2ef97a7afbe52ae44df762c&profile_id=165&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:col-span-3 grid md:grid-rows-6 gap-3 h-screen'>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/387147602.sd.mp4?s=cf22c67527a0d89c37483768ffa7a7755e3c8c5a&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/387147602.sd.mp4?s=cf22c67527a0d89c37483768ffa7a7755e3c8c5a&profile_id=164&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>


                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/659136047.sd.mp4?s=765bd3a128614450e6ae490460f9d85fc5a6bd0f&profile_id=164&oauth_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/659136047.sd.mp4?s=765bd3a128614450e6ae490460f9d85fc5a6bd0f&profile_id=164&oauth_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:col-span-2 grid md:grid-rows-6 gap-3 h-screen'>
                    <div className='md:row-span-1 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full ">
                                    <source src='https://player.vimeo.com/external/538514994.sd.mp4?s=fb84d7f46e2dedaf8dea69fb8f87b281de5b0a5c&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/538514994.sd.mp4?s=fb84d7f46e2dedaf8dea69fb8f87b281de5b0a5c&profile_id=164&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1621856625680-282ec3a17db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1621856625680-282ec3a17db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-1 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/503115974.sd.mp4?s=e5f7713b309dd050353102477b194689ae5945f6&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/503115974.sd.mp4?s=e5f7713b309dd050353102477b194689ae5945f6&profile_id=164&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:col-span-3 grid md:grid-rows-6 gap-3 h-screen'>
                    <div className='md:row-span-3 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/463386198.hd.mp4?s=842a862746a5f4d0d9e91f0d0ccaa96925f1fb4d&profile_id=174&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/463386198.hd.mp4?s=842a862746a5f4d0d9e91f0d0ccaa96925f1fb4d&profile_id=174&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-3 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/553360520.sd.mp4?s=dc6a59ededa3ae22394c88205bd9068135b8211e&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/553360520.sd.mp4?s=dc6a59ededa3ae22394c88205bd9068135b8211e&profile_id=164&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:col-span-2 grid md:grid-rows-6 gap-3 h-screen'>
                    <div className='md:row-span-3 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <video autoPlay muted controls='' loop className=" object-cover h-full w-full">
                                    <source src='https://player.vimeo.com/external/538515047.sd.mp4?s=cd6e4bd9735808a1f62e1f483ba1d7ca17503211&profile_id=165&oauth2_token_id=57447761' type="video/mp4" />
                                </video>
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pVideo('https://player.vimeo.com/external/538515047.sd.mp4?s=cd6e4bd9735808a1f62e1f483ba1d7ca17503211&profile_id=165&oauth2_token_id=57447761')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-2 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:row-span-1 overflow-hidden '>

                        <div className="card h-full w-full">
                            <div className="card__bg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1617695744007-68ef55752789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <div className="card__overlay cover">
                                <div className='flex justify-center items-center h-full text-xl  cursor-pointer'>
                                    <label onClick={() => pImage('https://images.unsplash.com/photo-1617695744007-68ef55752789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')} htmlFor="my-modal-5" >View</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Modal portfolioImage={portfolioImage} portfolioVideo={portfolioVideo} show={show} setPortfolioImage={setPortfolioImage} setPortfolioVideo={setPortfolioVideo} />

        </>
    )
}

export default Portfolio