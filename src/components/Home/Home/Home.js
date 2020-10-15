import React from 'react';
import Brands from '../Brands/Brands';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <Carousel></Carousel>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;