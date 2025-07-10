import { describe, it } from "node:test";
import assert from "node:assert";
import { add } from "./calculator.mjs";

describe("Calculator", () => {
  it("should add correctly", () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = "5";
      const operandB = 4;

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });

  it("should throw an error if string passed on numB parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = "8";

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });
});

/*
    // To run this test, use `node --test test.mjs`
    // Karena kalo langsung run dari IDE, 
    // it just executed your code like a regular script without invoking the test runner output mode.

    //Expected output:
    ▶ Calculator
        ✔ should add correctly (1.5239ms)
        ✔ should throw an error if string passed on numA parameter (1.1005ms)
        ✔ should throw an error if string passed on numB parameter (0.3891ms)
    ✔ Calculator (5.5367ms)
    ℹ tests 3
    ℹ suites 1 //one group of tests (using describe)
    ℹ pass 3
    ℹ fail 0
    ℹ cancelled 0
    ℹ skipped 0
    ℹ todo 0
    ℹ duration_ms 203.2876
*/
