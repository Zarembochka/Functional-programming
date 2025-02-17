export function partial<T extends (...args: any[]) => any>(func: T, ...funcArgs: Parameters<T>) {
    return function (...otherArgs: Parameters<T>): ReturnType<T> {
        return func(...funcArgs, ...otherArgs);
    };
}
