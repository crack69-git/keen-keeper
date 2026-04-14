import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import FooterSection from '../FooterSection/FooterSection';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <FooterSection />
        </div>
    );
};

export default MainLayout;