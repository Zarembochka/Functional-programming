import { functionalFilter } from "./filter";
import { linearFold } from "./linearFold";

function evenNumberFilter(value: number, index: number): boolean {
    if (index % 2 === 0) {
        return true;
    }
    return false;
}

const sum = (a: number, b: number) => a + b;

export function averageOfEvenNumber(arr: number[]): number | undefined {
    //get the filtered array
    const filteredArray = functionalFilter(evenNumberFilter, arr);

    //get the length of the filtered array
    const length = filteredArray.length;

    if (length) {
        //get the sum of the filtered array values
        const sumFilteredValues = linearFold(filteredArray, sum);
        //return the average sum of the filtered values
        return sumFilteredValues / length;
    }

    //filtered array is empty
    return undefined;
}
