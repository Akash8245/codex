import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

struct node
{
  int rollno;
  char name[20];
  struct node *next;
}; 
struct node *head,*temp;
void main()
{
   int option;
   void create();
   void display();
   void insertbegin();
   void dele();
   
   while(1)
   {
      printf("Linked List Implementation");
      printf(" 1.Create a Linked List ");
      printf(" 2.Insert node at the beginning");
      printf(" 3.Delete based on Rollno ");
      printf(" 4.Display Linked List ");
      printf(" 5.Exit ");
      printf("Enter your option: ");
      scanf("%d",&option);
      switch(option)
      {
	case 1: create();
		break;
	case 2: insertbegin();
		break;
	case 3: dele();
		break;
	case 4: display();
		break;
	case 5: return;
	default:printf("Invalid option");
      }
   }
}
void create()
{
 char ch='y';
 struct node *last;
 struct node *newnode;
 head=NULL;

 while(ch=='y')
 {
   newnode=(struct node*)malloc(sizeof(struct node));
   if(newnode==NULL)
   {
      printf(" Memory Overflow!!!");
      getch();
      exit(0);
   }
   newnode->next=NULL;
   printf(" Enter Rollno and Name:");
   scanf("%d%s",&newnode->rollno,newnode->name);

   if(head==NULL)
     head=last=newnode;
   else
    {
     last->next=newnode;
     last=newnode;
    }
    fflush(stdin);
    printf(" Do you want to continue?");
    scanf(" %c",&ch);   
  }
}
void display()
{

 if(head==NULL)
    printf(" List is empty");
 else
 {
  temp=head;
  printf(" Name  Regno ");
  while(temp!=NULL)
  {
    printf("%s%d",temp->name,temp->rollno);
    temp=temp->next;
  }
 }
}
void insertbegin()
{
  struct node *newnode;
  newnode=(struct node*)malloc(sizeof(struct node));

  if(newnode==NULL)
  {
  printf(" Overflow");
  getch();
  exit(0);
  }
  printf(" Enter Rollno and Name:");
  scanf("%d%s",&newnode->rollno,newnode->name);
  newnode->next=head;
  head=newnode;
}
void dele()
{
  struct node* prev;
  int rno;
  printf(" Enter Rollno to delete:");
  scanf("%d",&rno);
  prev=NULL;
  temp=head;
  while(temp!=NULL)
  {
    if(rno==temp->rollno)
    {
      printf(" Node is deleted");
      if(temp==head)
      {
       head=head->next;
       free(temp);
       return;
       }
      else
      {
       prev->next=temp->next;
       free(temp);
       return;
      }
    }

   else
   {
      prev=temp;
      temp=temp->next;
     }
  }
  if(temp==NULL)
   printf(" Node Not found");
}
`;

const Lab13 = () => {
  return (
    <div>
      <h1 className='pb-2'>Using dynamic variables and pointers .Write a C program to construct a singly linked list consisting of the folloying information in each node - Roll number,Name </h1>
      <p>1) LINSERT Inserting a node in the front of the List</p>
      <p>2) LDELETE Deleting the node based on Roll-No</p>
      <p>3) LDISPLAY Displaying all the nodes in the list </p>
      <br />
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab13;
