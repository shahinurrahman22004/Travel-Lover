import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Gallery from '../Gallery/Gallery'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;