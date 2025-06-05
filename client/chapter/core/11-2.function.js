// /* ----------------------- */
// /* Functions → Expression  */
// /* ----------------------- */

// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// // console.log(resultX);
// // console.log(resultY);
// // console.log(resultZ);

// // 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function () {
//   console.log(arguments);
//   let sum = 0;

//   //   for (let i = 0; i < arguments.length; i++) {
//   //     sum += arguments[i];
//   //   }

//   //   for (const element of arguments) {
//   //     sum += element;
//   //   }
//   //   console.log(sum);

//   const arr = [...arguments];
//   //   arr.forEach(function (value, index) {
//   //     console.log('value : ' + value);
//   //     console.log('index : ' + index);
//   //   });

//   arr.reduce(function (prev, current, index) {
//     console.log('prev: ' + prev);
//     console.log('curr: ' + current);
//     console.log('index: ' + index);
//   }, 0);
// };

// const result = calculateTotal(1000, 3000, 5000, 2300);
// console.log(result);

// // 익명(이름이 없는) 함수 (표현)식
// let anonymousFunctionExpression;

// // 유명(이름을 가진) 함수 (표현)식
// let namedFunctionExpression;

// // 콜백 함수 (표현)식
// let callbackFunctionExpression;

// // 함수 선언문 vs. 함수 (표현)식

// // 즉시 실행 함수 (표현)식
// // Immediately Invoked Function Expression
// let IIFE;

function rem(pxValue, base = 16) {
  if (typeof pxValue == 'number') {
    return pxValue / base + 'rem';
  } else if (typeof pxValue == 'string') {
    pxValue = pxValue.replace('px', '');
    return Number(pxValue) / base + 'rem';
  }
}

// // console.assert(rem(20) === '1.25rem');
// // console.assert(rem('25px') === '1.5625rem');
// // console.assert(rem('30px', 10) === '3rem');

function setCss(tag, property, value) {
  const l = document.querySelector(tag);
  l.style[property] = value;
}

// setCss('.first', 'color', 'orange');
// setCss('.first', 'font-size', '50px');

/*
function getCss(tag, prop) {
  const l = document.querySelector(tag);
  return getComputedStyle(l)[prop];
}
*/
// getter function

function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(prop in document.body.style)) {
    throw new ReferenceError(
      'getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
    );
  }

  return getComputedStyle(node)[prop];
}

// const fontSize = getCss('.first', 'background-color');
// console.log(fontSize);

function css(node, prop, value) {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}
