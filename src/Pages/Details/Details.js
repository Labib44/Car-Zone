import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import './Detail.css';
import Related from './Related';

const Details = () => {
    const modalData = useLoaderData();
    const { name, price, originalPrice, picture, location, usedTime, sellerName, details } = modalData;
    return (
        <div className='bg-gradient-to-r from-gray-900 via-sky-300 to-gray-900 p-10'>
            {/* <h1 className='text-4xl text-center text-white font-bold font-serif p-3'>WELCOME</h1> */}
            <div className="card lg:card-side shadow-2xl max-w-6xl mx-auto" data-aos="zoom-in-up">
                <figure><img src={picture} alt="Album" className='detail-img h-full' /></figure>
                <div className="card-body w-96 content-center">
                    <h2 className="card-title font-serif text-2xl text-red-700">{name}</h2>
                    <p className='font-serif text-gray-700'>Old Price: ${originalPrice}</p>
                    <p className='font-serif text-gray-700'>New Price: ${price}</p>
                    <p className='font-serif text-gray-700'>Used Time: {usedTime}</p>
                    <p className='font-serif text-gray-700'>Seller: {sellerName}</p>
                    <p className='font-serif text-gray-700'>Location: {location}</p>
                    <p className='font-serif text-gray-700'>{details}</p>
                    <div className="card-actions justify-end mr-0">
                        <label htmlFor="booking-modal" className="btn btn-primary btn-sm">Add To Cart</label>
                    </div>
                </div>
                <BookingModal
                    modalData={modalData}
                ></BookingModal>
            </div>

            <Related></Related>
        </div>
    );
};

export default Details;