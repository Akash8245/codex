import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
import numpy as np

import pandas as pd

import matplotlib.pyplot as plt

import seaborn as sns

data = {'Name': ['John', 'Alice', 'Bob', 'David', 'Eve'],

'Age': [25, 27, 30, 22, 28],

'Salary': [50000, 60000, 55000, 52000, 58000), 'Dept': ['HR', 'IT', 'Finance', 'IT', 'HR']}

df pd.DataFrame(data)

print("Dataset:\n", df)

plt.figure(figsize=(12,4))

plt.subplot(1,3,1)

plt.hist(df['Age'], bins 5, color skyblue', edgecolor='black')

plt.title('Age Distribution')

plt.subplot(1,3,2)

plt.scatter(df['Age'], df ['Salary'], color='green')

plt.title('Age vs Salary')

plt.xlabel('Age')

plt.ylabel('Salary')

plt.subplot(1,3,3)

sns.heatmap(df [['Age', 'Salary']].corr(), annot=True, cmap='coolwarm")

plt.title('Correlation Heatmap')

plt.tight_layout()

plt.show()

`;

const Lab3 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to Search for an element using Sequential Search</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab3;
