const Employee = require("./employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return `<p>GitHub: <a src='https://github.com/${this.github}'>${this.github}</a></p>`
    }
    getRole() {
        return `<h2>Engineer</h2>`
    }
}
module.exports = Engineer