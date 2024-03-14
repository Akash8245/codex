import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `package test;

class Student {
    String regno;
    String name;
    String dept;

    Student(String a, String b, String c) {
        regno = a;
        name = b;
        dept = c;
    }

    void print_details() {
        System.out.println("My regno is: " + regno);
        System.out.println("My name is: " + name);
        System.out.println("My Department is: " + dept);
    }
}

public class lab3 {

    public static void main(String[] args) {
        Student s1 = new Student("110", "student1", "SOSS");
        Student s2 = new Student("140", "student2", "SOSS");

        s1.print_details();
        s2.print_details();
    }
}`;

const Lab3 = () => {
  return (
    <div>
      <h1 className='pb-2'>Java program to create a student class with given fields</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab3;
