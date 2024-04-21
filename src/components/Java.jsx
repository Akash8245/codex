import React, { useState } from 'react';
import JavaLab1 from '../java_contents/Lab1';
import JavaLab2 from '../java_contents/Lab2';
import JavaLab3 from '../java_contents/Lab3';
import JavaLab4 from '../java_contents/Lab4';
import JavaLab5 from '../java_contents/Lab5';
import JavaLab6 from '../java_contents/Lab6';
import JavaLab7 from '../java_contents/Lab7';
import JavaLab8 from '../java_contents/Lab8';
import JavaLab9 from '../java_contents/Lab9';
import JavaLab10 from '../java_contents/Lab10';

const Java = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='bg-[#3a3939] text-white p-3'>
      <div className='flex flex-wrap'>
        {[1, 2, 3, 4, 5, 6, 7].map((tabNumber) => (
          <div
            key={tabNumber}
            className={`cursor-pointer p-3 h-[50px] md:h-[55px] text-[12px] md:text-[18px] md:w-[75px]   text-center w-[50px]  ${
              activeTab === tabNumber ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(tabNumber)}
          >
            Lab {tabNumber}
          </div>
        ))}
      </div>
      <div className='flex flex-wrap '>
        {[8, 9, 10].map((tabNumber) => (
          <div
            key={tabNumber}
            className={`cursor-pointer p-3 h-[50px] md:h-[55px] text-[12px] md:text-[18px] text-center  w-[50px] md:w-[80px] mt-1 ${
              activeTab === tabNumber ? 'bg-blue-800 text-white' : 'bg-gray-600'
            }`}
            onClick={() => handleTabClick(tabNumber)}
          >
            Lab {tabNumber}
          </div>
        ))}
      </div>
      <div className='mt-4 p-4 '>
        {activeTab === 1 && <p><JavaLab1/></p>}
        {activeTab === 2 && <p><JavaLab2/></p>}
        {activeTab === 3 && <p><JavaLab3/> </p>}
        {activeTab === 4 && <p><JavaLab4/> </p>}
        {activeTab === 5 && <p><JavaLab5/> </p>}
        {activeTab === 6 && <p><JavaLab6/> </p>}
        {activeTab === 7 && <p><JavaLab7/> </p>}
        {activeTab === 8 && <p><JavaLab8/> </p>}
        {activeTab === 9 && <p><JavaLab9/> </p>}
        {activeTab === 10 && <p><JavaLab10/> </p>}
      </div>
    </div>
  );
};

export default Java;
