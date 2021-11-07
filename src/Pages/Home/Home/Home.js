import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllServices></AllServices>
            <Faq></Faq>
        </div>
    );
};

export default Home;