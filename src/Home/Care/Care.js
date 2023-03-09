import React from 'react';
import CareCard from './CareCard';
import support from '../../Assets/img/support.png'
import delivery from '../../Assets/img/free-delivery.png'
import cashback from '../../Assets/img/cashback.png'

const Care = () => {
    const CaresData = [
        {
            id: 1,
            taitle: 'FREE DELIVERY',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: delivery,
        },
        {
            id: 2,
            taitle: 'MONEY GUARANTEE',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: cashback,
        },
        {
            id: 3,
            taitle: 'ONLINE SUPPORT',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: support,
        }
    ]
    return (
        <div className='py-5 bg-gradient-to-r from-gray-800 via-sky-300 to-gray-800'>
            <div className='mx-auto max-w-7xl '>
                <h1 className='text-4xl font-serif font-bold text-center p-3'>We Care for Your Precious Time.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                    {
                        CaresData.map(careData => <CareCard
                            key={careData.id}
                            careData={careData}
                        ></CareCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Care;