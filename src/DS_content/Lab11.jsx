import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `

#include <stdio.h>
#include <conio.h>
#include <math.h>
#include <stdlib.h>

#define maxsize 50
int top = -1, stack[maxsize];

int isfull();
int isempty();
void push(int);
int pop();

void main()
{
	int i, value, result, a, b;
	char postfix[50];
	char symbol;
	clrscr();
	printf("Evaluation of Postfix Expression");
	printf("----------------------------------");
	printf("Enter a valid postfix expression: ");
	gets(postfix);

	for (i = 0; postfix[i] != '\0'; i++)
	{
		if (postfix[i] >= '0' && postfix[i] <= '9')
			push(postfix[i] - '0');
		else if ((postfix[i] >= 'a' && postfix[i] <= 'z') || (postfix[i] >= 'A' && postfix[i] <= 'Z'))
		{
			printf("Enter the value of %c : ", postfix[i]);
			scanf("%d", &value);
			push(value);
		}
		else
		{
			a = pop();
			b = pop();
			switch (postfix[i])
			{
			case '^':
				result = pow(b, a);
				push(result);
				break;
			case '+':
				result = b + a;
				push(result);
				break;
			case '-':
				result = b - a;
				push(result);
				break;
			case '*':
				result = b * a;
				push(result);
				break;
			case '/':
				result = b / a;
				push(result);
				break;
			default:
				printf("Invalid Option!!!");
				getch();
				exit(0);
			}
		}
	}
	value = pop();
	printf("Result = %d", value);
	getch();
}

int isfull()
{
	if (top == maxsize - 1)
		return (1);
	else
		return (0);
}

int isempty()
{
	if (top == -1)
		return (1);
	else
		return (0);
}

void push(int symbol)
{
	if (isfull())
		printf(" Stack is full");
	else
	{
		top++;
		stack[top] = symbol;
	}
}

int pop()
{
	int ch;
	if (!isempty())
	{
		ch = stack[top];
		top--;
	}
	return (ch);
}

`;

const Lab11 = () => {
    return (
        <div>
            <h1 className='pb-2'>Write a C program to evaluate a postfix expression. </h1>
            <CodeViewer code={code} />
        </div>
    );
};

export default Lab11;
