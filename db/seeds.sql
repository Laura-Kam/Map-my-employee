INSERT INTO department (id, name)
VALUES 
(1, "History"),
(2, "Languages"),
(3, "Science"),
(4, "Religious Studies");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, "History Teacher", 27000, 1),
(2, "Language Assistant", 1300, 2),
(3, "Science Technician", 1500, 3),
(4, "Head of Department Religious Studies", 40000,4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, "History Teacher", 27000, 1),
(2, "Language Assistant", 1300, 2),
(3, "Science Technician", 1500, 3),
(4, "Head of Department Religious Studies", 40000,4);

