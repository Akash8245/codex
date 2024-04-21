// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#include <stdio.h>
#include <conio.h>

int lengthstring(char str[20], int i) {
  if (str[i] == '0')
    return (0);
  else
    return (1 + lengthstring(str, i + 1));
}

void main() {
  int length;
  char str[20];
  clrscr();
  printf("Program to calculate length of the string using recursion");
  printf("----------------------------------------------------------");
  printf("Enter a string ");
  gets(str);
  length = lengthstring(str, 0);
  printf("String is %s and its length is %d", str, length);
  getch();
}`;

const Lab1 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to find the number of characters in a string using Recursion</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab1;
