import { ChartLine, Clock9, House } from 'lucide-react';
// import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { MyMainContext } from '../MyContext/MyContext';

const Navbar = () => {
  // const { state, setState } = useContext(MyMainContext);
  // console.log(state);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-[#244D3F] p-2 rounded-lg text-white flex items-center gap-2'
              : 'flex items-center gap-2'
          }
          to={'/'}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-[#244D3F] p-2 rounded-lg text-white flex items-center gap-2'
              : 'flex items-center gap-2'
          }
          to={'/timeline'}
        >
          <Clock9></Clock9>Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'bg-[#244D3F] p-2 rounded-lg text-white flex items-center gap-2'
              : 'flex items-center gap-2'
          }
          to={'/stats'}
        >
          <ChartLine></ChartLine>Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-sm:flex-col w-11/12 mx-auto">
        <div className="flex-1">
          <a className="text-xl font-bold max-sm:text-3xl">
            Keen<span className="text-[#244D3F] ">Keeper</span>
          </a>
        </div>
        <ul className="flex items-center gap-4">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
