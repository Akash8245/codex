import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `

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
		printf(" Circular Queue Implementation");
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
		printf("Queue is full.");
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
		printf("Item inserted: %d", item);
	}
}

void cqdelete()
{
	if(front == -1)
		printf("Queue is empty.");
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
	    printf("Queue is empty.");
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

const Lab12 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to simulate the working of a Circular Queue using an array. Provide the operations CQINSERT,
CQDELETE and CQDISPLAY. Check the Circular Queue status for empty and full.</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab12;
