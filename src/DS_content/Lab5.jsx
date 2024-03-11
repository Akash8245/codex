import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include<stdio.h>
#include<conio.h>
void bubble_sort(int[],int);
void main()
{
int a[10],n,i;
clrscr();
printf("enter the n");
scanf("%d",&n);
printf("enter array elements");
for(i=0;i<n;i++)
scanf("%d",&a[i]);
bubble_sort(a,n);
printf("after sorting array elements are:");
for(i=0;i<n;i++)
printf("%d \t",a[i]);
getch();
}
void bubble_sort(int a[],int n)
{
int i,j,temp;
for(i=0;i<n-1;i++)
{
for(j=0;j<n-i-1;j++)
{
if(a[j]>a[j+1])
{
temp=a[j];
a[j]=a[j+1];
a[j+1]=temp;
}
}
}
}`;

const Lab5 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Sort a list of N array using Bullble Sort Technique</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab5;
