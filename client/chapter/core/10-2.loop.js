function calcJunukTime(hour, minute) {
  /* --------------- 제한 조건 설정 -------------------------------- */
  /* ---- 알고리즘 문제를 풀땐 따로 설정하지 않아도 괜찮지만 우리는 공부중이니까요^^ ------ */
  if (
    hour % 1 !== 0 ||
    minute % 1 !== 0 ||
    hour < 0 ||
    minute < 0 ||
    hour > 24 ||
    minute > 60
  ) {
    console.log('당신은 혹시 시간의 마법사인가요?');
  } else {
    let junukHour = hour;
    let junukMinute = minute;
    if ((hour >= 8) & (hour < 10)) {
      console.log('10:10');
    } else if ((hour >= 10) & (hour < 15)) {
      junukHour = hour + 1;
      junukMinute = minute + 20;
      calcTime(junukHour, junukMinute);
    } else if ((hour >= 15) & (hour < 23)) {
      junukMinute = minute + 45;
      calcTime(junukHour, junukMinute);
    } else {
      console.log('자라 🐢');
    }
  }
}
function calcTime(hour, minute) {
  if (minute >= 60) {
    hour += 1;
    minute -= 60;
  } else {
    hour += 1;
  }
  console.log(`${hour};${minute}`);
}
