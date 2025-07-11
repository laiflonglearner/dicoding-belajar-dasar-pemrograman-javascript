import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum()", () => {
  // Test untuk angka valid
  describe("When arguments are valid numbers", () => {
    describe("Addition of integers", () => {
      it("adds two positive numbers", () => {
        assert.strictEqual(sum(5, 3), 8);
      });

      it("adds two negative numbers", () => {
        assert.strictEqual(sum(-5, -3), -8);
      });

      it("adds a number and zero", () => {
        assert.strictEqual(sum(0, 7), 7);
      });
    });

    describe("Addition of floating-point numbers", () => {
      it("adds decimals correctly (with floating-point tolerance)", () => {
        assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < 0.0001);
      });
    });
  });

  // Tests for string coercion
  describe("When arguments are strings (type coercion)", () => {
    it("concatenates if first argument is a string", () => {
      assert.strictEqual(sum("5", 4), "54");
    });

    it("concatenates if second argument is a string", () => {
      assert.strictEqual(sum(5, "4"), "54");
    });

    it("concatenates if both arguments are strings", () => {
      assert.strictEqual(sum("5", "4"), "54");
    });
  });

  // Tests for boolean coercion
  describe("When arguments are booleans (type coercion)", () => {
    it("adds a number and true (true → 1)", () => {
      assert.strictEqual(sum(10, true), 11);
    });

    it("adds a number and false (false → 0)", () => {
      assert.strictEqual(sum(10, false), 10);
    });

    it("adds two booleans (true + true)", () => {
      assert.strictEqual(sum(true, true), 2);
    });
  });

  // Tests for null coercion
  describe("When arguments are null (type coercion)", () => {
    it("adds a number and null (null → 0)", () => {
      assert.strictEqual(sum(7, null), 7);
    });

    it("adds two nulls (null + null)", () => {
      assert.strictEqual(sum(null, null), 0);
    });
  });

  // Tests for array coercion
  describe("When arguments are arrays (type coercion)", () => {
    it("concatenates two arrays as strings", () => {
      assert.strictEqual(sum([3], [7]), "37");
    });

    it("concatenates a number and an array", () => {
      assert.strictEqual(sum(2, [3]), "23");
    });
  });

  // Tests for NaN
  describe("When arguments are NaN", () => {
    it("returns NaN if first argument is NaN", () => {
      assert.ok(Number.isNaN(sum(NaN, 4)));
    });

    it("returns NaN if second argument is NaN", () => {
      assert.ok(Number.isNaN(sum(4, NaN)));
    });

    it("returns NaN if both arguments are NaN", () => {
      assert.ok(Number.isNaN(sum(NaN, NaN)));
    });
  });

  // Tests for Infinity
  describe("When arguments are Infinity", () => {
    it("adds Infinity and a number", () => {
      assert.strictEqual(sum(Infinity, 5), Infinity);
    });

    it("adds two Infinities", () => {
      assert.strictEqual(sum(Infinity, Infinity), Infinity);
    });

    it("adds Infinity and -Infinity", () => {
      assert.ok(Number.isNaN(sum(Infinity, -Infinity)));
    });
  });

  // Tests for invalid or missing arguments
  describe("When arguments are invalid or missing", () => {
    it("returns NaN if first argument is undefined", () => {
      assert.ok(Number.isNaN(sum(undefined, 4)));
    });

    it("returns NaN if second argument is undefined", () => {
      assert.ok(Number.isNaN(sum(4, undefined)));
    });

    it("returns NaN if both arguments are undefined", () => {
      assert.ok(Number.isNaN(sum(undefined, undefined)));
    });

    it("returns NaN if no arguments are passed", () => {
      assert.ok(Number.isNaN(sum()));
    });

    it("returns a concatenated string if both arguments are objects", () => {
      const result = sum({}, {});
      assert.strictEqual(result, "[object Object][object Object]");
    });
  });
});
