import React from 'react';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
const FooterSection = () => {
    return (
        <div className='pt-20 bg-[#244D3F] text-white text-center'>
            <div className='w-4/5 mx-auto pt-20' >
                <p className='text-7xl'><span className='font-bold'>Keen</span>Keeper</p>
                <p className='my-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='mb-3 text-xl'>Social Links</p>
                <div className='mb-4'>
                    <img src={facebook} alt="" className='w-7 inline-block mx-2' />
                    <img src={twitter} alt="" className='w-7 inline-block mx-2' />
                    <img src={instagram} alt="" className='w-7 inline-block mx-2' />
                </div>
                <hr className='border-gray-500 my-6'></hr>
                <div className='flex items-center justify-between py-4'>
                    <p className=''>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-5 text-[#FAFAFA] leading-6'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;