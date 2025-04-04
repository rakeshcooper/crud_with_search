class Crud{fgfg
    dataArray = []
    count = 0
    val
    
    constructor(){
       this.todoInput = document.querySelector("#todoInput") 
       this.addBtn = document.querySelector(".addBtn")
       this.todoContainer = document.querySelector(".todoContainer")
    }

    createCrud(){
      this.addBtn.addEventListener("click",() => {
        this.dataArray.push(this.todoInput.value)
        this.todoContainer.innerHTML += `<li class="todo"><span class="todoValue"><span>${this.todoInput.value}<span><button class="editBtn">Edit</button></span><span><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`
        this.todo = document.querySelector(".todo")
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

