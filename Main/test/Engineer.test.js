const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("Provides name, id(number), and email", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(typeof(employee)).toBe("object");
  });

  


})