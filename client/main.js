import { clearContents, getNode, insertLast } from "./lib/index.js";


const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');



function handleInput(){
  const firstValue = +first.value;
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;


  // result.textContent = '';
  clearContents(result)

  insertLast(result,total);
  
}

function handleClear(e){
  e.preventDefault();

  // first.value = ''
  // second.value = ''
  clearContents(first)
  clearContents(second)

  result.textContent = '-'
  first.focus()
}

first.addEventListener('input',handleInput);
second.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear);