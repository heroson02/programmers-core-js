/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> string
const YEAR = 2025;

console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined
let ud;

console.log(String(ud));
//null
let nu = null;
console.log(typeof (nu + ''));
// boolean
let bo = null;
console.log(Boolean(bo));
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));
// null
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(+money);
// boolean
let isActive = false;
console.log(isActive * 1);
// string
let data = '1958';

console.log(typeof Number(data));
console.log(typeof +data);
// numeric string

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.clear();

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('NaN'));
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean(-1));
console.log(!!{});
console.log(!!(() => {}));
