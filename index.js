class Crud{
    dataArray = []
    count = 0
    
    constructor(){
       this.todoInput = document.querySelector("#todoInput") 
       this.addBtn = document.querySelector(".addBtn")
       this.todoContainer = document.querySelector(".todoContainer")
       this.elementTodo = `<li><span class="todoValue">Test<span><span><button class="editBtn">Edit</button></span><span><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`;
    }

    createCrud(){
      this.addBtn.addEventListener("click",() => {
        this.dataArray.push(todoInput.value)
        this.todoContainer.innerHTML = ""
        this.dataArray.forEach((data) =>{
            this.todoContainer.innerHTML += this.elementTodo
            console.log(this.elementTodo);
            
        })
        
            
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