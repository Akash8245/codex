import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
#include<stdio.h>
#include<conio.h>
void main()
{
int length1=0,length2=0,i=0;
char str1[25], str2[25];
char *ptr1, *ptr2;
clrscr();
printf("Enter first string:");
scanf("%s",str1);
printf("Enter second string:");
scanf("%s",str2);
ptr1=str1;
while(*ptr1!='\0')
{
 ptr1++;
}
length1=ptr1-str1;

ptr2=str2;
while(*ptr2!='\0')
{
 ptr2++;
}
length2=ptr2-str2;
printf(" The length of first string is %d",length1);
printf(" The length of second string is %d",length2);
ptr1=str1;
ptr2=str2;
while( *ptr2!='\0')
{
*(ptr1+length1+i)=*ptr2;
ptr2++;
i++;
}
*(ptr1+length1+i)='\0';
printf("Concatenated string is:");
puts(ptr1);
getch();
}
`;

const Lab8 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a c program to reverse 2 string and conconate them using pointer</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab8;
