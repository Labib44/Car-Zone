import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <section className="py-10">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-4">
                    <div className="py-6 md:py-0 md:px-6" data-aos="fade-right" data-aos-duration="1500">
                        <h1 className="text-4xl font-bold font-serif">Let's get in touch</h1>
                        <p className="pt-2 pb-4">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Mirpur-6, Dhaka.</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01739999465</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>mdlabib162@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid" data-aos="fade-left" data-aos-duration="1500">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block p-3 w-full border-none rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block p-3 w-full border-none rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block p-3 w-full border-none rounded-md "></textarea>
                        </label>
                        {/* <button type="button" className="self-center px-8 py-3 text-lg  rounded  btn btn-outline btn-accen">Submit</button> */}
                        <Link to={'/moreProduct'} className="btn text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Submit</Link>
                    </form>
                </div>
            </section>

            <div className="w-full mt-24" >
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center font-serif">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <Link to={'/moreProduct'} className="btn text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Subscribe</Link>
                        {/* <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 btn btn-outline btn-accen">Subscribe</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;