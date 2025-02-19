type CallbackFunc = (previousValue: any, currentValue: any, index?: number, arr?: any[]) => any;

export function linearFold(arrToLinear: any[], func: CallbackFunc, initialValue?: any) {
    let startIndex = 0;
    if (arrToLinear.length === 0) {
        return initialValue;
    }
    if (initialValue === undefined) {
        initialValue = arrToLinear[0];
        startIndex = 1;
        if (arrToLinear.length === 1) {
            return initialValue;
        }
    }
    initialValue = func(initialValue, arrToLinear[startIndex], startIndex, arrToLinear);
    const newArr = arrToLinear.slice(startIndex + 1);
    return linearFold(newArr, func, initialValue);
}
