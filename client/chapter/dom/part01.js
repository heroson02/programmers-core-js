const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]


/* 
1. navigation을 선택 후 이벤트 위임을 걸어주세요.
    - addEventListener

2. li 요소만을 선택해 주세요.
    - element.closest

3. 선택한 대상의 data-index값을 가져와 주세요.
    - element.dataset

4. 선택한 대상의 is-active 클래스를 넣어 주세요.
    - classList.add

5. 선택한 대상을 제외한 나머지 요소들에게 is-active 클래스를 제거해 주세요.


6. visual image의 src를 바꿔주세요. 
*/


const navigation = getNode('.navigation');
const visual = getNode('.visual img');

function handleClick(e){
  e.preventDefault();
  const target = e.target.closest('li');

  // li를 못찾으면 실행  x 
  if(!target) return;

  
  const list = [...navigation.children];
  

  // console.log( target.getAttribute('data-index') );
  // console.log( attr('data-index',target) );
  const index = target.dataset.index;


  // setAttribute('src','...')
  visual.src = `./assets/part01/visual${index}.jpg`;
  

  
  // target을 제외한 나머지 li들에게 is-active 클래스 제거 
  // 나머지 = 전체
  list.forEach(li => li.classList.remove('is-active'));

  target.classList.add('is-active');
  
  

  
}



navigation.addEventListener('click',handleClick)