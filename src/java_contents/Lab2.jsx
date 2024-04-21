// lab1.js
import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `import java.util.Scanner;
public class lab2 {

	public static void main(String[] args) {
		int n,p;
		Scanner s = new Scanner(System.in);
		n = s.nextInt();
		for(int i =2 ;i<n;i++) {
			p=0;
			for(int j =2;j<i;j++) {
				if(i%j==0)
					p=1;
			}
			if(p==0)
				System.out.print("The prime number are: "+i);
		}
		
	}

}
`;

const Lab2 = () => {
  return (
    <div>
      <h1 className='pb-2'>Prime number</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab2;
