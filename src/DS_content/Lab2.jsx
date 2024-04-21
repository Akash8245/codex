// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include<stdio.h>
void main()
{
int n,r;
int fact(int);
printf(“ enter the value for n & r:”);
scanf(“%d%d”,&n,&r);
if(n<r)
printf(“invalid input ”);
else
printf(“ binomial co-efficient ncr is %d”, fact(n)/(fact(n-r)*fact(r)));
getch();
}
int fact(int n)
{
if(n==0 || n==1)
return 1;
else
return(n*(fact(n-1)));
}`;

const Lab2 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to find the Binomial Co-Efficient using Recurssion</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab2;
