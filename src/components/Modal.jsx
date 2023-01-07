import React from 'react'

const Modal = ({ portfolioImage, portfolioVideo, show, setPortfolioImage }) => {
    console.log(portfolioImage, 'a')

    return (
        <div>
            {
                show === true &&
                <div>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle " />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl flex flex-col justify-center items-center">
                            <img className='object-cover ' src={portfolioImage} alt="" />
                            <div className="modal-action">
                                <label onClick={() => setPortfolioImage('')} htmlFor="my-modal-5" className="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {show === false &&
                <div>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle " />
                    <div className="modal">
                        <div className="modal-box w-10/12 max-w-5xl flex flex-col h-[90vh] justify-center items-center ">
                            <video autoPlay muted controls='' loop className=" h-[85%] w-fit " >
                                <source src={portfolioImage} type="video/mp4" />
                            </video>
                            <div className="modal-action">
                                <label onClick={() => setPortfolioImage('')} htmlFor="my-modal-5" className=" btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal