import { Plus } from 'lucide-react';
import React from 'react';

const BannerSection = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn flex font-bold bg-[#244D3F] text-white p-2 rounded-lg gap-2 ">
        {' '}
        <Plus />
        Add Friend
      </button>
    </div>
  );
};

export default BannerSection;
