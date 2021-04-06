const Manager = require("../lib/manager")

describe("manager", () => {
    describe("managerObj", () => {
        it("should have values saved in object", () => {
        const managerObj = new Manager("george", 5, "email@gmail.com", 575)
  
        expect(managerObj.name).toEqual("george")
        expect(managerObj.id).toEqual(5)
        expect(managerObj.email).toEqual("email@gmail.com")
        expect(managerObj.officeNumber).toEqual(575)
      })
    })
    describe("managerMethods", () => {
        it("should produce a line of html with values", () => {
        const managerObj = new Manager("george", 5, "email@gmail.com", 575)
  
        expect(managerObj.getName()).toEqual(`<h2>george</h2>`)
        expect(managerObj.getId()).toEqual(`<p>ID: 5</p>`)
        expect(managerObj.getEmail()).toEqual(`<p>Email: email@gmail.com</p>`)
        expect(managerObj.getRole()).toEqual(`<h2>Manager</h2>`)
        expect(managerObj.getOfficeNumber()).toEqual(`<p>Office Number: 575</p>`)
      })
    })
})