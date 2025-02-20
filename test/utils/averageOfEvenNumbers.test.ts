import { describe, expect, test } from "@jest/globals";
import { averageOfEvenNumber } from "../../src/index";

describe("average of even numbers function", () => {
    test("array with even number values", () => {
        const arr = [1, 23, 2, 6, 12, 0];
          
        const resultArr = averageOfEvenNumber(arr);
        expect(resultArr).toBe(5);
    });

    test("empty array", () => {
        const arr: number[] = [];
          
        const resultArr = averageOfEvenNumber(arr);
        expect(resultArr).toBe(undefined);
    });

    test("array without even number values", () => {
        const arr = [1, 3, 5, 7, 9, 11];
          
        const resultArr = averageOfEvenNumber(arr);
        expect(resultArr).toBe(undefined);
    });

    test("array with one even number values", () => {
        const arr = [1, 3, 5, 7, 9, 11, 12];
          
        const resultArr = averageOfEvenNumber(arr);
        expect(resultArr).toBe(12);
    });
});