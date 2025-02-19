type FuncCallback = (value: any) => boolean;

export function functionalFirst<T>(arr: T[], func: FuncCallback): T | undefined {
    for (let i = 0; i < arr.length; i += 1) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
