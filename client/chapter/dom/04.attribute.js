function getNode(node){
	return document.querySelector(node);
}

const about = getNode('.about');

let ha = about.hasAttribute('class');
let ga = about.getAttribute('class');
about.setAttribute('id', 'about');
about.setAttribute('data-name', 'hello');
about.setAttribute('data-name', 'bye');
about.removeAttribute('class');

for (const element of about.attributes) {
	console.log(element);
}

function getAttr(selector, target){
	let node = getNode(selector);
	node.getAttribute(target);
	return node;
}

function setAttr(selector, target, value = '')
{
	let node = getNode(selector);
	node.setAttribute(target, value);
	if (value === '')
		node.removeAttribute(target);
	return node;
}



function attr(selector, target, value){
	if (isUndefined(value))
		return getAttr(selector, target)
	setAttr(selector, target);

	// 삼항 연산자 ver
	// !value ? getAttr(selector, target) : setAttr(selector, target);

}
// Arrow Function ver
let _attr = (selector, target, value) => {
	if (isUndefined(value))
		return getAttr(selector, target)
	setAttr(selector, target);
}