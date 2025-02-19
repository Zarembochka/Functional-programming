//type for partial function
type PartialFunction = (...args: any[]) => any;

//partial function
//example: sum(1,2) => add1 = partial(sum, 1) => add1(2);
export function partial<T extends PartialFunction, A extends any[]>(func: T, ...funcArgs: A) {
    return function (...otherArgs: any[]) {
        return func(...funcArgs, ...otherArgs);
    };
}
