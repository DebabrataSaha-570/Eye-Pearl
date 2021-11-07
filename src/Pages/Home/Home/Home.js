import React from 'react';
import AllServices from '../AllServices/AllServices';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome> </Welcome>
            <AllServices></AllServices>
            <Faq></Faq>
        </div>
    );
};

export default Home;