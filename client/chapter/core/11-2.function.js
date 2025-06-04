/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  console.log(arguments);
  let sum = 0;

  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }

  //   for (const element of arguments) {
  //     sum += element;
  //   }
  //   console.log(sum);

  const arr = [...arguments];
  //   arr.forEach(function (value, index) {
  //     console.log('value : ' + value);
  //     console.log('index : ' + index);
  //   });

  arr.reduce(function (prev, current, index) {
    console.log('prev: ' + prev);
    console.log('curr: ' + current);
    console.log('index: ' + index);
  }, 0);
};

const result = calculateTotal(1000, 3000, 5000, 2300);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
