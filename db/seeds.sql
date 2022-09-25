INSERT INTO department (department_name)
VALUES 
("History"),
("Languages"),
("Science"),
("Religious Studies");


INSERT INTO role (title, salary, department_id)
VALUES 
("History Teacher", 27000, 1),
("Language Assistant", 1300, 2),
("Head of Science", 55000, 3),
("Head of RE", 40000,4),
("Head of History", 50000, 1),
("Science Teacher", 30000, 3),
("Head of Langs", 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Laura", "Cook", 5, NULL), 
("Abdul", "Raheem", 4, NULL), 
("John", "Smith", 7, NULL), 
("Dave", "Right", 3, NULL), 
("Jess", "Redman", 1, 1 ), 
("Nikki", "Cam", 6, 4 ),
("Jane", "Goodman", 2, 3); 




