import { describe, it, expect } from "vitest";
import { add, divide } from "./calculator";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });
});