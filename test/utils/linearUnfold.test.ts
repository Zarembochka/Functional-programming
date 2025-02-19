import { describe, expect, test } from "@jest/globals";
import { linearUnfold } from "../../src/utils/index";

describe("linear unfold utility", () => {
    test("linear unfold works on decrement callback", () => {
        const callback = (a: number):[number, number] => [a, a - 1];
        const resultLineaUnfold = linearUnfold(callback, 5);
        expect(resultLineaUnfold).toEqual([5, 4, 3, 2]);
    });

    test("linear unfold works on increment callback", () => {
        function callback(a: number):[number, number|null] {
            if (a === 7) {
                return [7, null];
            }
           return [a, a + 1];
        }
        const resultLineaUnfold = linearUnfold(callback, 1);
        expect(resultLineaUnfold).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("linear unfold works on false callback", () => {
        function callback(a: number):[number, boolean] {
            return [a + 1, false]
        }
        const resultLineaUnfold = linearUnfold(callback, 10);
        expect(resultLineaUnfold).toEqual([]);
    });
});