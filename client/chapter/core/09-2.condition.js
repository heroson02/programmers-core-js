// /* ------------------- */
// /* Logical Operators   */
// /* ------------------- */

// let a = 10;
// let b = '';
// let value = Boolean(b);

// // 논리곱(그리고) 연산자
// let AandB;

// // 논리합(또는) 연산자
// let AorB;

// // 부정 연산자
// let reverseValue;

// // 조건 처리

// // 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy;

// // 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy;

//로그인 구현하기
function LogIn() {
  let password;

  let basic = prompt('');
  if (!basic) return;
  basic = basic.replace(/\s*/g, ''); //모든 공백을 지워주는 정규표현식 : \s 공백을 * 모두 찾아서 '' 빈 문자열로 만들겠다.
  console.log(basic);
  if (basic.toLowerCase() == 'admin') {
    password = prompt('input PW');
    if (!password) return;
    password = password.replace(/\s*/g, ''); //모든 공백을 지워주는 정규표현식 : \s 공백을 * 모두 찾아서 '' 빈 문자열로 만들겠다.
    if (password.toLowerCase() == 'themaster') {
      alert('환영합니다!');
    } else if (!password) {
      alert('취소되었습니다.');
    } else {
      alert('인증에 실패하였습니다.');
    }
  }
  //password.replace(/\s*/g, '') == ''
}
