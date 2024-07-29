'use strict';

// 📍 기본 연산자와 수학
// 📍 단항, 이항, 피연산자
// 단항 연산자
// let x = 1;
// x = -x;
// alert(x);

// 이항 연산자
// let x = 1, y = 3;
// alert(y-3); //

// 📍나머지 연산자 %
// alert(5 % 2);
// alert(8 % 3);

// 거듭제곱 연산자 **
// alert(2 ** 2);
// alert(2 ** 4);
// alert(2 ** 4);

// alert(4**(1/2));
// alert(8**(1/3));

// 📍이항 연산자 '+'와 문자열 연결
// let s = 'my' + 'string';
// alert(s);

// alert('1' + 2);
// alert(2 + '1');
// alert(2 + 2 + '1');

// alert(6 - '2');
// alert('6' / '2');

// let x = 1;
// alert(+x);

// let y = -2;
// alert(+y);

// alert(+true);
// alert(+'');

// let apples = '2';
// let oranges = '3';
// console.log(apples + oranges);

// console.log(+apples + +oranges);

// 📍 할당 연산자
// let x = 2 * 2 + 1;
// console.log(x);

// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);

// console.log(a);
// console.log(c);

// let a, b, c;
// a = b = c = 2 + 2;

// let c = 2+ 2;
// b = c;
// a = c;

// 📍 복합 할당 연산자
// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;
// n *= 3 + 5;
// console.log(n);

// 📍 증가 감소 연산자
// let counter = 2;
// counter++;
// console.log(counter);

// let counter = 2;
// counter--;
// console.log(counter);

// let counter = 1;
// let a = ++counter;
// console.log(a);

// let counter = 1;
// let a = counter++;
// console.log(a);

// 📍 쉼표 연산자
// let a = (1 + 2, 3 + 4);
// console.log(a);

// 👩🏻‍💻 과제
let a = prompt('덧셈할 첫 번째 숫자를 입력해주세요.', '1');
let b = prompt('덧셈할 두 번째 숫자를 입력해주세요.', '2');

alert(a + b);
