import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='bg-gradient-to-r from-gray-900 via-sky-300 to-gray-900 p-10'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl text-center font-serif p-5'><span className='text-red-600 text-6xl animate-ping opacity-60'>*</span> NEW PRODUCTS <span className='text-red-600 text-6xl animate-ping opacity-60'>*</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className="card-actions justify-center p-10">
                    <Link to={'/moreProduct'} className="btn text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">More Products</Link>
                </div>
        </div>

        </div>
    );
};

export default Products;