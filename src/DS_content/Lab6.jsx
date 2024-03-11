import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include<stdio.h>
#include<conio.h>
int a[20],n;
void main()
{
int i;
void qsort(int,int);
printf("\n Quick Sort");
printf("\n-----------------");
printf("\n Enter the number of elements:\n");
scanf("%d",&n);
printf("\n Enter the elements:\n");
for(i=0;i<n;i++)
scanf("%d",&a[i]);
printf("\n Before Sorting:\n");
for(i=0;i<n;i++)
printf("%d \t",a[i]);
qsort(0,n-1);
printf("\n After Sorting:\n");
for(i=0;i<n;i++)
printf("%d\t",a[i]);
getch();
}
void qsort(int low,int high)
{
int pivot,i,j,temp;
if(low>=high)
return;
pivot=a[low];
i=low;
j=high;
while(i<j)
{
while(a[i]<=pivot && i<=high)
i++;
while(a[j]>pivot && j>low)
j--;
if(i<j)
{
temp=a[i];
a[i]=a[j];
a[j]=temp;
}
}
a[low]=a[j];
a[j]=pivot;
qsort(low,j-1);
qsort(j+1,high);
}`;

const Lab6 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Sort a list of N array using Quick Sort Algorithem</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab6;
