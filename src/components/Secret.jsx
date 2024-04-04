import React from 'react'
import CodeViewer from './CodeViewer'

const code = `                    
 9. Write a C program to demonstrate the working of STACK of size N using an array. The 
elements of the STACK may assume to be of type integer or real, the operations to be supported 
are 1. PUSH 2. POP 3. DISPLAY. The program should print appropriate messages for STACK 
overflow, Under flow and empty. Use separate functions to detect these cases.
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
 printf("\n\t\t Stack Operations");
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
     `;


export default function secret() {
  return (
    <div className='bg-[#3A3939] h-[100vh]'>
     <h1 className='text-[22px] text-white p-5'>Welcome to the Secret Place ....! </h1>
     <div className='w-[90vw] pl-[5%] '>
     <CodeViewer code={code} /> 
     </div>
    </div>
  )
}
