'use strict';
import { numbers, students } from './data';
const reuslt = numbers.map(function (number) {
  return number;
});

console.log('영어 점수');
students.map((student) => student.name);

console.log('학생 이름');
students.map((student) => student.name);
