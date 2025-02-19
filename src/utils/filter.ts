type Func = (value: any, index: number) => any;

export function functionalFilter(func: Func, arrToMap: any[]) {
    const result = [];
    for (let i = 0; i < arrToMap.length; i += 1) {
        const newValue = func(arrToMap[i], i);
        if (newValue) {
            result.push(arrToMap[i]);
        }
    }
    return result;
}
