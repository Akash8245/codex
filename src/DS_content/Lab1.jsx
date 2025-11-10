// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
  import numpy as np import pandas as pd

arr np.array([[10, 20, 30], [40, 50, 60]])

print("Array: \n", arr)

print("Sum:", np.sum(arr), "Mean:", np.mean(arr), "Max:", np.max(arr))

data

("Name": ["John', 'Alice', 'Bob', 'David', 'Eve"],

'Age': [25, np.nan, 30, 22, 28],

'Salary': [50000, 60000, np.nan, 52000, 58008), 'Dept': ['HR', 'IT', 'Finance', 'IT', 'HR'])

df= pd.DataFrame(data) print("\nOriginal Data:\n", df)

df['Age'] df['Age"].fillna(df['Age'].mean()) df[ 'Salary] df['Salary'].fillna(df['Salary'].mean()) print("\nCleaned Data:\n", df)

print("\nFiltered (Age>25):\n", df [df['Age'] 25]) print("\nMean Salary by Dept:\n", df.groupby('Dept')['Salary'].mean())

`;

const Lab1 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to find the number of characters in a string using Recursion</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab1;
