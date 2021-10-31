const {getShip, totalPayment} = require('./function');

test("1", () => {
  expect(totalPayment(-50000, -5)).toBe("Input not valid");
})
test("2", () => {
  expect(totalPayment(-50000, 5)).toBe("Input not valid");
})
test("3", () => {
  expect(totalPayment(-50000, 15)).toBe("Input not valid");
})
test("4", () => {
  expect(totalPayment(-50000, 50)).toBe("Input not valid");
})
test("5", () => {
  expect(totalPayment(50000, -5)).toBe("Input not valid");
})
test("6", () => {
  expect(totalPayment(50000, 5)).toBe(50000);
})
test("7", () => {
  expect(totalPayment(50000, 15)).toBe(70000);
})
test("8", () => {
  expect(totalPayment(50000, 50)).toBe(100000);
})
test("9", () => {
  expect(totalPayment(150000, -5)).toBe("Input not valid");
})
test("10", () => {
  expect(totalPayment(150000, 5)).toBe(150000);
})
test("11", () => {
  expect(totalPayment(150000, 15)).toBe(160000);
})
test("12", () => {
  expect(totalPayment(150000, 50)).toBe(175000);
})
test("13", () => {
  expect(totalPayment(250000, -5)).toBe("Input not valid");
})
test("14", () => {
  expect(totalPayment(250000, 5)).toBe(250000);
})
test("15", () => {
  expect(totalPayment(250000, 15)).toBe(254000);
})
test("16", () => {
  expect(totalPayment(250000, 50)).toBe(260000);
})
test("17", () => {
  expect(totalPayment(350000, -5)).toBe("Input not valid");
})
test("18", () => {
  expect(totalPayment(350000, 5)).toBe(350000);
})
test("19", () => {
  expect(totalPayment(350000, 15)).toBe(350000);
})
test("20", () => {
  expect(totalPayment(350000, 50)).toBe(350000);
})