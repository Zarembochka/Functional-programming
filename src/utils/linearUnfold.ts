type CallbackFunc = (currentState: any) => [any, any];

export function linearUnfold(func: CallbackFunc, initialValue: any) {
    const result = [];
    let [nextValue, nextState] = func(initialValue);
    while (nextState) {
        result.push(nextValue);
        [nextValue, nextState] = func(nextState);
    }
    return result;
}
