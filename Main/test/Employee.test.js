const Employee = require("../lib/Employee");

describe("Employee class", () => {
  test("Provides name, id(number), and email", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(employee.name).toEqual("Eric");
    expect(employee.id).toEqual(4);
    expect(employee.email).toEqual("Erictn3@uci.edu");
    expect(typeof(employee)).toBe("object");

  });
  
  test("Testing function getName", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(employee.getName()).toEqual("Eric");
  })

  test("Testing function getId", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(employee.getId()).toEqual(4);
  })

  test("Testing function getEmail", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(employee.getEmail()).toEqual("Erictn3@uci.edu");
  })

  test("Testing function getRole", () => {
    const employee = new Employee("Eric", 4, "Erictn3@uci.edu");
    expect(employee.getRole()).toEqual("Employee");
  });

});