/* ---------------- */
/* Switch           */
/* ---------------- */

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime = DAWN;

// switch (thisTime) {
//   case MORNING:
//     console.log('뉴스 기사 글을 읽는다.');
//     break;
//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다');
//     break;
//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;
//   case LATE_NIGHT:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;
//   case DAWN:
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;

//   default:
//     break;
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

function getDay() {
  //   let number = prompt('Input Number 0 ~ 6');
  //   number = Number(number);
  //   if (number < 0 || number > 6) return;
  let number = getRandom(7);
  switch (number) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';

    default:
      break;
  }
}

function weekend() {
  let day = getDay();
  if (day == '토' || day == '일')
    console.log('오늘은 ' + day + '요일입니다. 그러므로 주말입니다.');
  else console.log('오늘은 ' + `${day}요일입니다. 그러므로 평일입니다. `);
}

function getRandom(maxRange) {
  return Math.floor(Math.random() * maxRange);
}
