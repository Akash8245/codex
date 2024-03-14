import React from 'react'
import CodeViewer from './CodeViewer'

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
{  int option;
   clrscr();
   while(1)
   {   printf("\n\t\t Stack Operations");
       printf("\n\t\t =================");
       printf("\n\t Menu");
       printf("\n\t -----");
       printf("\n\t 1. Push an element into stack");
       printf("\n\t 2. Pop an element from stack");
       printf("\n\t 3. Display the contents of Stack");
       printf("\n\t 4. Exit");
       printf("\n\t Enter your option: ");
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
	  default: printf("\n Invalid option !!! ");
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
       printf(" \n\t Stack Overflow!!!!");
    else
    {
       printf("\n\t Enter a value to push : ");
       scanf("%d",&item);
       top++;
       stack[top]=item;
       printf("\n\t%d is pushed into stack");
    }
}
void pop()
{
    int item;
    if(isempty())
       printf("\n\t Stack Underflow!!!");
    else
    {
	item=stack[top];
	top--;
	printf("\n\t%d is popped out ",item);
	if(isempty())
	   printf("\n\t Stack is now empty");
    }
}
void display()
{
   int i;
   if(isempty())
       printf("\n\t Stack is empty!!!");
   else
   {
       printf("\n\t Contents of Stack are : ");
       for(i=top;i>=0;i--)
	   printf("\n\t%d",stack[i]);
   }
}

    
`;


export default function secret() {
  return (
    <div className='bg-[#3A3939] h-[100vh]'>
     <h1 className='text-2xl text-white p-5'>Welcome to the Secret Place ....! </h1>
     <div className='w-[90vw] pl-[5%] '>
     <CodeViewer code={code} /> 
     </div>
    </div>
  )
}
