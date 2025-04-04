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
        this.todoContainer.innerHTML += `<li class="todo"><span class="todoValue"><span>${this.todoInput.value}<span><button class="editBtn">Edit</button></span><span class="updatebox"><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`
        this.todo = document.querySelector(".todo")
        console.log(this.dataArray);
        this.updateCrud()
      })
    }

    updateCrud(){
       this.todoContainer.addEventListener("click",(e) => {
            if(e.target.className == "editBtn"){
                e.target.style.display = "none"
                e.target.parentElement.nextSibling.style.display = "inline-block"

            } else if(e.target.className == "updateBtn"){
                e.target.parentElement.style.display = "none"
                console.log(e.target.previousSibling.value);
                
                e.target.parentElement.previousSibling.firstChild.style.display = "inline-block"
            }
            
       }) 
        
    }

    deleteCrud(){

    }

    renderCrud(){

    }
}

obj = new Crud()
obj.createCrud()

