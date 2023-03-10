import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import './Products.css';

const ProductCard = ({ product }) => {
    const { _id,name, price, originalPrice, picture } = product;
    return (
        <div className="card w-96 glass shadow-[0_35px_35px_rgba(255,192,203)]">
            <figure><img src={picture} alt="car!" className='imgH w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Old Price: ${originalPrice}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-primary btn-sm">Details</Link>
                    
                </div>
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default ProductCard;