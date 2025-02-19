type Func = (...args: any[]) => any;

export function functionalMap(func: Func, arrToMap: any[]) {
    const result = [];
    for (let i = 0; i < arrToMap.length; i += 1) {
        const newValue = func(arrToMap[i]);
        result[i] = newValue;
    }
    return result;
}
