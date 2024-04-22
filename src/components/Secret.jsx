import React from 'react'
import CodeViewer from './CodeViewer'

const code = `   package jdbc;

import java.sql.*;

public class jdbc_1 {

	public static void main(String[] args) throws ClassNotFoundException {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String mysqlurl = "jdbc:mysql://localhost:3306/db_10";
			Connection con = DriverManager.getConnection(mysqlurl ,"root","tiger" );
			System.out.print("Connection established...");
			Statement s = con.createStatement();
			s.execute("create database db_test");
			System.out.print("Created table in database...");
			
		}
		catch(SQLException e){
			e.printStackTrace();
		}

	}

}  `;


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
