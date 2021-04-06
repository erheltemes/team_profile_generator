const Engineer = require("../lib/engineer")

describe("engineer", () => {
    describe("engineerObj", () => {
        it("should have values saved in object", () => {
        const engineerObj = new Engineer("george", 5, "email@gmail.com", "georgehub")
  
        expect(engineerObj.name).toEqual("george")
        expect(engineerObj.id).toEqual(5)
        expect(engineerObj.email).toEqual("email@gmail.com")
        expect(engineerObj.github).toEqual("georgehub")
      })
    })
    describe("engineerMethods", () => {
        it("should produce a line of html with values", () => {
        const engineerObj = new Engineer("george", 5, "email@gmail.com", "georgehub")
  
        expect(engineerObj.getName()).toEqual(`<h2>george</h2>`)
        expect(engineerObj.getId()).toEqual(`<p>ID: 5</p>`)
        expect(engineerObj.getEmail()).toEqual(`<p>Email: email@gmail.com</p>`)
        expect(engineerObj.getRole()).toEqual(`<h2>Engineer</h2>`)
        expect(engineerObj.getGithub()).toEqual(`<p>GitHub: <a src='https://github.com/georgehub'>georgehub</a></p>`)
      })
    })
})