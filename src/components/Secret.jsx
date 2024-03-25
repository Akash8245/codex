import React from 'react'
import CodeViewer from './CodeViewer'

const code = ` package test;

import javax.swing.*;  
import java.awt.*;  
import java.awt.event.*;  
import java.lang.Exception;  

class CreateLoginForm extends JFrame implements ActionListener  
{  

    JButton b1;  
    JPanel newPanel;  
    JLabel userLabel, passLabel;  
    final JTextField  textField1, textField2;  
      

    CreateLoginForm()  
    {     
          
      
        userLabel = new JLabel();  
        userLabel.setText("Username");   
          
      
        textField1 = new JTextField(15);    
  
     
        passLabel = new JLabel();  
        passLabel.setText("Password");       
          
      
        textField2 = new JPasswordField(15);    
        
        b1 = new JButton("SUBMIT"); 
    
        newPanel = new JPanel(new GridLayout(3, 1));  
        newPanel.add(userLabel);    
        newPanel.add(textField1);    
        newPanel.add(passLabel);   
        newPanel.add(textField2);   
        newPanel.add(b1);            
          
        
        add(newPanel, BorderLayout.CENTER);  
          
        
        b1.addActionListener(this);     
        setTitle("LOGIN FORM");          
    }  
      
 
    public void actionPerformed(ActionEvent ae)     
    {  
        String userValue = textField1.getText();       
        String passValue = textField2.getText();         
     
        if (userValue.equals("test1@gmail.com") && passValue.equals("test")) {  
              

            NewPage page = new NewPage();  
              
   
            page.setVisible(true);  
      
            JLabel wel_label = new JLabel("Welcome: "+userValue);  
            page.getContentPane().add(wel_label);  
        }  
        else{  
       
            System.out.println("Please enter valid username and password");  
        }  
    }  
}  

class lab_8  
{  
   
    public static void main(String arg[])  
    {  
        try  
        {  
            
            CreateLoginForm form = new CreateLoginForm();  
            form.setSize(300,100);  
            form.setVisible(true);  
        }  
        catch(Exception e)  
        {     
     
            JOptionPane.showMessageDialog(null, e.getMessage());  
        }  
    }  
}
#source [New page.java]

package test;

import javax.swing.*;  
import java.awt.*;  
  

class NewPage extends JFrame  
{  
  
    NewPage()  
    {  
        setDefaultCloseOperation(javax.swing.  
        WindowConstants.DISPOSE_ON_CLOSE);  
        setTitle("Welcome");  
        setSize(400, 200);  
    }  
}
 `;


export default function secret() {
  return (
    <div className='bg-[#3A3939] h-[100vh]'>
     <h1 className='text-[22px] text-white p-5'>Welcome to the Secret Place ....! </h1>
     <div className='w-[90vw] pl-[5%] '>
     <CodeViewer code={code} /> 
     </div>
    </div>
  )
}
