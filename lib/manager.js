const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return `<p>Office Number: ${this.officeNumber}</p>`
    }
    getRole() {
        return `<h2>Manager</h2>`
    }
}

module.exports = Manager