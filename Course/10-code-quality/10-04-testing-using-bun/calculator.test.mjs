import { it, describe, expect } from "bun:test";
import { add } from "./calculator.mjs";

describe("Calculator", () => {
  it("should add correctly", () => {
    expect(add(1, 1)).toBe(2);
  });

  it("should throw an error if string passed on numA parameter", () => {
    expect(() => add("5", 4)).toThrow(Error);
  });

  it("should throw an error if string passed on numB parameter", () => {
    expect(() => add(10, "8")).toThrow(Error);
  });
});
