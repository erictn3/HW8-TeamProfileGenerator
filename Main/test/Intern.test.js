const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern Class", () => {
  it("Provides name, id(number), email, and school", () => {
    const intern = new Intern("Eric", 4, "Erictn3@uci.edu", "Yale");

    expect(typeof(intern)).toBe("object");

    expect(intern.school).toEqual("Yale");
  });

  test("Testing function getSchool", () => {
    const intern = new Intern("Eric", 4, "Erictn3@uci.edu", "Yale");
    expect(intern.getSchool()).toEqual("Yale");
  })
  
  test("Testing function getRole", () => {
    const intern = new Intern("Eric", 4, "Erictn3@uci.edu", "Yale");
    expect(intern.getRole()).toEqual("Intern");
  })
  
})