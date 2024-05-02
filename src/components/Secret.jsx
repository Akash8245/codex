import React from 'react'
import CodeViewer from './CodeViewer'

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
      printf("\n\n\nLinked List Implementation\n");
      printf(" 1.Create a Linked List\n ");
      printf(" 2.Insert node at the beginning\n");
      printf(" 3.Delete based on Rollno\n ");
      printf(" 4.Display Linked List\n ");
      printf(" 5.Exit \n");
      printf("\n\n\n\Enter your option: ");
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
	default:printf("\nInvalid option");
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
      printf("\n Memory Overflow!!!");
      getch();
      exit(0);
   }
   newnode->next=NULL;
   printf("\n Enter Rollno and Name:");
   scanf("%d%s",&newnode->rollno,newnode->name);

   if(head==NULL)
     head=last=newnode;
   else
    {
     last->next=newnode;
     last=newnode;
    }
    fflush(stdin);
    printf("\n Do you want to continue?");
    scanf(" %c",&ch);   //type space %c to avoid skipping of input
  }
}
void display()
{

 if(head==NULL)
    printf("\n List is empty");
 else
 {
  temp=head;
  printf("\n Name \t\t Regno \n");
  while(temp!=NULL)
  {
    printf("%s\t\t%d\n",temp->name,temp->rollno);
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
  printf("\n Overflow");
  getch();
  exit(0);
  }
  printf("\n Enter Rollno and Name:");
  scanf("%d%s",&newnode->rollno,newnode->name);
  newnode->next=head;
  head=newnode;
}
void dele()
{
  struct node* prev;
  int rno;
  printf("\n Enter Rollno to delete:");
  scanf("%d",&rno);
  prev=NULL;
  temp=head;
  while(temp!=NULL)
  {
    if(rno==temp->rollno)
    {
      printf("\n Node is deleted");
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
   printf("\n Node Not found");
}

=========================
14)

#include<stdio.h>
#include<conio.h>
#include <stdlib.h>
struct BST
{
  int info;
  struct BST *left;
  struct BST *right;
};
struct BST *root = NULL;
struct BST *parent = NULL;
void createBST();
void search();
struct BST * setnode(int);
void intrav(struct BST *);
void pretrav(struct BST *);
void posttrav(struct BST *);
struct BST *setnode(int x)
{ struct BST *p;
  p=(struct BST*)malloc(sizeof(struct BST));
  p->info=x;
  p->left=NULL;
  p->right=NULL;
  return(p);
}
void search()
{

  struct BST *parent, *child;
  int item;
  printf("\nEnter the value:");
  scanf("%d",&item);
  if(root==NULL)
     root=setnode(item);
  else
  {
    child=parent=root;
    while(child!=NULL && parent->info!=item)
    {
       parent=child;
       if(item<parent->info)
	  child=parent->left;
       else if(item >parent->info)
	  child=parent->right;
    }
    if(item==parent->info)
    {
     printf("\nNode exists");
     return;
    }
    else if(item < parent->info)
      parent->left=setnode(item);
    else
    parent->right=setnode(item);
}
   printf("\n%d is added to the tree",item);
 }

 void createBST()
 {
   char ch='y';
   root=NULL;
   while(ch=='y' || ch=='Y')
   {
     search();
     printf("\nAny more nodes:y/n?");
     fflush(stdin);
     scanf(" %c",&ch);

   }
 }
 void pretrav(struct BST *ptr)
 {
   if(ptr!=NULL)
   {
     printf("\t%d",ptr->info);
     pretrav(ptr->left);
     pretrav(ptr->right);

   }

}
void posttrav(struct BST *ptr)
{

  if(ptr!=NULL)
  {
     posttrav(ptr->left);
     posttrav(ptr->right);
     printf("\t%d",ptr->info);

  }

}
void intrav(struct BST *ptr)
{
  if(ptr!=NULL)
  {
    intrav(ptr->left);
    printf("\t%d",ptr->info);
    intrav(ptr->right);
  }

}
void main()
{
  int option;
  while(1)
  {
    printf("\nBinary search tree");
    printf("\n1. Create nodes \n2. Preorder Traversal\n3. Inorder traversal\n4. postorder traversal\n5. Search\n6. Exit\n");
    printf("\nEnter your option:");
    scanf("%d",&option);
    switch(option)
    {
      case 1: 	createBST();
	      	break;
      case 2: 	if(root==NULL)
		printf("\nTree is empty");
	       	else
	       	pretrav(root);
	       	break;
      case 3: 	if(root==NULL)
		printf("\nTree is empty");
	      	else
	       	intrav(root);
	       	break;
      case 4:
	     	if(root==NULL)
		printf("\nTree is empty");
	       	else
	       	posttrav(root);
	      	break;
      case 5:
	     	search();
	     	break;
      case 6:
	     	return;
      default : printf("\nInvalid option");
    }
     getch();
}
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
