import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
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
  printf("Enter the value:");
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
     printf("Node exists");
     return;
    }
    else if(item < parent->info)
      parent->left=setnode(item);
    else
    parent->right=setnode(item);
}
   printf("%d is added to the tree",item);
 }

 void createBST()
 {
   char ch='y';
   root=NULL;
   while(ch=='y' || ch=='Y')
   {
     search();
     printf("Any more nodes:y/n?");
     fflush(stdin);
     scanf(" %c",&ch);

   }
 }
 void pretrav(struct BST *ptr)
 {
   if(ptr!=NULL)
   {
     printf("%d",ptr->info);
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
     printf("%d",ptr->info);

  }

}
void intrav(struct BST *ptr)
{
  if(ptr!=NULL)
  {
    intrav(ptr->left);
    printf("%d",ptr->info);
    intrav(ptr->right);
  }

}
void main()
{
  int option;
  while(1)
  {
    printf("Binary search tree");
    printf("1. Create nodes 2. Preorder Traversal3. Inorder traversal4. postorder traversal5. Search6. Exit");
    printf("Enter your option:");
    scanf("%d",&option);
    switch(option)
    {
      case 1: 	createBST();
	      	break;
      case 2: 	if(root==NULL)
		printf("Tree is empty");
	       	else
	       	pretrav(root);
	       	break;
      case 3: 	if(root==NULL)
		printf("Tree is empty");
	      	else
	       	intrav(root);
	       	break;
      case 4:
	     	if(root==NULL)
		printf("Tree is empty");
	       	else
	       	posttrav(root);
	      	break;
      case 5:
	     	search();
	     	break;
      case 6:
	     	return;
      default : printf("Invalid option");
    }
     getch();
}
}
`;

const Lab14 = () => {
  return (
    <div>
      <h1 className='pb-2'>Using Dynamic variables and pointers consturct Binary Search tree of integers Write a C program to do the following function</h1>
      <p>1) Given a KEY,Perform  search in Binary serach tree . if it is found display Key found else insert the key in the Binary search tree</p>
      <p>2) While constructing the Binary Search tree do not add any duplicate</p>
      <p>3) Display the tree using any of the traversal method</p>
      <br />
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab14;
