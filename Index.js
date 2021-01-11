const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const teamArray = [];

const getEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameInput',
            message: "Please enter the employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idInput',
            message: "Please enter their ID: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter the ID of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailInput',
            message: "Please enter their email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter the email of the employee!');
                    return false;
                }
            }
        },
        {
            name: 'role',
            type: 'list',
            message: "What is the role of this team member?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            name: 'office',
            type: 'input',
            message: "Please enter the manager's office number: ",
            when: (answers) => answers.role === "Manager"
        },
        {
            name: 'github',
            type: 'input',
            message: "Please input the engineer's gitHub username: ",
            when: (answers) => answers.role === "Engineer"
        },
        {
            name: 'school',
            type: 'input', 
            message: "Please input the name of the intern's school: ",
            when: (answers) => answers.role === "Intern"
        }
        
    ])
    .then(answers => {
        if (answers.role === 'Manager') {
            const manager = new Manager (answers.nameInput, answers.idInput, answers.emailInput, answers.office)
            teamArray.push(manager);
        }
        if(answers.role === 'Engineer') {
            const engineer = new Engineer (answers.nameInput, answers.idInput, answers.emailInput, answers.github)
            teamArray.push(engineer);
        }
        if (answers.role === 'Intern'){
            const intern = new Intern (answers.nameInput, answers.idInput, answers.emailInput, answers.school)
            teamArray.push(intern);
        }
        inquirer.prompt({
            type: 'confirm',
            name: 'confirmAdd',
            message: "Would you like to add another employee?",
            default: false
        })
        .then(({confirmAdd}) => {
            if(!confirmAdd) {
                console.log("done!")
                createCard(teamArray);
            } else {
                getEmployee();
            }
        })
    })
}

const createCard = (team) => {
    const cardArray = [];
    team.forEach(member => {
        const employeeCard = `
            <div class="card">
                <div class="card-header">${member.getName()}</div>
                <div class="card-body">
                    <h5 class="card-title">${member.getRole()}</h5>
                    <ul class="card-text">
                        <li>ID: ${member.getId()}</li>
                        <li>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                        <li>${getRoleInfo(member)}</li>
                    </ul>
                </div>
            </div>  
        `
        cardArray.push(employeeCard);
    })
    cardArray.push(`    </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`)
    generateHTML(cardArray);
}


const getRoleInfo = (member) => {
    switch (member.getRole()) {
        case "Manager":
            return `Office number: ${member.getOffice()}`;
        case "Engineer":
            return `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`
        case "Intern":
            return `School: ${member.getSchool()}`
    }
}

const generateHTML = cards => {
    fs.copyFile('./src/page-template.html', './dist/index.html', err => {
        if (err) throw err
        fs.appendFile('./dist/index.html', cards.join(''), err => {
            if (err) throw err
        })
    })
}

getEmployee();