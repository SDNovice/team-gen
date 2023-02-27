const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
let body;
let divEl; 
let h3El; 
let h4El;  
let ulEl;
let liId;
let liEmail;
let liOffice;
let id;
let email;
let officeNum;
let baseInfo;
const htmlData =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Gen </title>
    <link rel="stylesheet" type="text/css" href="./style.css">
</head>
<body>
    <header>
        <h1> My Team </h1>
    </header>
    <script src="index.js"></script>
</body>
</html>`
// 

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
    },
    {
        type: 'input',
        message: 'What is the office number',
        name: 'officeNum'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Commit Logged') )

}


function init() { 
    
    inquirer.prompt(questions).then(answers => {
        name = answers.EmployeeName
        id =  answers.id
        email = answers.email 
        officeNum = answers.officeNum
        baseInfo = new Manager(name, id, email, officeNum);
    })
    writeToFile("index.html", htmlData)
}
init()


function createMangerCard(data){
    body = this.window.document.body
    divEl = document.createElement('div');
    h3El = document.createElement('h3');   
    h4El = document.createElement('h4');
    ulEl = document.createElement('ul');
    liId = document.createElement('li');
    liEmail = document.createElement('li');
    liOffice = document.createElement('li');
    
    h3El.textContent = data.name;
    h4El.textContent = "Manager";
    liId.textContent = data.id;
    liEmail.textContent = data.email;
    liOffice.textContent = data.officeNum;

    body.appendChild(divEl);
    divEl.appendChild(h3El);
    divEl.appendChild(h4El);
    divEl.appendChild(ulEl);
    ulEl.appendChild(liId);
    ulEl.appendChild(liEmail);
    ulEl.appendChild(liOffice);
    return;
}