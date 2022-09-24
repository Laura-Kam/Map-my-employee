/*creating database and tables*/
DROP DATABASE IF EXISTS myEmployees_db;
CREATE DATABASE myEmployees_db;

USE myEmployees_db;
/*creating department table and primary key */
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,

    department_name VARCHAR(30) NOT NULL,
);

/*creating role table and attaching foreign key 
to department id to link into a department (id) */

CREATE TABLE role_name (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY department_id
    REFERENCES department(id)
  ON DELETE SET NULL
);

/*creating employee table and attaching foreign key 
to role id to link into a role (id) */

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30), NOT NULL,
    role_id INT,
    manager_id INT
    FOREIGN KEY (role_id)
  REFERENCES role_name(id)
  ON DELETE SET NULL,
  /*second foreign key links internally to manager_id and employee(id)
  as manager of current employee */
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);



