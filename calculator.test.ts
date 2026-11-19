import { describe, it, expect } from "vitest";
import { add, divide } from "./calculator";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("throws when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrowError("Cannot divide by zero");
  });

  it("returns zero when dividing zero by a non-zero number", () => {
    expect(divide(0, 5)).toBe(0);
  });
});