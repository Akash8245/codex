import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
#include <stdio.h>
#include <conio.h>
#define MAXSTK 5
int stack[MAXSTK];
int top=-1;
void push();
void pop();
int isfull();
int isempty();
void display();
void main()
{ 
int option;
 clrscr();
 while(1)
 { 
 printf(" Stack Operations");
 printf(" =================");
 printf(" Menu");
 printf(" -----");
 printf(" 1. Push an element into stack");
 printf(" 2. Pop an element from stack");
 printf(" 3. Display the contents of Stack");
 printf(" 4. Exit");
 printf(" Enter your option: ");
 scanf("%d",&option);
 switch(option)
 {
 case 1: push();
 break;
 case 2: pop();
 break;
 case 3: display();
 break;
 case 4: exit(0);
 default: printf(" Invalid option !!! ");
}
 }
}
int isfull()
{
 if(top==MAXSTK-1)
 return 1;
 else
 return 0;
}
int isempty()
{
 if(top==-1)
 return 1;
 else
 return 0;
}
void push()
{
 int item;
 if(isfull())
 printf("  Stack Overflow!!!!");
 else
 {
 printf(" Enter a value to push : ");
 scanf("%d",&item);
 top++;
 stack[top]=item;
 printf("%d is pushed into stack");
 }
}
void pop()
{
 int item;
 if(isempty())
 printf(" Stack Underflow!!!");
 else
 {
item=stack[top];
top--;
printf("%d is popped out ",item);
if(isempty())
 printf(" Stack is now empty");
 }
}
void display()
{
 int i;
 if(isempty())
 printf(" Stack is empty!!!");
 else
 {
 printf(" Contents of Stack are : ");
 for(i=top;i>=0;i--)
 printf("%d",stack[i]);
 }
}
`;

const Lab9 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a c program to show implementation of stack </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab9;
