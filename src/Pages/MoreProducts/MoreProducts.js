import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import MoreProductCard from './MoreProductCard';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/moreProducts')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
    }, [])

    return (
        <div className='bg-gradient-to-r from-gray-900 via-sky-300 to-gray-900 p-10'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center font-serif p-5'><span className='text-red-600 text-6xl animate-ping opacity-60'>*</span> NEW PRODUCTS <span className='text-red-600 text-6xl animate-ping opacity-60'>*</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        moreProducts.map(Mproduct => <MoreProductCard
                            key={Mproduct.id}
                            Mproduct={Mproduct}
                        ></MoreProductCard>)
                    }
                </div>

            </div>
            
        </div>
    );
};

export default MoreProducts;