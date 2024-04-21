// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `package sample;
import java.util.Scanner;
public class cl
{
public static void main(String[] args)
{
int n, temp;
n = args.length;
int a[] = new int[n];
System.out.println("convert command line args from string to int:");
for (int i = 0; i < n; i++)
{
a[i] = Integer.parseInt(args[i]);
}
System.out.print("Unsorted array elements are : ");
for (int i = 0; i < n; i++) {
System.out.print(a[i] + "\t");
}
for (int i = 0; i < n; i++)
{
for (int j = 0; j < n-1-i; j++)
{
if (a[j] > a[j+1])
{
temp = a[j];
a[j] = a[j+1];
a[j+1] = temp;
}
}
}
System.out.print("Array Elements in Ascending Order: ");
for (int i = 0; i < n; i++)
{
System.out.print(a[i] + "\t");
}
}
}`;

const Lab1 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a Java program for sorting a list of numbers. Read the input from the command line.</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab1;
