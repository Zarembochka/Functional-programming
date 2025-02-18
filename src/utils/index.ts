type CallbackFunc = (previousValue: any, currentValue: any, index?: number, arr?: any[]) => any;

export function linearFold(arrToLinear: any[], func: CallbackFunc, initialValue?: any) {
    let startIndex = 0;
    if (!arrToLinear.length) {
        return initialValue;
    }
    if (initialValue === undefined) {
        initialValue = arrToLinear[0];
        startIndex = 1;
    }
    initialValue = func(initialValue, arrToLinear[startIndex], startIndex, arrToLinear);
    const newArr = arrToLinear.slice(startIndex + 1);
    return linearFold(newArr, func, initialValue);
}
