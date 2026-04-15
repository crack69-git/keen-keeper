import { Archive, BellRing, MessageCircle, MessageCircleCheck, PhoneCall, Trash2 } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetail = () => {
    const data = useLoaderData();
    console.log(data);
    const params = useParams();
    console.log(params);
    const detail = data.find(friend => friend.id === parseInt(params.friendId));
    console.log(detail);
    return (
        <div className='bg-base-200 pt-20'>
            <div className='w-4/5 mx-auto'>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-3 pb-20'>
                        <div className="card gap-4 bg-base-100 w-full shadow-sm h-full">
                            <figure className="px-10 pt-10">

                                <img
                                    src={detail.picture}
                                    alt="Shoes"
                                    className="rounded-full h-30 w-30" />

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{detail.name}</h2>
                                <p>{detail.days_since_contact}d ago</p>
                                <div className={`badge text-white ${detail.status === 'Overdue' ? 'bg-[#EF4444]' : detail.status === 'Almost Due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'}`}>
                                    {detail.status}
                                </div>
                                <div className='flex gap-2 flex-wrap justify-center items-center'>
                                    {
                                        detail.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-accent">{tag}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
                            <p className='flex justify-center items-center gap-2 py-2'><BellRing />Snooze 2 weeks</p>
                        </div>
                        <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
                            <p className='flex justify-center items-center gap-2 py-2'><Archive />Archive</p>
                        </div>
                        <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
                            <p className='flex justify-center items-center gap-2 py-2 text-red-600'><Trash2 />Delete</p>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='flex flex-col gap-6 col-span-2 border-2'>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                                <p className='text-[#244D3F] text-2xl font-bold'>62</p>
                                <p className='text-[#64748B] text-[18px] mt-2'>Days Since Contact</p>
                            </div>
                            <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                                <p className='text-[#244D3F] text-2xl font-bold'>30</p>
                                <p className='text-[#64748B] text-[18px] mt-2'>Goal(Days)</p>
                            </div>
                            <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                                <p className='text-[#244D3F] text-2xl font-bold px-3'>February 15, 2023</p>
                                <p className='text-[#64748B] text-[18px] mt-2'>Next Due</p>
                            </div>
                        </div>
                        {/* relationship goal */}
                        <div className=''>
                            <div className="card w-full bg-base-100 card-xs shadow-sm px-6 py-6">
                                <div className='flex justify-between'>
                                    <p className='text-2xl font-semibold'>Relationship Goal</p>
                                    <button className='btn btn-soft'>Edit</button>
                                </div>
                                <p className='text-[#64748B] text-[18px] mt-2'>Connect every 30 days</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className="card w-full bg-base-100 card-xs shadow-sm px-6 py-6">
                                <p className='text-2xl mb-5'>Quick Check-In</p>

                                <div className='grid grid-cols-3 gap-6'>
                                    <div className='btn btn-active py-10 flex flex-col'>
                                        <p><PhoneCall /></p>
                                        <p>Call</p>
                                    </div>
                                    <div>
                                        <div className='btn btn-active py-10 flex flex-col'>
                                            <p><PhoneCall /></p>
                                            <p>Call</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='btn btn-active py-10 flex flex-col'>
                                            <p><PhoneCall /></p>
                                            <p>Call</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetail;