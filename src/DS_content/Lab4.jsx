import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include<stdio.h>
#include<conio.h>
void main()
{
int a[10],n,i,key,low,mid,high,flag;
clrscr();
printf("enter the array size");
scanf("%d",&n);
printf("enter array elements");
for(i=0;i<n;i++)
scanf("%d",&a[i]);
printf("enter key elements");
scanf("%d",&key);
flag=0;
low=0;
high=n-1;
while(low<=high)
{
mid=(low+high)/2;
if(key==a[mid])
{
flag=1;
break;
}
else
if(key<a[mid])
high=mid-1;
else
low=mid+1;
}
if(flag==1)
printf("key element found");
else
printf("key element not found");
getch();
}`;

const Lab4 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Search for an element using Binary Search</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab4;
