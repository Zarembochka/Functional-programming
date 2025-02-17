import {describe, expect, test} from '@jest/globals';
import { carrying } from '../../src/utils/index';

describe('currying utility', () => {
  test('currying a function with 2 arguments', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = carrying(add);
    expect(curriedAdd(1)(2)).toBe(3);
  });

  test('currying a function with 3 arguments', () => {
    const multiple = (a: number, b: number, c:number) => a * b * c;
    const curriedMultiple = carrying(multiple);
    expect(curriedMultiple(2)(4)(8)).toBe(64);
  });

  test('currying a function with string arguments', () => {
    const concat = (a: string, b: string) => a.concat(b);
    const curriedConcat = carrying(concat);
    expect(curriedConcat("Hello, ")("world!")).toBe("Hello, world!");
  });
});
