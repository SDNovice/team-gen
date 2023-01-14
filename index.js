const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: "EmployeeName"
    },
    {
        type: 'input',
        message: 'Please enter your id',
        name: "id"  
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: "email"
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Commit Logged') )
}


function init() {
    inquirer.prompt(questions).then(answers => {
        const name = answers.EmployeeName
        const id =  answers.id
        const email = answers.email
        const teamMember = new Employee(name, id, email);
    })
    writeToFile("index.html", '')
}