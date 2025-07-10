import { it, describe, expect } from "bun:test";

describe("arithmetic", () => {
  it("1 + 1", () => {
    expect(1 + 1).toBe(2);
  });

  it("3 * 2", () => {
    expect(3 * 2).toBe(6);
  });
});

/*
    // To run this test, use the command: bun test sample.test.mjs
    Expected output:
    ✓ arithmetic > 1 + 1
    ✓ arithmetic > 3 * 2

    2 pass
    0 fail
    2 expect() calls
    Ran 2 tests across 1 file. [319.00ms]
*/
