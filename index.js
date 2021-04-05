const inquirer = require("inquirer")
const fs = require('fs')
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const menuQuestions = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'menu',
        choices: ['Add an engineer', 'Add an intern', 'Build page']
    },
]

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Team Manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Engineer?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their github username?',
        name: 'github',
    },
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of the Intern?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their school?',
        name: 'school',
    },
]

let manager
const engineers = []
const interns = []

function afterManger(response) {
    const {name, id, email, officeNumber} = response
    let managerPush = new Manager(name, id, email, officeNumber)
    manager = managerPush
    console.log(manager)
    menuLoad()
}

function afterEngineer(response) {
    const {name, id, email, github} = response
    let engineersPush = new Engineer(name, id, email, github)
    engineers.push(engineersPush)
    console.log(engineers)
    menuLoad()
}

function afterIntern(response) {
    const {name, id, email, school} = response
    let internPush = new Intern(name, id, email, school)
    interns.push(internPush)
    console.log(interns)
    menuLoad()
}

function afterMenuLoad(response) {
    console.log(response)
    if (response.menu === "Add an engineer"){
        inquirer.prompt(engineerQuestions)
        .then(afterEngineer)
    }
    if (response.menu === "Add an intern"){
        inquirer.prompt(internQuestions)
        .then(afterIntern)
    }
    if (response.menu === "Build page"){
        buildHtml()
    }
}

function menuLoad() {
    inquirer.prompt(menuQuestions)
    .then(afterMenuLoad)
}

function init() {
    inquirer.prompt(managerQuestions)
    .then(afterManger)
}

init()

function buildHtml() {
    fs.writeFile("./dist/index.html", createhtml(), (err) => err ? console.log(err) : console.log('HTML created'))
    // fs.writeFile("./dist/style.css",)
}

function createhtml() {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profiles</title>
            </head>
            <style>
            header {background-color: rgb(184, 81, 81);}
            h1, h2 {color: white;}
            main {display: flex}
            .card {width: 300px; border: black 1px solid;}
            .title {background-color: rgb(40, 110, 241);} 
            </style>
            <body>
                <header>
                    <h1>My Team</h1>
                </header>
                <main>
                    ${managerCards()}${engineerCards()}${internCards()}
                </main>
            </body>
            </html>`
}

function managerCards() {
    let card = 
    `<div class="card">
        <div class="title">
            ${manager.getName()}
            ${manager.getRole()}
        </div>
        <div class="details">
            ${manager.getId()}
            ${manager.getEmail()}
            ${manager.getOfficeNumber()}
        </div>
    </div>\n`
    return card
}

function engineerCards() {
    let cardArray = []
    engineers.forEach(engineer => {
    let cardPush =  
    `<div class="card">
        <div class="title">
            ${engineer.getName()}
            ${engineer.getRole()}
        </div>
        <div class="details">
            ${engineer.getId()}
            ${engineer.getEmail()}
            ${engineer.getGithub()}
        </div>
    </div>\n`
    cardArray.push(cardPush)
    })
    return cardArray.join("")
}

function internCards() {
    let cardArray = []
    interns.forEach(intern => {
    let cardPush =  
    `<div class="card">
        <div class="title">
            ${intern.getName()}
            ${intern.getRole()}
        </div>
        <div class="details">
            ${intern.getId()}
            ${intern.getEmail()}
            ${intern.getSchool()}
        </div>
    </div>\n`
    cardArray.push(cardPush)
    })
    return cardArray.join("")
}





