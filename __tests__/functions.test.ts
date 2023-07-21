import { capitalize, multiply, reversedString, getTotal } from "../functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("revertedString should return a reversed string", () => {
  expect(reversedString('cochis')).toBe('sihcoc');
});

test("getTotal should return total of elements", () => {
  expect(getTotal([2,4,6,8])).toBe(20);
});
