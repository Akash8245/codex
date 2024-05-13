import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  return (
    <div>
      <nav className='flex justify-between pl-12 h-[60px] bg-black text-white text-[20px] md:text-[30px] space-x-5 pt-3.5 md:pt-2 '>
        <div className='cursor-pointer font-bold'>
          <Link to="/secret" className="text-white">
            <p>Code<span className="text-blue-800 font-bold">X</span></p>
          </Link>
        </div>

        <div className='pr-20'>
          <Link to="/" className={location.pathname === '/' ? 'text-blue-800' : ''}>DS</Link>
          <Link to="/java" className={location.pathname === '/java' ? 'pl-5 text-blue-800' : 'pl-5'}>
            Java
          </Link>
        </div>
      </nav>
    </div>
  );
}
