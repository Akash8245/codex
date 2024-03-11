import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include <stdio.h>
#include <conio.h>
int a[10],n,i,j;
void mergesort(int low ,int high);
void main()
{
printf("\n Merge Sort");
printf("\n-----------");
printf("\n Enter number of elements to sort");
scanf("%d",&n);
printf("\n Enter %d elements of the array ",n);
for(i=0;i<n;i++)
scanf("%d",&a[i]);
printf("\n Before Sorting \n");
for(i=0;i<n;i++)
printf("%d\t",a[i]);
mergesort(0,n-1);
printf("\n After Sorting \n");
for(i=0;i<n;i++)
printf("%d\t",a[i]);
getch();
}
void mergesort(int low , int high)
{ int mid,b[10],k=0;
if(low >= high) return;
mid=(low+high)/2;
mergesort(low,mid);
mergesort(mid+1,high);
i=low;
j=mid+1;
k=low;
while(i<=mid && j<=high)
{ if(a[i]<=a[j])
{b[k]=a[i];
i++; k++;
}
else
{b[k]=a[j];
j++; k++;
}
}
while(j<=high)
{b[k]=a[j];
j++; k++;
}
while(i<=mid)
{b[k]=a[i];
i++; k++;
}
for(i=low;i<=high;i++)
a[i]=b[i];
}`;

const Lab7 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Sort a list of N array using Merge Sort Algorithem</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab7;
