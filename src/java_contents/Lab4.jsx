import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `package test;
import java.lang.Math;
public class lab4 {

	public static void main(String[] args) {
		overload_demo ob = new overload_demo();
		ob.area(5);
		ob.area(11,12);
		ob.area(3,4,5);

	}

}
class overload_demo{
	void area(float x)
	{
		System.out.print("\nThe area of Square is "+Math.pow(x,2));
	}
	void area(float x,float y) {
		System.out.print("\nThe area od rectangle "+x*y);
	}
	void area(float x,float y,float z) {
		double s=(x+y+z)/2;
		double a = Math.sqrt((s-x)*(s-y)*(s-z)*s);
		System.out.print("\nThe area of triangle "+a);
	}
}`;

const Lab4 = () => {
  return (
    <div>
      <h1 className='pb-2'>Program to display areas of Rectangle , Square and Triangle</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab4;
