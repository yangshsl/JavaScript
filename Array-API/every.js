'use strict';

import { numbers, students, fruits, student } from './data';

console.log(
  '숫자가 모두 8이하 인가요?',
  numbers.every((number) => number <= 8)
);

console.log('학생들의 수학 점수가 모두 80점 이상인가요?', study.every(student) => student.mathmatics >= 80);
