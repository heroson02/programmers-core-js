/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

let navTag = document.querySelector('nav');
let navTagLi = document.querySelector('nav  .about');
let dataName = navTag.querySelector('li[data-name="contact"]');

const allIn = navTag.querySelectorAll('li');
const child = navTag.children;

function getNode(node){
	return document.querySelector(node);
}

function _getNode(target, from = document)
{
	// if (from != document)
	if (from.nodeType != 9)
		return document.querySelector(`${from} ${target}`);
}
