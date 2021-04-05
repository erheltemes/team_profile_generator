const Employee = require("../lib/employee")

describe("Employee", () => {
    describe("employeeObj", () => {
        it("should have values saved in object", () => {
        const employeeObj = new Employee("george", 5, "email@gmail.com")
  
        expect(employeeObj.name).toEqual("george")
        expect(employeeObj.id).toEqual(5)
        expect(employeeObj.email).toEqual("email@gmail.com")
      })
    })
    describe("employeeMethods", () => {
        it("should produce a line of html with values", () => {
        const employeeObj = new Employee("george", 5, "email@gmail.com")
  
        expect(employeeObj.getName()).toEqual(`<h2>george</h2>`)
        expect(employeeObj.getId()).toEqual(`<p>Email: 5</p>`)
        expect(employeeObj.getEmail()).toEqual(`<p>Email: email@gmail.com</p>`)
        expect(employeeObj.getRole()).toEqual(`<h2>Employee</h2>`)
      })
    })
})
