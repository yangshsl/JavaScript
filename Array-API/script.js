'use strict';

// import { numbers, students, fruits, student } from './data';

// numbers.reduce(acc, cur, idx, src) => {
//   console.log('acc: ', acc, "cur", cur)
// },0)

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var res = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(res);

var plusExecutor = (acc, cur) => {
  return acc + cur;
};

/// 이거 중요!!!
console.log('hi');
var res2 = nums.reduce(plusExecutor);
console.log(res2);
