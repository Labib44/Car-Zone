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
            comment: '“Fantastic fish that was extremely fresh. Everything we ordered was very good and we even indulged in 3 desserts.”',
            img: tom,
        },
        {
            id: 2,
            name: 'Bill Gates',
            comment: '“Amazing food. Lovely service. Best to make a reservation. Realy........... This is so much good. Enjoy!!!”',
            img: BillGates
        },
        {
            id: 3,
            name: 'Vin Diesel',
            comment: 'The food is really very tasty – the wagyu sushi on the dinner menu is especially delicious and not to be missed!',
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