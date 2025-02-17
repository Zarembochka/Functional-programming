import { describe, expect, test } from "@jest/globals";
import { partial } from "../../src/utils/index";

describe("partial application", () => {
    test("adds 5 + 3 to equal 8", () => {
        function sum(a: number, b: number): number {
            return a + b;
        }

        const add5 = partial(sum, 5);
        expect(add5(3)).toBe(8);
    });
});
