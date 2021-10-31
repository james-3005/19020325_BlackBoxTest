const {getShip, totalPayment} = require('./function');

test("1", () => {
  expect(totalPayment(-50000, 10)).toBe("Input not valid");
})
test("2", () => {
  expect(totalPayment(50000, 10)).toBe(70000);
})
test("3", () => {
  expect(totalPayment(150000, 10)).toBe(160000);
})
test("4", () => {
  expect(totalPayment(250000, 10)).toBe(254000);
})
test("5", () => {
  expect(totalPayment(350000, 10)).toBe(350000);
})
test("6", () => {
  expect(totalPayment(250000, 0)).toBe("Input not valid");
})
test("7", () => {
  expect(totalPayment(250000, 5)).toBe(250000);
})
test("8", () => {
  expect(totalPayment(250000, 50)).toBe(260000);
})