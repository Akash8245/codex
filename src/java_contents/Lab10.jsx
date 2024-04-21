import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
Comming Soon .........

`;

const Lab10 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a java program to Create a loging form Using Swings </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab10;
