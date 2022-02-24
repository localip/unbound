/**
 * @name memoize
 * @description Gives you a function which caches its return value on the first run.
 * @param {function} func - The function to memoize
 * @return {function} Returns the function with a cacheable value
 */

module.exports = (func) => {
   let cache;

   return (...args) => {
      return cache ??= func.apply(null, args);
   };
};