import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `#source [add.java]
package mathops;
public class add
{
public int add(int a, int b)
{
int c;
c=a+b;
return c;
}
}
#source [sub.java]
package mathops;
public class sub
{
public int sub(int a, int b)
{
int c;
c=a-b;
return c;
}
}
#source [mul.java]
package mathops;
public class mul
{
public int mul(int a, int b)
{
int c;
c=a*b;
return c;
}
}
#source [div.java]
package mathops;
public class div
{
public int div(int a, int b)
{
int c;
c=a/b;
return c;
}
}
#source[calc.java]
import mathops.add;
import mathops.sub;
import mathops.mul;
import mathops.div;
public class calc
{
public static void main(String args[])
{
add a=new add();
System.out.println("Addition: " +a.add(80, 100));
sub s=new sub();
System.out.println("Subtration: "+s.sub(100, 20));
mul m=new mul();
System.out.println("Multiplication:
"+m.mul(3, 100)); div d=new div();
System.out.println("Division: "+d.div(100, 5));
} }`;

const Lab7 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a Java program to illustrate user
defined packages</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab7;
