//type for currying function
type CurryFunction<T extends any[], R> = T extends [infer A, ...infer Rest]
    ? (arg: A) => CurryFunction<Rest, R>
    : R;

//currying function
//example: sum(1,2) = sum(1)(2);
export const carrying = <T extends any[], R>(func: (...args: T) => R): CurryFunction<T, R> => {
    return function curried(...args: any[]): any {
        if (args.length >= func.length) {
            return func(...(args as T));
        }

        return function (...otherArgs: any[]) {
            return curried(...([...args, ...otherArgs] as any[]));
        };
    } as CurryFunction<T, R>;
};
