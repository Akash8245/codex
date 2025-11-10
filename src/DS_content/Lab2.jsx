// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
import numpy as np

import pandas as pd

from sklearn.preprocessing import LabelEncoder, MinMaxScaler

data = {'Name':

'John', 'Alice', 'Bob', 'David', 'Eve"],

"Age: 25, np. nan, 30, 22, 28),

Salary: 150000, 50000, пр.пал, 52000, 58000], "Dept': ['HR", "IT', 'Finance', 'IT', 'H}

dfpd.DataFrame(data)

print("Original Data:\n", df)

df 'Age'] df ['Age"].fillna(df["Age'].mean())

df [Salary] df['Salary"].fillna(df['Salary'].mean()) print"\nAfter Handling Missing Values: \n", df

encoder Label Encoder()

df['Dept] encoder.fit transform(df ['Dept']) print("\nAfter Encoding 'Dept':\n", df)

scaler MinMaxScaler()

df[['Age', 'Salary']] = scaler.fit_transform(df[['Age', 'Salary']])

print("\nAfter Normalization:\n", df)

`;

const Lab2 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a C program to find the Binomial Co-Efficient using Recurssion</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab2;
