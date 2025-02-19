import { describe, expect, test } from "@jest/globals";
import { functionalFilter } from "../../src/index";

describe("functional filter function", () => {
    test("filter an array with number values", () => {
        const arr = [2, 5, 3, 1, 5];
        const condition = (x: number) => x >= 3;
      
        const resultArr = functionalFilter(condition, arr);
        expect(resultArr).toEqual([5, 3, 5]);
    });

    test("filter an empty array", () => {
        const arr: number[] = [];
        const condition = (x: number) => x >= 3;
      
        const resultArr = functionalFilter(condition, arr);
        expect(resultArr).toEqual([]);
    });

    test("filter an array with string values", () => {
        const arr = ["one", "two", "three", "four", "five", "six"];
        const condition = (x: string) => x.length <= 3;
      
        const resultArr = functionalFilter(condition, arr);
        expect(resultArr).toEqual(["one", "two", "six"]);
    });

    test("filter an array with index parameter", () => {
        const arr = ["one", "two", "three", "four", "five", "six"];
        const condition = (x: string, index: number) => index % 2 === 0
      
        const resultArr = functionalFilter(condition, arr);
        expect(resultArr).toEqual(["one", "three", "five"]);
    });
});