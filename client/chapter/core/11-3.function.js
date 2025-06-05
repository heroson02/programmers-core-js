/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//rest parameter
let calcAllMoney = (...rest) => {
  let total = 0;

  rest.forEach((element) => {
    total += element;
  });
  return total;
};

//calcAllMoney와 같은 기능을 가진다.
let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

console.log(calcAllMoney(1000, 3000, 5000, 2500));

// 화살표 함수와 this

const user = {
  name: '손영웅',
  total: 0,
  grades: [50, 60, 70],
  totalGrades() {
    console.log(this);
    this.grades.forEach(function (g) {
      this.total += g;
    });
    console.log(this.total);
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (n, square) => {
  let result = 1;
  for (let i = 0; i < square; i++) {
    result *= n;
  }
  return result;
};

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) result += text;
  console.log(result);
};

let _repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

// repeat('hello~', 3);
_repeat('hell!!', 3);
