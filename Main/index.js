const htmlframework = require("./src/htmlframework");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

function addTeam() {
  function createTeam(){
    inquirer.prompt([
    {
      type: "list",
      name: "AddEmployee",
      message: "Add an employee or select 'Finish'.",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finish",
      ]
    }
  ]).then((data) => {
    const employeeRole = data.addEmployee;
    if (employeeRole === "Manager") {
      managerInfo();
    }
     else if (employeeRole === "Engineer") {
       engineerInfo();
     }
     else if (employeeRole === "Intern") {
       internInfo();
     }
     else if (employeeRole === "Finish") {
       renderTeam();
     }
  });
  }
  function managerInfo() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?"
      },
      
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?"
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?"
      },
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      addTeam();
    });
  }

  function engineerInfo() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the team engineer's name?"
      },
      
      {
        type: "input",
        name: "engineerId",
        message: "What is the team engineer's ID?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the team engineer's email?"
      },
      {
        type: "input",
        name: "engineerOfficeNumber",
        message: "What is the team engineer's github name?"
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      addTeam();
    });
  }

  function internInfo() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the team intern's name?"
      },
      
      {
        type: "input",
        name: "internId",
        message: "What is the team intern's ID?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the team intern's email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the team intern's school name?"
      },
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
  }

  function renderTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createTeam();
  
}



addTeam();