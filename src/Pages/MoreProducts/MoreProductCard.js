import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const MoreProductCard = ({ Mproduct }) => {
    const {_id, name, price, originalPrice, picture } = Mproduct;
    return (
        <div className="card m-5 w-96 glass shadow-[0_35px_35px_rgba(255,192,203)]">
            <figure><img src={picture} alt="car!" className='imgH w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button type="" className='btn-sm'><FcLikePlaceholder className='w-8 h-8'></FcLikePlaceholder></button>
                    <Link to={`/details/${_id}`} className="btn btn-primary btn-sm">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MoreProductCard;