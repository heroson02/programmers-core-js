import { diceAnimation } from './lib/animation/cube.js';
import {
  clearContents,
  getNode,
  getRandom,
  insertLast,
  copy,
  isNumber,
  isUndefined,
  attr,
} from './lib/index.js';

import {} from './lib/index.js';

const [diceRoll, record, initialize] = document.querySelectorAll(
  '.buttonGroup button'
);
const recordListWrapper = getNode('.recordListWrapper');


function handleRollingDice(){
	let isClicked = false;
	let id;
	return (() => {
		if (!isClicked)
		{
			id = setInterval(diceAnimation, 100);
			console.log('on');
			record.disabled = true;
			initialize.disabled = true;
		}
		else
		{
			clearInterval(id);
			console.log('off');
			record.disabled = false;
			initialize.disabled = false;
		}
		isClicked = !isClicked;
	})
}

let recordList = document.querySelector('tbody');
console.log(recordList);

let count = 0;
let total = 0;

function handleRecord(){
	const diceNumber =  +attr('#cube', 'dice');
	recordListWrapper.hidden = false;
	console.log(diceNumber);
	const template = `<tr>
            <td>${++count}</td>
            <td>${diceNumber}</td>
            <td>${total += diceNumber}</td>
          </tr>`;
	insertLast('tbody', template);
}

function handleReset(){

}


diceRoll.addEventListener('click', handleRollingDice());
record.addEventListener('click', handleRecord);