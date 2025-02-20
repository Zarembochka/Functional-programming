type Func = (...args: any[]) => any;

export function lazy(func: Func) {
    return function lazyFunction(...funcArgs: any[]) {
        return func(...funcArgs);
    };
}
