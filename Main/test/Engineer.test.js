const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {
  it("Provides name, id(number), email, and github username", () => {
    const engineer = new Engineer("Eric", 4, "Erictn3@uci.edu", "erictn3");

    expect(typeof(engineer)).toBe("object");

    expect(engineer.github).toBe("erictn3");
  });

  test("Testing function getGithub", () => {
    const engineer = new Engineer("Eric", 4, "Erictn3@uci.edu", "erictn3");

    expect(engineer.getGithub()).toEqual("erictn3");
  });

  test("Testing function getRole", () => {
    const engineer = new Engineer("Eric", 4, "Erictn3@uci.edu", "erictn3");
    expect(engineer.getRole()).toEqual("Engineer");
  });


});