import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
package banking;

import java.awt.event.*;
import javax.swing.*;
import java.awt.*;

public class Calculator extends JFrame implements ActionListener  {
	String s0,s1,s2;
	JTextField t;
	Calculator()
	{
		s0 = s1 = s2 = "";

		JFrame f = new JFrame("Calculator");

		t= new JTextField();
		t.setEditable(false);
		t.setHorizontalAlignment(JTextField.RIGHT);
		Font font1 = new Font("SansSerif", Font.BOLD, 40);
		t.setFont(font1);

		
		JButton b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ba,bs,bm,bd,be,bc;	
		
		b0=new JButton("0");
		b1=new JButton("1");
		b2=new JButton("2");
		b3=new JButton("3");
		b4=new JButton("4");
		b5=new JButton("5");
		b6=new JButton("6");
		b7=new JButton("7");
		b8=new JButton("8");
		b9=new JButton("9");
		ba=new JButton("+");
		bs=new JButton("-");
		bm=new JButton("X");
		bd=new JButton("/");
		be=new JButton("=");
		bc=new JButton("C");
		
		
		JPanel p1 = new JPanel(new GridLayout(1,4,3,3));		
		p1.add(b7);
		p1.add(b8);
		p1.add(b9);
		p1.add(bd);
		
		JPanel p2 = new JPanel(new GridLayout(1,4,3,3));		
		p2.add(b4);
		p2.add(b5);
		p2.add(b6);
		p2.add(bm);
		
		JPanel p3 = new JPanel(new GridLayout(1,4,3,3));		
		p3.add(b1);
		p3.add(b2);
		p3.add(b3);
		p3.add(bs);
		
		JPanel p4 = new JPanel(new GridLayout(1,4,3,3));		
		p4.add(b0);
		p4.add(bc);
		p4.add(be);
		p4.add(ba);
		
		b0.addActionListener(this);
		b1.addActionListener(this);
		b2.addActionListener(this);
		b3.addActionListener(this);
		b4.addActionListener(this);
		b5.addActionListener(this);
		b6.addActionListener(this);
		b7.addActionListener(this);
		b8.addActionListener(this);
		b9.addActionListener(this);
		ba.addActionListener(this);
		bs.addActionListener(this);
		bm.addActionListener(this);
		bd.addActionListener(this);
		be.addActionListener(this);
		bc.addActionListener(this);

		
		f.setLayout(new GridLayout(5,1));
		
		f.add(t);
		f.add(p1);
		f.add(p2);
		f.add(p3);
		f.add(p4);
		
		f.setSize(350,450);
		f.setLocationRelativeTo(null);
		f.setVisible(true);
	}
	public void actionPerformed(ActionEvent e)
	{
		String s = e.getActionCommand();

		// if the value is a number
		if ((s.charAt(0) >= '0' && s.charAt(0) <= '9') ) {
			// if operator is present then add to second no else add to first no
			if (!s1.equals(""))
				s2 =  s2+s;
			else
				s0 =  s0+s;

			t.setText(s0 + s1 + s2);
		}
		else if (s.charAt(0) == 'C') {
			s0 = s1 = s2 = "";

			t.setText(s0 + s1 + s2);
		}
		else if (s.charAt(0) == '=') {

			double result;

			if (s1.equals("+"))
				result = (Double.parseDouble(s0) + Double.parseDouble(s2));
			else if (s1.equals("-"))
				result = (Double.parseDouble(s0) - Double.parseDouble(s2));
			else if (s1.equals("/"))
				result = (Double.parseDouble(s0) / Double.parseDouble(s2));
			else
				result = (Double.parseDouble(s0) * Double.parseDouble(s2));

			
			s0 = Double.toString(result);
			if(s0.length()>15)
				s0.substring(0, 15);
			t.setText(s0);
			
			s1 = s2 = "";
		}
		else { //if user presses an operator
			if (s1.equals("") || s2.equals(""))//first time pressing operator
				s1 = s;
			// else evaluate, user presses operator instead of an = to continue with next operation
			else {
				double result;

				if (s1.equals("+"))
					result = (Double.parseDouble(s0) + Double.parseDouble(s2));
				else if (s1.equals("-"))
					result = (Double.parseDouble(s0) - Double.parseDouble(s2));
				else if (s1.equals("/"))
					result = (Double.parseDouble(s0) / Double.parseDouble(s2));
				else
					result = (Double.parseDouble(s0) * Double.parseDouble(s2));

				s0 = Double.toString(result);

				s1 = s;

				s2 = "";
			}

			t.setText(s0 + s1 + s2);
		}
	

	}

	public static void main(String[] args) {
		Calculator c = new Calculator();
	}

}
`;

const Lab9 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a java program to make a calculator using Swings  </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab9;
