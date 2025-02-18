import { describe, expect, test } from "@jest/globals";
import { linearFold } from "../../src/utils/index";

describe("linear fold utility", () => {
    test("linear fold works on number array with initial value", () => {
        const add = (a: number, b: number) => a + b;
        const arr = [1, 2, 3, 4, 5];
        const resultLinearFold = linearFold(arr, add, 1);
        expect(resultLinearFold).toBe(16);
    });

    test("linear fold works on number array without initial value", () => {
        const add = (a: number, b: number) => a + b;
        const arr = [1, 2, 3, 4, 5];
        const resultLinearFold = linearFold(arr, add);
        expect(resultLinearFold).toBe(15);
    });

    test("linear fold works on objects array with initial value", () => {
        const add = (a: number, b: {x: number}) => a + b.x;
        const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
        const resultLinearFold = linearFold(arr, add, 0);
        expect(resultLinearFold).toBe(6);
    });
});