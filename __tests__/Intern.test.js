const Intern = require("../lib/intern")

describe("intern", () => {
    describe("internObj", () => {
        it("should have values saved in object", () => {
        const internObj = new Intern("george", 5, "email@gmail.com", "georgeschool")
  
        expect(internObj.name).toEqual("george")
        expect(internObj.id).toEqual(5)
        expect(internObj.email).toEqual("email@gmail.com")
        expect(internObj.school).toEqual("georgeschool")
      })
    })
    describe("internMethods", () => {
        it("should produce a line of html with values", () => {
        const internObj = new Intern("george", 5, "email@gmail.com", "georgeschool")
  
        expect(internObj.getName()).toEqual(`<h2>george</h2>`)
        expect(internObj.getId()).toEqual(`<p>ID: 5</p>`)
        expect(internObj.getEmail()).toEqual(`<p>Email: email@gmail.com</p>`)
        expect(internObj.getRole()).toEqual(`<h2>Intern</h2>`)
        expect(internObj.getSchool()).toEqual(`<p>School: georgeschool</p>`)
      })
    })
})