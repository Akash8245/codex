import React from 'react';
import CodeViewer from '../components/CodeViewer';

const code = `
package jdbc;
import java.sql.*;

public class jdbc_2 {
    public static void main(String[] args) throws ClassNotFoundException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String mysqlurl = "jdbc:mysql://localhost:3306/akash";
            Connection con = DriverManager.getConnection(mysqlurl ,"root","tiger" );
            System.out.println("Connection established...");
            Statement s = con.createStatement();
            String sql = "select * from student";
            ResultSet rs = s.executeQuery(sql);
            System.out.println("Student details:");
            while(rs.next()) {
                System.out.print(rs.getString("student_id")+"\t");
                System.out.print(rs.getString("student_name")+"\t");
                System.out.print(rs.getString("student_course"));
                System.out.println();
            }
            con.close();            
        }
        catch(SQLException e){
            e.printStackTrace();
        }

    }
}
#in SQL


create table student(student_id int ,student_name varchar(20),student_course varchar(20));

insert into student values(001,"Akash","BCA");
insert into student values(002,"Mahesh","BCA");
 insert into student values(003,"Akhil","BCom");

`;

const Lab11 = () => {
  return (
    <div>
      <h1 className='pb-2'>Write a JDBC program to search and display students information on screen </h1>
      <CodeViewer code={code} />
    </div>
  );
};

export default Lab11;
