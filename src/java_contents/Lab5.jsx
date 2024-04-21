import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `package test;

class one extends Thread {
    public void run() {
        for(int i = 0; i < 3; i++) {
            try {
                Thread.sleep(1000);
            } catch(InterruptedException e) {
                System.out.print(e);
            }
            System.out.print("Good Morning");
        }
    }
}

class two extends Thread {
    public void run() {
        for(int i = 0; i < 3; i++) {
            try {
                Thread.sleep(2000);
            } catch(InterruptedException e) {
                System.out.print(e);
            }
            System.out.print("Hello");
        }
    }
}

class three implements Runnable {
    public void run() {
        for(int i = 0; i < 3; i++) {
            try {
                Thread.sleep(2000);
            } catch(InterruptedException e) {
                System.out.print(e);
            }
            System.out.print("Welcome !");
        }
    }
}

public class lab5 {
    public static void main(String[] args) {
        one t1 = new one();
        two t2 = new two();
        Thread t3 = new Thread(new three());
        
        t1.setName("Thread one");
        t2.setName("Thread two");
        t3.setName("Thread three");
        
        System.out.print(t1.getName());
        System.out.print(t2.getName());
        System.out.print(t3.getName());
        
        Thread mainThread = Thread.currentThread();
        System.out.print(mainThread);
        
        t1.start();
        t2.start();
        t3.start();
    }
}
`;

const Lab5 = () => {
  return (
    <div>
      <h1 className='pb-2'>Java program to implement Multi Threading</h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab5;

