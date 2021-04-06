class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return `<h2>${this.name}</h2>`
    }
    getId() {
        return `<p>ID: ${this.id}</p>`
    }
    getEmail() {
        return `<p>Email: ${this.email}</p>`
    }
    getRole() {
        return `<h2>Employee</h2>`
    }
}

module.exports = Employee