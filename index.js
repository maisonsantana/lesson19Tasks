"use strict";

// 1) Написати функцію струлку, яка приймає безліч аргументів і повертає їх добуток.

const multiNum = (initial = 0, ...nums) =>
  nums.reduce((result, number) => result * number, initial);
console.log(multiNum(10, 5));

// -----------------------

// 2) Є масив чисел, треба написати функцію, яка повертає масив з двох елементів, які є мінімальним і максимальним значенням джерельного масиву.

// 1 option
const minAndMaxNum1 = (...arr1) => [Math.min(...arr1), Math.max(...arr1)];
console.log(minAndMaxNum1(5, 7, 3, 8, 4, 8, 240));

// 2 option
const searchMin = (...arr2) => {
  return Math.min(...arr2);
};
const searchMax = (...arr2) => {
  return Math.max(...arr2);
};
const minAndMax = (...arr2) => {
  return [searchMin(...arr2), searchMax(...arr2)];
};
console.log(minAndMax(5, 13, 6, 6, 24, 565, 15));
