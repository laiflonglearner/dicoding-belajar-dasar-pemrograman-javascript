import test, { describe } from "node:test"; // Import describe
import assert from "node:assert";
import sum from "./index.js";

// Group all tests for the sum function
describe("sum() function", () => {
  test("should correctly add two positive numbers", () => {
    assert.strictEqual(sum(7, 1), 8, "Expected 7 + 1 to be 8");
    assert.strictEqual(sum(19, 23), 42, "Expected 19 + 23 to be 42");
  });

  /*
    It's not required to test for zero as input,
    but because in the provided sum function, it checks whether the inputs are less than zero,
    and it also returns zero for such cases, testing with zero might be valuable.
  */
  test("should correctly handle zero as input", () => {
    assert.strictEqual(sum(0, 0), 0, "Expected 0 + 0 to be 0");
    assert.strictEqual(sum(7, 0), 7, "Expected 7 + 0 to be 7");
    assert.strictEqual(sum(0, 7), 7, "Expected 0 + 7 to be 7");
  });

  test("should return 0 for negative numbers", () => {
    assert.strictEqual(
      sum(-2, 3),
      0,
      "Expected sum with negative first number to be 0"
    );
    assert.strictEqual(
      sum(2, -3),
      0,
      "Expected sum with negative second number to be 0"
    );
    assert.strictEqual(
      sum(-2, -3),
      0,
      "Expected sum with two negative numbers to be 0"
    );
  });

  test("should return 0 for non-numeric inputs", () => {
    assert.strictEqual(
      sum("2", 3),
      0,
      "Expected sum with string first argument to be 0"
    );
    assert.strictEqual(
      sum(2, "3"),
      0,
      "Expected sum with string second argument to be 0"
    );
    assert.strictEqual(
      sum("l", "n"),
      0,
      "Expected sum with two string arguments to be 0"
    );
    assert.strictEqual(
      sum(null, 7),
      0,
      "Expected sum with null first argument to be 0"
    );
    assert.strictEqual(
      sum(undefined, 7),
      0,
      "Expected sum with undefined first argument to be 0"
    );
    assert.strictEqual(
      sum(7, null),
      0,
      "Expected sum with null second argument to be 0"
    );
    assert.strictEqual(
      sum(7, undefined),
      0,
      "Expected sum with undefined second argument to be 0"
    );
    assert.strictEqual(
      sum([], 2),
      0,
      "Expected sum with array first argument to be 0"
    );
    assert.strictEqual(
      sum({}, 2),
      0,
      "Expected sum with object first argument to be 0"
    );
    assert.strictEqual(
      sum(2, []),
      0,
      "Expected sum with array second argument to be 0"
    );
    assert.strictEqual(
      sum(2, {}),
      0,
      "Expected sum with object second argument to be 0"
    );
  });
});
