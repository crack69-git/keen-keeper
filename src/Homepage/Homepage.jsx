import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import BannerSection from './BannerSection';
import CountSection from './CountSection';
import FriendCard from './FriendCard';

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-4/5 mx-auto">
        <BannerSection />
        <CountSection />
        <FriendCard />
      </div>
    </div>
  );
};

export default Homepage;
