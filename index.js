const inquirer = require("inquirer");
const mysql = require("mysql2");
// const consoleTable = require("console.table");

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
  mainMenuPrompt();
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
      let userChoice = response.choice;
      console.log(userChoice);
      switch (userChoice) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateRole();
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
          addDepartment();
          break;
      }
    });
};

function viewAllEmployees() {
  db.query("SELECT * FROM employee;", (err, res) => {
    // if (err) throw err;
    console.log(res);
    mainMenuPrompt();
  });
}

function viewRoles() {
  db.query("SELECT * FROM role;", (err, res) => {
    if (err) throw err;
    console.log(res);
    mainMenuPrompt();
  });
}
function viewAllDepartments() {
  db.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.log(res);
    mainMenuPrompt();
  });
}

function addEmployee() {
    inquirer.prompt([
{
 type:
 name:
 message: 

}


    ])
}


//initialises app
mainMenuPrompt();
