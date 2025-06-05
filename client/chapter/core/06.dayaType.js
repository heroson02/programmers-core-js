/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);
// 2. 값이 할당되지 않은 상태
let unde = undefined;
console.log(typeof unde);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let text = 'Hi';
console.log(typeof text);
// 4. 정수, 부동 소수점 숫자(길이 제약)
let num = 5;
console.log(typeof num);
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let test = 53n;
console.log(typeof test);
// 6. 참(true, yes) 또는 거짓(false, no)
let bool = true;
console.log(typeof bool);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let ob = { hello: 'hi' };
console.log(ob);
// 8. 고유한 식별자(unique identifier)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const _obj = {
  '': 5,
};

// Array

// function

function a() {
  console.log('a함수가 실행됐습니다.');
}

// this : 나를 호출한 대상
const obj = {
  name: 'tiger',
  age: 30,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this);
  },
};
