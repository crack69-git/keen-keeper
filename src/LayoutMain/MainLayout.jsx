import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import FooterSection from '../FooterSection/FooterSection';

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [pathname]);

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 bg-base-200'>
                <Outlet />
            </main>
            <FooterSection />
        </div>
    );
};

export default MainLayout;