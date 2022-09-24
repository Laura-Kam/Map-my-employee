const inquirer = require("inquirer");
const db = require("./db/schema.sql");
const consoleTable = require("console.table");
const dotenv = require("dotenv");

console.log("./db/schema.sql");

//main menu prompts
mainMenuPrompt = () => {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "Add Employee",
        "Update Employee Role",
        "View all Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Exit",
      ],
      name: "mainmenu",
      default: "use arrow keys",
    })
    .then((response) => {});
  if (response.mainmenu === "View All Employees") {
  }
};

//initialises app
mainMenuPrompt();
