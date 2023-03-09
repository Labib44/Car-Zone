import React from 'react';
import { Link } from 'react-router-dom';
import './Related.css';

const RelatedCard = ({ related }) => {
    const { _id, name, price, originalPrice, picture } = related;
    return (
        <div className="card card-side bg-gray-300 shadow-xl">
            <figure><img src={picture} alt="Movie" className='Related-img h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-700">{name}</h2>
                <p>Old Price: ${originalPrice}</p>
                <p>New Price: ${price}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`} className="btn btn-primary btn-sm">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default RelatedCard;