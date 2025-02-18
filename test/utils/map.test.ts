import { describe, expect, test } from "@jest/globals";
import { functionalMap } from "../../src/utils/index";

describe("functional map function", () => {
    test("map an array for square values", () => {
        const arr = [1, 2, 3, 4, 5];
        const square = (x: number) => x * x;
      
        const resultArr = functionalMap(square, arr);
        expect(resultArr).toEqual([1, 4, 9, 16, 25]);
    });

    test("map an empty array", () => {
        const arr: number[] = [];
        const square = (x: number) => x * x;
      
        const resultArr = functionalMap(square, arr);
        expect(resultArr).toEqual([]);
    });

    test("map an array with undefined and null values", () => {
        const arr = [1, null, 3, undefined, 5];
        const transform = (x: number | null | undefined) => (x ?? 0) * 2;
      
        const resultArr = functionalMap(transform, arr);
        expect(resultArr).toEqual([2, 0, 6, 0, 10]); 
      });
});