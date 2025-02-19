import { linearFold } from "./linearFold";
import { linearUnfold } from "./linearUnfold";

const random = (): number => Math.floor(Math.random() * 100) + 1;

const generator = (i: number): [number, number] => [random(), i - 1];

const sum = (a: number, b: number) => a + b;

export function sumOfRandomNumbers(count: number): number {
    //generate the array with 10 random numbers
    const randomArray = linearUnfold(generator, count + 1);

    //get the sum of random array
    const result = linearFold(randomArray, sum);

    //result
    return result;
}
