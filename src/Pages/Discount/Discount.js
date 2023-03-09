import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className="p-6 py-12 bg-gradient-to-r from-gray-900 via-sky-500 to-gray-900 text-white ">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                    <br className="sm:hidden"/> 10% Off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                    <span>Plus free shipping! Use code:</span>
                    <span className="font-bold text-lg">L007</span>
                </div>
                <div className="card-actions justify-center p-10">
                    <Link to={'/'} className="btn text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Offer</Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Discount;