const sum = require("./app").sum;

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});
