// 화살표 함수의 대표적인 사용 방법
// let func = (arg1, arg2, ...argN) => expression

// arg1, arg2, ...argN <- 인자
// 인자 값을 받는 함수인 func이 만들어 진다.arg1

// let func = function(arg1, arg2, ...argN) {
//     return expression
// } <- 본 함수 모습

//-------------------------------------------------------------

// let sum = (a, b) => a+b;
// alert (sum(1, 2)); //3

// let double = n => n* 2; // 인자값이 하나이면 괄호 생략 가능

//-------------------------------------------------------------

// let age = prompt('나이를 알려주세요', 18);
// let welcome = age < 18 ? () => alert('안녕') : () => alert('안녕하세요!');

// welcome();

//-------------------------------------------------------------

// let sum = (a, b) => {
//   let result = a + b;
//   return result;
// };

// alert(sum(1, 2));

//-------------------------------------------------------------

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
        else no();
}

ask(
    "동의하십니까?",
    ()=> { alert("동의하셨습니다."); },
    ()=>  { alert("취소 버튼을 누르셨습니다."); }
  );
