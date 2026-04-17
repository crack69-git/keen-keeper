import {
  Archive,
  BellRing,
  MessageCircle,
  MessageCircleCheck,
  MessageCircleMore,
  PhoneCall,
  Trash2,
  Video,
} from 'lucide-react';
import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MyMainContext } from '../MyContext/MainContext';
import messageIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';
import callIcon from '../assets/call.png';
import { Bounce, toast } from 'react-toastify';
const FriendDetail = () => {
  const data = useLoaderData();
  // console.log(data);
  const params = useParams();
  // console.log(params);
  const detail = data.find((friend) => friend.id === parseInt(params.friendId));
  // console.log("Detail:", detail);
  const { Com, setCom } = useContext(MyMainContext);
  console.log('Context Com:', Com);

  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });

  const handleCall = (detail) => {
    toast.success(`Called ${detail.name}`, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    setCom((prev) => [
      ...prev,
      {
        ...detail,
        status: 'Call',
        time: new Date().toLocaleString(),
        month: monthName,
      },
    ]);
  };
  const handleMessage = (detail) => {
    toast.success(`Message sent to ${detail.name}`, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    setCom((prev) => [
      ...prev,
      {
        ...detail,
        status: 'Message',
        time: new Date().toLocaleString(),
        month: monthName,
      },
    ]);
  };
  const handleVideo = (detail) => {
    toast.success(`Video call to ${detail.name}`, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
    setCom((prev) => [
      ...prev,
      {
        ...detail,
        status: 'Video',
        time: new Date().toLocaleString(),
        month: monthName,
      },
    ]);
  };

  return (
    <div className="bg-base-200 pt-20">
      <div className="w-4/5 mx-auto">
        <div className="grid max-[814px]:grid-cols-1 grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 pb-20">
            <div className="card gap-4 bg-base-100 w-full shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={detail.picture}
                  alt="Shoes"
                  className="rounded-full h-30 w-30"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{detail.name}</h2>
                <p>{detail.days_since_contact}d ago</p>
                <div
                  className={`badge text-white ${detail.status === 'Overdue' ? 'bg-[#EF4444]' : detail.status === 'Almost Due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'}`}
                >
                  {detail.status}
                </div>
                <div className="flex gap-2 flex-wrap justify-center items-center">
                  {detail.tags.map((tag, index) => (
                    <div key={index} className="badge badge-soft badge-accent">
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="font-bold italic text-gray-500">"{detail.bio}"</p>
                <p className="font-bold text-gray-500">{detail.email}</p>
              </div>
            </div>
            <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
              <p className="flex justify-center items-center gap-2 py-2">
                <BellRing />
                Snooze 2 weeks
              </p>
            </div>
            <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
              <p className="flex justify-center items-center gap-2 py-2">
                <Archive />
                Archive
              </p>
            </div>
            <div className="card w-full bg-base-100 card-xs text-center shadow-sm">
              <p className="flex justify-center items-center gap-2 py-2 text-red-600">
                <Trash2 />
                Delete
              </p>
            </div>
          </div>
          {/* right section */}
          <div className="flex flex-col gap-6 sm:col-span-2 ">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                <p className="text-[#244D3F] text-2xl font-bold">
                  {detail.days_since_contact}
                </p>
                <p className="text-[#64748B] text-[18px] mt-2">
                  Days Since Contact
                </p>
              </div>
              <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                <p className="text-[#244D3F] text-2xl font-bold">
                  {detail.goal}
                </p>
                <p className="text-[#64748B] text-[18px] mt-2">Goal(Days)</p>
              </div>
              <div className="card w-full bg-base-100 card-xs text-center shadow-sm py-8">
                <p className="text-[#244D3F] text-2xl font-bold px-3">
                  {detail.next_due_date}
                </p>
                <p className="text-[#64748B] text-[18px] mt-2">Next Due</p>
              </div>
            </div>
            {/* relationship goal */}
            <div className="">
              <div className="card w-full bg-base-100 card-xs shadow-sm px-6 py-6">
                <div className="flex justify-between">
                  <p className="text-2xl font-semibold">Relationship Goal</p>
                  <button className="btn btn-soft">Edit</button>
                </div>
                <p className="text-[#64748B] text-[18px] mt-2">
                  Connect every 30 days
                </p>
              </div>
            </div>
            {/* check in */}
            <div className="">
              <div className="card w-full bg-base-100 card-xs shadow-sm px-6 py-6">
                <p className="text-2xl mb-5">Quick Check-In</p>

                <div className="grid grid-cols-3 gap-6">
                  <div
                    onClick={() => handleCall(detail)}
                    className="btn btn-soft py-10 flex flex-col"
                  >
                    <p>
                      <PhoneCall />
                    </p>
                    <p>Call</p>
                  </div>
                  <div>
                    <div
                      onClick={() => handleMessage(detail)}
                      className="btn btn-soft py-10 flex flex-col"
                    >
                      <p>
                        <MessageCircleMore />
                      </p>
                      <p>Message</p>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleVideo(detail)}
                      className="btn btn-soft py-10 flex flex-col"
                    >
                      <p>
                        <Video />
                      </p>
                      <p>Video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-10">
              {Com.map((com, index) => (
                <div
                  key={index}
                  className="card flex-row items-center pl-4 w-full bg-base-100 card-sm shadow-sm"
                >
                  <div>
                    <img
                      src={
                        com.status === 'Call'
                          ? callIcon
                          : com.status === 'Message'
                            ? messageIcon
                            : videoIcon
                      }
                      alt="text"
                    ></img>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">
                      {com.status}{' '}
                      <span className="font-normal text-gray-500">
                        with {com.name}
                      </span>
                    </h2>
                    <p>{com.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
