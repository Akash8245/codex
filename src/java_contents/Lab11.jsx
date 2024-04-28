import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
Comming Soon .........

`;

const Lab11 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a JDBC program to search and display students information on screen </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab11;
