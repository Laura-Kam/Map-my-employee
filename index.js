const inquirer = require("inquirer");
const db = require("./db/connection.js");
const consoleTable = require("console.table");
const dotenv = require("dotenv");

//main menu prompts
// mainMenuPrompt = () => {
//   inquirer
//     .prompt({
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "View all Employees",
//         "Add Employee",
//         "Update Employee Role",
//         "View all Roles",
//         "Add Role",
//         "View All Departments",
//         "Add Department",
//         "Exit",
//       ],
//       name: "mainmenu",
//       default: "use arrow keys",
//     })
//     .then((response) => {});
//   if (response.mainmenu === "View All Employees") {
//     //call a function
//   }
// };

// //initialises app
// mainMenuPrompt();
