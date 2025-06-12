class Todo{
	input = null;
	button = null;
	renderPlace = null;
	todoListArray = [];

	constructor({input, button, renderPlace}){
		this.input = document.querySelector(input);
		this.button = document.querySelector(button);
		this.renderPlace = document.querySelector(renderPlace);
		this.attachEvent();
	}

	addTodoData(){
		if (this.currentInputTodoData === '')
			return ;
		this.todoListArray.push(this.currentInputTodoData)
		console.log(this.todoListArray);
	}



	get currentInputTodoData(){
		return this.input.value;
	}
	set currentInputTodoData(value)
	{
		this.input.value = value;
	}

	handleClick(){
		console.log('hit');
		this.#render();
	}

	attachEvent(){
		this.button.addEventListener('click', (e) => {
			if (this.currentInputTodoData === '')
			return ;
			e.preventDefault();
			this.handleClick()
			this.addTodoData();
		})
	}

	createTag(){
		return `<li>${this.currentInputTodoData}</li>`
	}

	#render(){
		this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
	}
}


const todo = new Todo({
	input: '.todoInput',
	button:'.todoButton',
	renderPlace:'.todoList'
})
// class Todo{
	
// 	get getInputData(){
// 		return input;
// 	}

// 	set setInputData(data){
// 		input = data;
// 	}
// }

// let adf = document.querySelector('.todoButton');
// adf.addEventListener("click", () => { this.getInputData })
