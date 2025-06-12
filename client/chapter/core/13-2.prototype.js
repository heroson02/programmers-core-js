class Animal{
	legs = 4;
	tail = true;

	constructor(name){ //생성자는 최초 1회만 실행됨.
		this.name = name;
		this.stomach = [];
	}

	get eat(){
		return this.stomach;
	}

	set eat(food){
		this.stomach.push(food);
	}
}
