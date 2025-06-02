/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// function WatchingMovie() {
//   // 영화 봤니?
//   let didWatchMovie = confirm('너 진격의 거인 영화 봤어?');
//   let response;

//   // 영화 볼거니?
//   if (didWatchMovie) {
//     console.log('영화 볼 줄 아는구나');
//   } else {
//     let goingToWatchMovie = confirm('너 그 영화 볼거야?');
//     if (goingToWatchMovie) {
//       response = true;
//     } else {
//       response = false;
//     }
//   }
// }

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

confirm('너 티니핑 봤어?')
  ? console.log('누구랑 보러 갔어?')
  : confirm('나랑 같이 보러 갈래?')
    ? console.log('재밌겠다')
    : console.log('그래..');

// response = prompt('자바스크립트의 공식 이름은 무엇일까요?');

// console.log(response);

// if (response == 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript 입니다!');
// }

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
