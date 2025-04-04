class Crud{
    dataArray = []
    count = 0
    
    constructor(){
       this.todoInput = document.querySelector("#todoInput") 
       this.addBtn = document.querySelector(".addBtn")
       this.todoContainer = document.querySelector(".todoContainer")
       this.elementTodo = `<li class="todo"><span class="todoValue">Test<span><span><button class="editBtn">Edit</button></span><span><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`;
    }

    createCrud(){
      this.addBtn.addEventListener("click",() => {
        this.dataArray.push(todoInput.value)
        // this.todoContainer.innerHTML = ""
        this.todoContainer.innerHTML += this.elementTodo
        this.todo = document.querySelector(".todo")
        this.todo.firstChild.style.backgroundColor = "red"
        this.todo.firstChild.textContent = todoInput.value;
        console.log(this.elementTodo);
        console.log(this.dataArray);
        
            
      })
      
      
    }

    updateCrud(){
        
    }

    deleteCrud(){

    }

    renderCrud(){

    }
}

obj = new Crud()
obj.createCrud()

