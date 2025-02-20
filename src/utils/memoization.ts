type Func = (value: any) => any;

export function memoization(func: Func) {
    const cach = new Map();
    return function memoFunction(value: any) {
        if (cach.has(value)) {
            return cach.get(value);
        }
        const result = func(value);
        cach.set(value, result);
        return result;
    };
}
