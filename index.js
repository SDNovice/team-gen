const inquirer = require('inquirer');
const fs = require('fs');

// const questions = [
//     {
//         type: 'input',
//         message: 'Please enter your name',
//         name: "EmployeeName"
//     },
//     {
//         type: 'input',
//         message: 'Please enter your id',
//         name: "id"  
//     },
//     {
//         type: 'input',
//         message: 'Please enter your email',
//         name: "email"
//     }
// ]

// class Employee {
//     constructor(name, id, email){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }

//     getName(name){
//         return this.name;
//     }
//     getId(id){
//         return this.id;
//     }
//     getEmail(email){
//         return this.email;
//     }
//     getRole(){
//         return 'Employee';
//     }
// }

// inquirer.prompt(questions).then(answers => {
//     const name = answers.EmployeeName
//     const id =  answers.id
//     const email = answers.email
//     const teamMember = new Employee(name, id, email);
//     console.log(teamMember.getName());
//     console.log(teamMember.getId());
//     console.log(teamMember.getEmail());
//     console.log(teamMember.getRole());
// })

fs.readFile('testfile.html', 'utf8', (err) => {
    if (err) {console.log(err)}
})