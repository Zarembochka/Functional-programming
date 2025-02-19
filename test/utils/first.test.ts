import { describe, expect, test } from "@jest/globals";
import { functionalFirst } from "../../src/index";

describe("first utility", () => {
    test("returns the first element on number array", () => {
        const arr = [1, 2, 5, 7, 10];
        const callback = (a: number) => a > 5;
        const firstElement = functionalFirst(arr, callback);
        expect(firstElement).toBe(7);
    });

    test("returns undefined on number array", () => {
        const arr = [1, 2, 5, 7, 10];
        const callback = (a: number) => a > 10;
        const firstElement = functionalFirst(arr, callback);
        expect(firstElement).toBeUndefined();
    });

    test("works on string array", () => {
        const arr = ["one", "two", "three", "four"];
        const callback = (a: string) => a.includes("r");
        const firstElement = functionalFirst(arr, callback);
        expect(firstElement).toBe("three");
    });

    test("works on empty array", () => {
        const arr: string[] = [];
        const callback = (a: string) => a.includes("r");
        const firstElement = functionalFirst(arr, callback);
        expect(firstElement).toBeUndefined();
    });
});
