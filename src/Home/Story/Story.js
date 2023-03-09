import React from 'react';
import story from '../../Assets/img/story0.jpg'
import signature from '../../Assets/img/signature.png'
import './Story.css';

const Story = () => {
    return (
        <div className='bg-gray-800 p-5 '>
            <h1 className='text-4xl text-center text-white font-bold font-serif p-3'>WELCOME TO CAR ZONE STORE</h1>
            <div className="card lg:card-side shadow-2xl max-w-5xl mx-auto" data-aos="zoom-in-up">
                <figure><img src={story} alt="Album" className='story-img' /></figure>
                <div className="card-body w-96 content-center mt-10">
                    <h2 className="card-title font-serif text-xl text-white">MEET OUR</h2>
                    <p className='font-serif mt-3 text-white'>CAR CLUB SINCE 1892.</p>
                    <p className='font-serif text-white'>Traditional dishes with local products of highest quality. including succulent Veal Chops Siciliano, spicy Lobster Fra Diavolo, tender Chicken Contadina.</p>
                    <div className="card-actions justify-end mr-0">
                        <h1 className='text-white '>CAR ZONE- CEO LABIB</h1>
                       {/* <figure>
                       <img src={signature} alt="" className='w-24 h-24'/>
                       </figure> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;