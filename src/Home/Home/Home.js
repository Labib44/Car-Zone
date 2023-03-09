import React from 'react';
import Contact from '../../Pages/Contact/Contact';
import Discount from '../../Pages/Discount/Discount';
import Products from '../../Pages/Products/Products';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import NewArrivals from '../NewArrivals/NewArrivals';
import Reviews from '../Reviews/Reviews';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Story></Story>
            <NewArrivals></NewArrivals>
            <Discount></Discount>
            <Products></Products>
            <Care></Care>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;