import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `

#include <stdio.h>
#include <conio.h>
#define MAXSTK 20
int top=-1;
char stack[MAXSTK];
int isfull();
int isempty();
void push(char);
char pop();
int priority(char);

void main()
{  int i,j=0;
   char infix[20],postfix[20];
   char symbol,value;
   printf(" Conversion of Infix to Postfix expression");
   printf(" -----------------------------------------");
   printf("Enter a valid infix expression");
   gets(infix);
   push('(');
   for(i=0;infix[i]!='\0';i++)
   {
      symbol = infix[i];
      switch(symbol)
       {   
         case '(':push(symbol);
                  break;
         case ')':value=pop();
                  while(value!='(')
                   {  postfix[j++]=value;
                      value=pop();
                   }
                   break;
          case '+':
          case '-':
          case '*':
          case '/':
          case '^': while(priority(stack[top])>=priority(symbol))
                         postfix[j++]=pop();
                    push(symbol);
                    break;
          default: postfix[j++]=symbol;
         }
      }
      value=pop();
      while(value!='(')
      {
         postfix[j++]=value;
         value=pop();
       }
       postfix[j]='\0';
       printf("Infix Expression : ");
       puts(infix);
       printf(" Postfix Expression : ");
       puts(postfix);
   }

int isfull()
{
  if(top==MAXSTK-1)
      return(1);
  else
      return(0);
}

int isempty()
{
   if(top==-1)
      return(1);
   else
      return(0);
}

void push(char symbol)
{
  if(isfull())
    printf(" Stack is full");
  else
    {
      top++;
      stack[top]=symbol;
     }
}

char pop()
{
   char ch=' ';
   if(!isempty())
      { ch=stack[top];
        top--;
      }
      return(ch);
}
int priority(char symbol)
{
  int rank=0;
  switch(symbol)
   {
      case '^': rank=3;
                break;
      case '*':
      case '/': rank=2;
                break;
      case '+':
      case '-': rank=1;
                break;
     }
     return(rank);
}

`;

const Lab10 = () => {
  return (
    <div>
      <h1 className='pb-2'>10:- Write a c program to convert and print valid fully paranthezised infix arithmetic expression to postfix</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab10;
