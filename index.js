// Include packages needed for this application

// to know it's from a file and not a package needs "./"
//const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
//const fs = require('fs');
//const { type } = require('os');
//const { error } = require('console');

const actions = ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'];

let deparatments = [];
deparatments.push('Properties','Properties', 'IT', 'Strategy', 'Operations');
//console.log(deparatments);
let roles = [];
roles.push('Programmer','Developer', 'Coder', 'Tester');
//console.log(roles);
let employees = [];
employees.push('Melissa Brown', 'A B', 'C D', 'E F');

//function populateListChoices() {
    // 
//}

// Create an array of questions for user input
const questions = [
    //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: actions,
        name: 'view',
    },
    //  WHEN I choose to add a department
    //THEN I am prompted to enter the name of the department and that department is added to the database
    {
        type: 'input',
        message: 'Enter department:',
        name: 'department',
        when: (answers) => {
            if (answers.view === "add a department") {
                return true;
            }
        }
    },
    //WHEN I choose to add a role
    //THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    {
        type: 'input',
        message: 'Enter role:',
        name: 'role',
        when: (answers) => {
            if (answers.view === "add a role") {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter salary:',
        name: 'salary',
        when: (answers) => {
            if (answers.view === "add a role") {
                return true;
            }
        }
    },
    {
        // choice
        type: 'list',
        message: 'Enter role department:',
        choices: deparatments,
        name: 'role-department',
        when: (answers) => {
            if (answers.view === "add a role") {
                return true;
            }
        }
    },
    //WHEN I choose to add an employee
    //THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    {
        type: 'input',
        message: 'Enter first name:',
        name: 'firstName',
        when: (answers) => {
            if (answers.view === "add an employee") {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter last name:',
        name: 'lastName',
        when: (answers) => {
            if (answers.view === "add an employee") {
                return true;
            }
        }
    },
    {
        // choice
        type: 'list',
        message: 'Enter employee role:',
        choices: roles,
        name: 'employee-role',
        when: (answers) => {
            if (answers.view === "add an employee") {
                return true;
            }
        }
    },
    {
        // choice
        type: 'list',
        message: 'Enter employee manager:',
        choices: employees,
        name: 'manager',
        when: (answers) => {
            if (answers.view === "add an employee") {
                return true;
            }
        }
    },
    //WHEN I choose to update an employee role
    //THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
    {
        // make choice
        type: 'list',
        message: 'Enter employee:',
        choices: employees,
        name: 'employee',
        when: (answers) => {
            if (answers.view === "update an employee role") {
                return true;
            }
        }
    },
    {
        // make choice
        type: 'list',
        message: 'Enter employee role:',
        choices: roles,
        name: 'employee-role-update',
        when: (answers) => {
            if (answers.view === "update an employee role") {
                return true;
            }
        }
    },
    {
        // make choice
        type: 'confirm',
        message: 'Done?',
        name: 'is_finished',
    },
]

// Create a function to initialize app
function init() {
    //populateListChoices(deparatments,roles,employees);
   
    //console.log(employees);
    // ask questions using inquierer
    return inquirer.prompt(questions)
        //WHEN I choose to view all departments
        //THEN I am presented with a formatted table showing department names and department ids
        //WHEN I choose to view all roles
        //THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
        //WHEN I choose to view all employees
        //THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        //WHEN add, adds data
        //WHEN update, updates data
        .then(data => {
            //console.log("then: " + data.lastName);
            if (data.is_finished) {
                //console.log("done: " + data.lastName);
                return data;
            }
            else {
                //console.log("else :" + data.lastName);
                return init();
            }
        })
}

// Function call to initialize app
init();

