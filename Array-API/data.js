export const numbers = [1, 2, 3, 4, 5, 6, 7];

export class student {
  constructor(name, koreanLanguage, english, mathematics) {
    this.name = name;
    this.koreanLanguage = koreanLanguage;
    this.english = english;
    this.mathematics = mathematics;
  }
}

const student = new Student('홍길동', 95, 87, 75);
const student2 = new Student('고길동', 45, 47, 25);
const student3 = new Student('이길동', 55, 37, 55);
const student4 = new Student('양길동', 35, 47, 35);

export const students = [student, student2, student3, student4];

export const fruits = ['사과', '딸기', '배', '참외', '딸기', '수박'];
