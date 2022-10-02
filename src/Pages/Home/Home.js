import React from 'react';
import ManagementSystem from './ManagementSystem';
import ManagementBenefit from './ManagementBenefit';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>

            <ManagementSystem></ManagementSystem>
            <ManagementBenefit></ManagementBenefit>
            <Footer></Footer>
        </div>
    );
};

export default Home;