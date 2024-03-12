import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className='flex justify-between pl-12 h-[60px] bg-black text-white text-[20px] md:text-[30px] space-x-5 pt-3.5 md:pt-2 '>
        <div className='cursor-pointer font-bold '>
          <Link to="/secret"><p>Code<span className='text-blue-800 '>X</span></p></Link>
        </div>

        <div className='pr-20'>
          <Link to="/" className='hover:text-gray-400'>DS</Link>
          <Link to="/java" className='pl-5 hover:text-gray-400'>Java</Link>
        </div>
      </nav>
    </div>
  );
}
