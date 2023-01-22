//inputted dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

//created connection
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "rootroot",
    database: "myEmployees_db",
  },
  console.log(`Connected to the myEmployees_db database.`)
);

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

//main menu prompts
mainMenuPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainmenu",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      let userChoice = response.mainmenu;
      console.log(userChoice);
      switch (userChoice) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "Add Role":
          addRole();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "Add Department":
          console.log("==adding a department");
          addDepartment();
          break;
      }
    });
};

function viewAllEmployees() {
  db.query(
    `SELECT
  employee.id,
  employee.first_name,
  employee.last_name,
  role.title AS job_title,
  department.department_name AS department_name,
  role.salary,
  CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenuPrompt();
    }
  );
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the employee that you want to add?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the employee that you want to add?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the role id of the employee that you want to add?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the manager id of the employee you want to add?",
      },
    ])
    .then((response) => {
      db.query(`INSERT INTO employee SET ?`, response),
        (err, res) => {
          if (err) throw err;
          console.log(res);
        };
      mainMenuPrompt();
    });
}

//update Employee Role
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: "number",
      name: "id",
      message: "Which employee do you want to update? Write their id",
    },
    {
      type: "list",
      name: "title",
      message: "What new role would you like to assign them?",
      choices: getTheRoles(),
    },
  ]);
  // .then((response) => {
  //   db.query(`UPDATE role SET title = ? WHERE `, response.id),
  //     (err, res) => {
  //       if (err) throw err;
  //       console.log(res);
  //     };
  //   db.query();
  //   mainMenuPrompt();
  // });
}

function viewRoles() {
  db.query("SELECT * FROM role;", (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenuPrompt();
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role you want to add?",
      },
      {
        type: "number",
        name: "salary",
        message: "What is the salary of the role you want to add?",
      },
      {
        type: "number",
        name: "department_id",
        message: "What is the department id of the role you want to add?",
      },
    ])
    .then((response) => {
      db.query(`INSERT INTO role SET ?`, response),
        (err, res) => {
          if (err) throw err;
          console.log(res);
        };
      mainMenuPrompt();
    });
}

function viewAllDepartments() {
  db.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenuPrompt();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the department that you want to add?",
      },
    ])
    .then((response) => {
      db.query(`INSERT INTO department SET ?`, response),
        (err, res) => {
          if (err) throw err;
          console.log(res);
        };
      mainMenuPrompt();
    });
}
function getTheRoles() {
  let data = db.query(`SELECT * FROM role`);
  let roleChoices = [];
  for (let i = 0; i < data[0].length; i++) {
    let roleObj = {
      name: data[0][i].title,
      value: data[0][i].id,
    };
    roleChoices.push(roleObj);
  }
  return roleChoices;
}

//initialises app
mainMenuPrompt();
