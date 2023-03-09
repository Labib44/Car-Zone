import React from 'react';
import car1 from '../../Assets/img/car1.jpg'
import car2 from '../../Assets/img/car2.jpg'
import car3 from '../../Assets/img/car3.jpg'
import car4 from '../../Assets/img/car4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img w-full'>
                    <img src={car1} className="w-full img-pro"  alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-5xl font-bold text-white font-serif p-5'>AWESOME NEW CAR</h1> <br/>
                    
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-2xl text-white font-serif p-5'>Get The Best prices On Great Best Car.<br/> Car Zone Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-80 top-1/2">
                <button className="btn btn-outline btn-error ">Shop Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={car2} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-5xl font-bold text-white font-serif p-5'>AWESOME NEW CAR</h1>
                    
                </div>
               
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-2xl text-white font-serif p-5'>Get The Best prices On Great Best Car.<br/> Car Zone Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-80 top-1/2">
                <button className="btn btn-outline btn-error ">Shop Now</button>
                </div>
                
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={car3} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-5xl font-bold text-white font-serif p-5'>AWESOME NEW CAR</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-2xl text-white font-serif p-5'>Get The Best prices On Great Best Car.<br/> Car Zone Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-80 top-1/2">
                <button className="btn btn-outline btn-error ">Shop Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={car4} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-5xl font-bold text-white font-serif p-5'>AWESOME NEW CAR</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-2xl text-white font-serif p-5'>Get The Best prices On Great Best Car.<br/> Car Zone Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-80 top-1/2">
                <button className="btn btn-outline btn-error ">Shop Now</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Banner;