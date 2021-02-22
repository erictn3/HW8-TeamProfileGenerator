const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("Provides name, id(number), email, and office number", () => {
    const manager = new Manager("Eric", 4, "Erictn3@uci.edu", 1);

    expect(typeof(manager)).toBe("object");

    expect(manager.officeNumber).toBe(1);
  });

  test("Testing function getofficeNumber", () => {
    const manager = new Manager("Eric", 4, "Erictn3@uci.edu", 1);

    expect(manager.getOfficeNumber()).toEqual(1);
  });

  test("Testing function getRole", () => {
    const manager = new Manager("Eric", 4, "Erictn3@uci.edu", 1);
    expect(manager.getRole()).toEqual("Manager");
  });


});