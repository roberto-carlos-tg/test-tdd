import { it, expect, describe } from "vitest";

const fizzbuzz = (number) => {
  if (typeof number ==! 'number') throw new Error("parameter provider must be number");
  if (Number.isNaN(number)) throw new Error("parameter provider must be number");
};

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });

  it("should throw if not number is provider as parameter", () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it("should throw a specific error message if not number is provider as parameter", () => {
    expect(() => fizzbuzz()).toThrow("parameter provider must be number")
  })

  it("should throw a specific error message if not number is provider as parameter", () => {
    expect(() => fizzbuzz(NaN)).toThrow("parameter provider must be number")
  })

  it("should return 1 if number provided is 1 "), () => {
    expect(fizzbuzz(1)).toBe(1)
  }
})
