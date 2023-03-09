import React from 'react';
import arrival1 from '../../Assets/img/arrival1.jpg'
import arrival2 from '../../Assets/img/arrival2.jpg'
import './NewArrivals.css'

const NewArrivals = () => {
    return (
        <div className='bg-gray-800 p-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-7xl mx-auto'>
                <div className='' data-aos="fade-up-right">
                    <img src={arrival2} alt="" className='arrivals-img ' />
                    <div className="absolute  ">
                        <h1 className='text-xl font-bold text-white font-serif -mt-80 ml-80'>New Arrivals</h1>
                        <p className='text-white ml-80 w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div data-aos="fade-down-left">
                    <img src={arrival1} alt="" className='arrivals-img' />
                    <div className="absolute ">
                        <h1 className='text-xl font-bold text-white font-serif -mt-80 ml-20'>Best Products</h1>
                        <p className='text-white ml-20 w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;