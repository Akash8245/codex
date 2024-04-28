import React, { useState } from 'react';
import Lab1 from '../DS_content/Lab1';
import Lab2 from '../DS_content/Lab2';
import Lab3 from '../DS_content/Lab3';
import Lab4 from '../DS_content/Lab4';
import Lab5 from '../DS_content/Lab5';
import Lab6 from '../DS_content/Lab6';
import Lab7 from '../DS_content/Lab7';
import Lab8 from '../DS_content/Lab8';
import Lab9 from '../DS_content/Lab9';
import Lab10 from '../DS_content/Lab10';
import Lab11 from '../DS_content/Lab11';
import Lab12 from '../DS_content/Lab12';

const DS = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='bg-[#3a3939]  text-white p-3'>
      <div className='flex'>
        <div
          className={` cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center  ${
            activeTab === 1 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Lab 1
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 2 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Lab 2
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 3 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Lab 3
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 4 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(4)}
        >
          Lab 4
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 5 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(5)}
        >
          Lab 5
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 6 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(6)}
        >
          Lab 6
        </div>
        <div
          className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center ${
            activeTab === 7 ? 'bg-blue-800 text-white' : 'bg-gray-600'
          }`}
          onClick={() => handleTabClick(7)}
        >
          Lab 7
        </div>
      </div>
      <div className='mt-[5px] '>
        <div className="flex">
          <div
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] w-[48px] md:w-[68px] md:text-[16px] text-center ${
              activeTab === 8 ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(8)}
          >
            Lab 8
          </div>
          <div
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] w-[48px] md:w-[68px] md:text-[16px] text-center ${
              activeTab === 9 ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(9)}
          >
            Lab 9
          </div>
          <div
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] w-[48px] md:w-[80px] md:text-[16px] text-center ${
              activeTab === 10 ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(10)}
          >
            Lab 10
          </div>
          <div
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] w-[48px] md:w-[80px] md:text-[16px] text-center ${
              activeTab === 11 ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(11)}
          >
            Lab 11
          </div>
          <div
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] w-[48px] md:w-[80px] md:text-[16px] text-center ${
              activeTab === 12 ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(12)}
          >
            Lab 12
          </div>
        </div>
      </div>
      <div className='mt-4 p-4 '>
        {activeTab === 1 && <p><Lab1/></p>}
        {activeTab === 2 && <p><Lab2/></p>}
        {activeTab === 3 && <p><Lab3/> </p>}
        {activeTab === 4 && <p><Lab4/> </p>}
        {activeTab === 5 && <p><Lab5/> </p>}
        {activeTab === 6 && <p><Lab6/> </p>}
        {activeTab === 7 && <p><Lab7/> </p>}
        {activeTab === 8 && <p><Lab8/> </p>}
        {activeTab === 9 && <p><Lab9/> </p>}
        {activeTab === 10 && <p><Lab10/> </p>}
        {activeTab === 11 && <p><Lab11/> </p>}
        {activeTab === 12 && <p><Lab12/> </p>}
      </div>
    </div>
  );
};

export default DS;
