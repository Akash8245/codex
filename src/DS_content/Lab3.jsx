import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include<stdio.h>
#include<conio.h>
void main()
{
int a[100],key,flag=0,n,i;
clrscr();
printf("enter the size of the array");
scanf("%d",&n);
printf("enter array element:");
for(i=0;i<n;i++)
scanf("%d",&a[i]);
printf("enter key elements");
scanf("%d",&key);
for(i=0;i<n;i++)
{
if(a[i]==key)
{
flag=1;
break;
}
}
if(flag==1)
printf("key elements found");
else
printf("key elements not found");
getch();
}`;

const Lab3 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Search for an element using Sequential Search</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab3;
