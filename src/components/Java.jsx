import React, { useState } from 'react';
import JavaLab1 from '../java_contents/Lab1';
import JavaLab2 from '../java_contents/Lab2';
import JavaLab3 from '../java_contents/Lab3';
import JavaLab4 from '../java_contents/Lab4';
import JavaLab5 from '../java_contents/Lab5';
import JavaLab6 from '../java_contents/Lab6';
import JavaLab7 from '../java_contents/Lab7';

const Java = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='bg-[#3a3939] text-white p-3'>
      <div className='flex'>
        {[1, 2, 3, 4, 5, 6, 7].map((tabNumber) => (
          <div
            key={tabNumber}
            className={`cursor-pointer p-3 h-[50px] md:h-[50px] text-[12px] md:text-[18px] text-center  ${
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
      </div>
    </div>
  );
};

export default Java;
