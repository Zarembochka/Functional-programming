import { describe, expect, test } from "@jest/globals";
import { sumOfRandomNumbers } from "../../src/index";

describe("sum of randoms numbers utility", () => {
    test("the result should be truthy", () => {
        const sumRandomsNumbers = sumOfRandomNumbers(10);
        expect(sumRandomsNumbers).toBeTruthy();
    });
});
