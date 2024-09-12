'use strict';

import { numbers, students, fruits } from './data';
console.log('과일 중에 배가 있나요?');
fruits.some((fruits, index) => {
  console.log('index:', index, 'fruits', fruits);
  return fruits === '배';
});

console.log(`숫자에 7이상인 숫자가 있나요?`);
numbers.some((number) => (number) => 7);

console.log(`영어 점수가 50미만은 학생이 있나요? `);
numbers.some((student) => (student) => 7);
