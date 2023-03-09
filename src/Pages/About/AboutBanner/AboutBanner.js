import React from 'react';
import about from '../../../Assets/img/about.jpg'
import labib from '../../../Assets/img/labib.jpg'
import signature from '../../../Assets/img/signature.png'
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <div className='bg-gray-800 pb-10'>
            <img src={about} alt="About" className='about-img w-full' />

            <div className="card lg:card-side shadow-2xl max-w-5xl mx-auto bg-gradient-to-tr from-gray-900 via-indigo-300 to-indigo-200 -mt-44">
                <figure><img src={labib} alt="Album" className='labib-img' /></figure>
                <div className="card-body w-96 content-center mt-5">
                    <h2 className="card-title font-serif text-xl text-gray-800">Labibur Rahman</h2>
                    <p className='font-serif mt-3 text-gray-800'>CEO & FOUNDER OF CAR ZONE.</p>
                    <p className='font-serif text-gray-800'>Remember, the only way you can fail is if you give up. Every time you fail, you come one step closer to success. When you look back on your life, don't have regrets. Believe in yourself, belief in your future, you will find your way.</p>
                    <div className="card-actions justify-end mr-0">
                        <h1 className='text-gray-800 '>CAR ZONE- CEO</h1>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutBanner;