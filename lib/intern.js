const Employee = require("./employee")

class Intern extends Employee  {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return `<p>School: ${this.school}</p>`
    }
    getRole() {
        return `<h2>Intern</h2>`
    }
}

module.exports = Intern