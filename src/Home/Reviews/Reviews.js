import React from 'react';
import tom from '../../Assets/img/Tom.jfif'
import BillGates from '../../Assets/img/BillGates.jpg'
import vin from '../../Assets/img/vin.jpg'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: 'Tom Cruise',
            comment: '“Super quality! Quick delivery. Ever so marvellous packaging. First-rate service.Would buy from you again.”',
            img: tom,
        },
        {
            id: 2,
            name: 'Bill Gates',
            comment: '“The item was superb and good. Immensely pleasing packaging. The delivery was superb. Item is of first-rate quality.”',
            img: BillGates
        },
        {
            id: 3,
            name: 'Vin Diesel',
            comment: 'Quality of the wrapping was good. The item was of superb quality. Good delivery. The packaging was notably marvellous.',
            img: vin
        }
    ]
    return (
        <div className='bg-gradient-to-r from-gray-900 via-sky-300 to-gray-900'>
           
            <section className="py-6">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <p className="p-2 text-xl font-medium tracking-wider text-center uppercase">Reviews</p>
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl font-serif">HAPPY CUSTOMERS</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">


                        {
                            reviewsData.map(reData => <ReviewCard
                                key={reData.id}
                                reData={reData}
                            ></ReviewCard>)
                        }

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Reviews;