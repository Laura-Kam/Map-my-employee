/*creating database and tables*/

DROP DATABASE IF EXISTS myEmployees_db;
CREATE DATABASE myEmployees_db;

USE myEmployees_db;
/*creating department table and primary key */

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);
/*creating role table and attaching foreign key
to department id to link into a department (id) */
CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
  ON DELETE SET NULL
);
/*creating employee table and attaching foreign key
to role id to link into a role (id) */
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  /*second foreign key links internally to manager_id and employee(id)
  as manager of current employee */
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);

source db/seeds.sql