import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RelatedCard from './RelatedCard';

const Related = () => {
    const [relateds, setRelateds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setRelateds(data))
    }, [])
    return (
        <div>
            <div className=''>
                <h1 className='text-4xl text-center font-serif p-5'><span className='text-red-600 text-6xl animate-ping opacity-60'>*</span> REALTED PRODUCTS <span className='text-red-600 text-6xl animate-ping opacity-60'>*</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    relateds.map(related => <RelatedCard
                        key={related._id}
                        related={related}
                    ></RelatedCard>)
                }
            </div>
            <div className="card-actions justify-center p-10">
                    <Link to={'/moreProduct'} className="btn text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">More Products</Link>
                </div>
        </div>
        </div>
    );
};

export default Related;