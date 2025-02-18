import { describe, expect, test } from "@jest/globals";
import { partial } from "../../src/utils/index";

describe("partial application", () => {
    test("partial a function with 2 arguments", () => {
        const add = (a: number, b: number) => a + b;
      
        const add5 = partial(add, 5);
        expect(add5(3)).toBe(8);
    });

    test("partial a function with 3 arguments", () => {
        const multiple = (a: number, b: number, c: number) => a * b * c;
      
        const multipleBy2And5 = partial(multiple, 2, 5);
        expect(multipleBy2And5(3)).toBe(30);
    });

    test("partial a function with no arguments", () => {
        const hello = () => "Hello!";
      
        const result = partial(hello);
        expect(result()).toBe("Hello!");
    });
});
