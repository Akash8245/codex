import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `import java.util.Scanner;
class Employee
{
int eid;
String name;
int salary;
public void accept()
{
try{
Scanner sc=new Scanner(System.in);
System.out.println("Enter EID");
eid=sc.nextInt();
System.out.println("Enter Name");
name=sc.next();
System.out.println("Enter Salary");
salary=sc.nextInt();
}catch(Exception ex){
System.out.println(ex);
}
}
public void show()
{
System.out.println("EID :"+eid);
System.out.println("Name :"+name);
System.out.println("Salary :"+salary);
}
}
class Developer extends Employee
{
String des,spl;
public void acceptDev()
{
try{
Scanner sc=new Scanner(System.in);
System.out.println("Enter Designation:");
des=sc.next();
System.out.println("Enter Specialization:");
spl=sc.next();
}catch(Exception ex){}
}
public void showDev()
{
System.out.println("Designation :"+des);
System.out.println("Specialization :"+spl);
}
}
public class Labprog6 {
public static void main(String[] args) {
Developer obj=new Developer();
obj.accept();
obj.acceptDev();
obj.show();
obj.showDev();
}
}`;

const Lab6 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a Java Program to implement inheritance</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab6;
