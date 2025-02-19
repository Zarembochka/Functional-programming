type Func = (...args: any[]) => any;

export function functionalFilter(func: Func, arrToMap: any[]) {
    const result = [];
    for (let i = 0; i < arrToMap.length; i += 1) {
        const newValue = func(arrToMap[i]);
        if (newValue) {
            result.push(arrToMap[i]);
        }
    }
    return result;
}
