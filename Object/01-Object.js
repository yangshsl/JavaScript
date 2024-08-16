//📍 객체
//   let user = new Object(); // '객체 생성자' 문법
//   let user = {}; // '객체 리터럴' 문법

//📍리터럴과 프로퍼티
// let user = { name: 'John', age: 30 };

// alert(user.name);
// alert(user.age);

// user.isAdmin = true;

// delete user.age;

// let user = {
//   name: 'John',
//   age: 30,
//   'like birds': true,
// };

// const user = {
//   name: 'John',
// };

// user.name = 'Pete';

// alert(user.name);

// let user = {};

//set
// user['likes birds'] = true;

// get
// alert(user['likes birds']);

// delete
// delete user['likes birds'];

// let key = 'likes birds';

// user["likes birds"] = true
// user[key] = true;

// let user = {
//   name: 'John',
//   age: 30,
// };

// let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');
// alert(user[key]);

// let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');
// let bag = {
//   [fruit]: 5,
// };

// alert(bag.apple);

//📍 프로퍼티 이름의 제약사항
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

//📍in연산자로 프로퍼티 존재 여부 확인
// let user = {};
// alert(user.noSuchProperty === undefined);

// let user = { name: 'John', age: 30 };

// alert('age' in user);
// alert('balba' in user);

// let user = { age: 30 };
// let key = 'age';
// alert(key in user);

// let obj = {
//   test: undefined,
// };

// alert(obj.test);
// alert('test' in obj);

// 📍 for..in 반복문
// for(key in object);
// let user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   //키
//   alert(key);
//   alert(user[key]);
// }

// 🤓 객체야 안녕?
// let user = {};
// (user.name = 'John'), (user.surname = 'Smith'), (user.name = 'Pete');
// delete user.name;

// 🤓 객체가 비어있는지 확인하기
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// 🤓 프로퍼티 합계 구하기
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// 프로퍼티 값 두배로 부풀리기
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function mukltiplyNumeric(obj) {
//   for (let key in obj) {
//     if(typeof obj[key] == 'number')
//     {object *= 2;}
//   }
// }

//📍참조에 의한 객체 복사
// let message = 'Hello';
// let phrase = message;

// let user = {
//   name: 'John',
// };

// let admin = user;

// admin.user = 'Pete';

// let user = {
//   name: 'John',
//   age: 30,
// };
// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// clone.name = 'Pete';

// 📍 this
// let user = {
//   name: 'John',
//   age: 30,
// };

// user.sayHi = function () {
//   alert('안녕하세요!');
// };

// user.sayHi();

// user = {
//   sayHi: function () {
//     alert('Hello');
//   },
// };

// user = {
//   sayHi() {
//     alert('Hello');
//   },
// };

// let user = {
//   name: 'John',
//   age: 30,

//   sayHi() {
//     alert(this.name);
//   },
// };

// function sayHi() {
//   alert(this.name);
// }

// let user = { name: 'John' };
// let admin = { name: 'Admin' };

// function sayHi() {
//   alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f()=sayHi;
// admin.f() = sayHi;

// function makeUser() {
//   return {
//     name: 'John',
//     ref: this,
//   };
// }

// let user = makeUser();

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('첫 번째 값:', 0);
//     this.b = +prompt('두 번째 값:', 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
