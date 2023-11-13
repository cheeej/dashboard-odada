<<<<<<< HEAD
const isFunction = (value) => typeof value === "function";

export function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
=======
const isFunction = (value) => typeof value === 'function';

export function runIfFn(valueOrFn, ...args) {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
>>>>>>> 0036c0c078ba2445154adfb1bed43731653ebee5
}
