function insertBefore(node, text){
	if (isString(node)) node = getNode(node);
	node.insertAdjacementHTML('beforebegin', text)
}