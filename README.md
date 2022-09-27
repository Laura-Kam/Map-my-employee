# Title of Project: Map my Employee

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents:

- [Username](#username)
- [Project Description](#description)
- [License](#license)
- [Command to install](#command-to-install)
- [Instructions for users](#instructions-for-users-of-the-app)
- [Features of the project](#features-of-the-project)
- [Link to GitHub Repo](#Link-to-Git-hub-repo.)
- [Screenshot of Application](#Screenshot-of-Application)
- [Bugs](#bugs)
- [Version History](#Version-history)
- [Link to video](#Link-to-video)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)

## Username

    Laura-Kam

## Description

The motivation behind this project was to be able to use a simple command line application to view and update an employee database.

GIVEN a command-line application that accepts user input

- WHEN I start the application
  THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
  THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
  THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
  THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
  THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
  THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
  THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
  THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## License

MIT

## Command to install

npm i.

## Instructions for users of the app

clone the application, install dependencies, Inquirer, MySQL2, console.table. Run the schema and then seeds.sql files. Then Run the app using node index.js,

## Features of the project

It is a command-line application, it creates database tables, and allows for viewing and updating through command line inputs.

## Link to Git-hub repo.

[Link to repo](https://github.com/Laura-Kam/Map-my-employee)

## Screenshot of application:

[Screenshot of website](https://github.com/Laura-Kam/Map-my-employee/issues/2#issue-1385117481)

## bugs

- Tables were not syntatically correct. Resolved.
- Connection failed to work. Resolved.
- Prompt responses were incorrectly configured. Resolved.
- Remaing bug- cannot update employee.

## Version history

- 0.1 Created database and tables
- 0.2 Created connection to the database
- 0.3 Created initial inquirer menu prompts
- 0.4 Troubleshooted using console.table to view tables.

# Link to video

- [Map-My Employees Video Google Drive](https://drive.google.com/file/d/1Fpu0EbOrI3jwCa3uXyCOjo_Ic2fAPWVb/view)

- [Map-My Employees Screencastify](https://watch.screencastify.com/v/BGCke3UbKpUn7eX3APB7)

## How to contribute

Git clone the repo, work on the code, then make a pull request.

## Questions

If you have any questions, or would like to get in touch find me on GitHub [Laura-Kam](https://github.com/Laura-Kam)
or email me at laura_ek@yahoo.co.uk.
