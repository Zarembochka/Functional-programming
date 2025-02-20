import { describe, expect, jest, test } from "@jest/globals";
import { memoization } from "../../src/index";

describe("memoization utility", () => {
    const factorial = (n: number): number => {
        if (n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };

    test("returns the result when value is not cached", () => {
        const memoFactorial = memoization(factorial);
        expect(memoFactorial(1)).toBe(1);
        expect(memoFactorial(2)).toBe(2);
        expect(memoFactorial(3)).toBe(6);
    });

    test("returns the result from cache", () => {
        const mockFactorial = jest.fn<(n: number) => number>().mockImplementation(factorial);
        const memoFactorial = memoization(mockFactorial);

        memoFactorial(3);
        expect(mockFactorial).toHaveBeenCalledTimes(1);

        memoFactorial(3);
        expect(mockFactorial).toHaveBeenCalledTimes(1);
    });

    test("call the original function with new value", () => {
        const mockFactorial = jest.fn<(n: number) => number>().mockImplementation(factorial);
        const memoFactorial = memoization(mockFactorial);

        memoFactorial(3);
        expect(mockFactorial).toHaveBeenCalledTimes(1);

        memoFactorial(4);
        expect(mockFactorial).toHaveBeenCalledTimes(2);
    });
});
