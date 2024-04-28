import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
package jdbc;

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
			System.out.print("Database successfully created ! ");
			
		}
		catch(SQLException e){
			e.printStackTrace();
		}

	}

} 
`;

const Lab10 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a JDBC program to create a database connection and to create a student database  </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab10;
