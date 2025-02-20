import { describe, expect, test } from "@jest/globals";
import { lazy } from "../../src/index";

describe("lazy utility", () => {
    test("returns the correct result", () => {
        const factorial = (n: number): number => {
            if (n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        };

        const lazyFactorial = lazy(factorial);
        expect(lazyFactorial(5)).toBe(120);
    });

    test("pass the arguments correctly", () => {
        const greeting = (firstName: string, lastName: string): string => {
            return `Hello, ${lastName} ${firstName}!`;
        };

        const lazyGreeting = lazy(greeting);
        expect(lazyGreeting("John", "Snow")).toBe("Hello, Snow John!");
    });
});
