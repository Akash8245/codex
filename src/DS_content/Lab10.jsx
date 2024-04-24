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


======================================================
Lab 11 :-

#include <stdio.h>
#include <conio.h>
#include <math.h>
#include <stdlib.h>
#define maxsize 50
int top=-1, stack[maxsize];
int isfull();
int isempty();
void push(int);
int pop();

void main()
{
	int i, value, result,a,b;
	char postfix[50];
	char symbol;
	clrscr();
	printf("Evaluation of Postfix Expression");
	printf("----------------------------------");
	printf("Enter a valid postfix expression:");
	gets(postfix);

	for(i=0;postfix[i]!='\0';i++)
	{
		if(postfix[i]>='0' && postfix[i]<='9')
			push(postfix[i]-'0');
		else
			if((postfix[i]>='a' && postfix[i]<='z') 						||(postfix[i]>='A' && postfix[i]<='Z'))
			{
			  printf("Enter the value of %c : ",postfix[i]);
			  scanf("%d",&value);
			  push(value);
			}
		else
		{
					a=pop();
					b=pop();
					switch(postfix[i])
					{
					    case '^' : result= pow(b,a);
							push(result);
						   break;
					    case '+' : result= b+a;
						      push(result);
						      break;
					    case '-' : result= b-a;
						       push(result);
						       break;
					    case '*' : result= b*a;
						       push(result);
						       break;
					    case '/' : result= b/a;
						       push(result);
						       break;
					    default : printf("Invalid Option!!!");
							   getch();
						   exit(0);
					} 
		}
}
value=pop();
printf(" Result = %d", value);
getch();
}


int isfull()
{
	if (top==maxsize-1)
		return(1);
	 else
		return(0);
}

int isempty()
{ 
	if (top == -1)
		return(1);
	else
		return(0);
}

void push(int symbol)
{
	if(isfull())
		printf(" Stack is full");
	else
	{
		top++;
		stack[top]=symbol;
	}
}

int pop()
{
	int ch;
	if(!isempty())
		{ 
			ch=stack[top];
			top--;
		}
	return(ch);
}


==================================================
Lab 12 :- 

#include<stdio.h>

#define MAXQ 5

void cqinsert();
void cqdelete();
void cqdisplay();
int cqueue[MAXQ], rear=-1, front=-1, item;

main()
{
	int option;
	clrscr();
	while(1)
	{
		printf("\n Circular Queue Implementation");
                printf("1.Insert");
                printf(" 2.Delete");
                printf(" 3.Display");
                printf("4.Exit");
                printf("Enter your choice: ");
		scanf("%d", &option);
		switch(option)
		{
			case 1:	cqinsert();
				break;
			case 2:	cqdelete();
				break;
			case 3:	cqdisplay();
				break;
			case 4: return(0);
		default:printf("Invalid choice. Please try again...");

		}
	} 

}

void cqinsert()
{
	if((front==0 && rear==MAXQ-1) || (front==rear+1))
		printf("\n\nQueue is full.");
	else
	{
		printf("Enter ITEM: ");
		scanf("%d", &item);
  if(front == -1)
		{
			rear = 0;
			front = 0;
		}

		else if(rear == MAXQ-1)
			rear = 0;
		else
			rear++;
		
		cqueue[rear] = item;
		printf("Item inserted: %d\n", item);
	}
}

void cqdelete()
{
	if(front == -1)
		printf("Queue is empty.\n");
	else
	{
		item = cqueue[front];
		printf("ITEM deleted: %d", item);
		if(front == rear)
		{
		 front = -1;
		 rear = -1;
		}
		else if(front == MAXQ-1)
			front = 0;
		else
			front++;
	}
}
 
void cqdisplay()
{
    int i;
    if(front == -1)
	    printf("Queue is empty.\n");
    else
    {
		if(front<=rear)
		{
			for(i=front; i<=rear; i++)
				printf("%d",cqueue[i]);
		}
		else
		{
			for(i=front; i<=MAXQ-1; i++)
				printf("%d",cqueue[i]);
			for(i=0; i<=rear; i++)
				printf("%d",cqueue[i]);
		}
     }

}
`;

const Lab10 = () => {
  return (
    <div>
      <h1 className='pb-2'>10:- Write a c program to convert and print valid fully paranthezised infix arithmetic expression to postfix.
<br>
11. Write a C program to evaluate a postfix expression.
<br>
12. Write a C program to simulate the working of a Circular Queue using an array. Provide the operations CQINSERT,
CQDELETE and CQDISPLAY. Check the Circular Queue status for empty and full. </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab10;
