import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef()
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_tyhbpyi', 'template_4p656rw', form.current, 'QqCpv8bI7TkcYvR3-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    }

    return (
        <div className="relative  px-5 sm:px-0 sm:max-w-xl sm:mx-auto ">
            <form ref={form} onSubmit={sendEmail}>
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl mx-4">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-black">Share your queries with us</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {/* input field  */}
                                <div className="relative form-control">
                                    <input autoComplete="off" id="email" name="name" type="text" className="bg-white peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="My name is" />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">My name is</label>
                                </div>
                                <div className="relative form-control">
                                    <input autoComplete="off" id="password" name="query" type="text" className=" bg-white peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="query" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">My query is</label>
                                </div>
                                <div className="relative form-control">
                                    <input autoComplete="off" id="password" name="password" type="number" className=" bg-white peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">My contact number is</label>
                                </div>
                                <div className="relative form-control">
                                    <input autoComplete="off" id="password" name="password" type="textarea" className=" bg-white peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">My query details is</label>
                                </div>
                                {/* submit button  */}
                                <div className="relative form-control bg-gradient-to-l from-blue-300 to-blue-600 rounded-md px-2 py-1">
                                    <input type="submit" value='Share' className="text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
