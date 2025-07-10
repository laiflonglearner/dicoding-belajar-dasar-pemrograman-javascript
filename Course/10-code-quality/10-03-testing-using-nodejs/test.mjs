import { test } from "node:test";
import assert from "node:assert";
import { add } from "./calculator.mjs";

test("should add correctly", () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

/*
// To run this test, use the command:
// node --test test.mjs
// Karena kalo langsung run dari IDE, it just executed your code like a regular script without invoking the test runner output mode.
*/
