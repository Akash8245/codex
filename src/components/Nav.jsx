import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav className='flex justify-between pl-12 h-[60px] bg-black text-white text-[30px] space-x-5 pt-2 '>
        <div className='cursor-pointer font-bold '>
          <p>Code<span className='text-slate-200'>X</span></p>
        </div>

        <div className='pr-20'>
          <a href="/" className=' hover:text-gray-400'>DS</a>
          <a href="/java" className='pl-5 hover:text-gray-400'>Java</a>
        </div>
      </nav>
    </div>
  );
}
