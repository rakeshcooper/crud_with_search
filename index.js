class Crud{
    dataArray = []
    aArray = []
    findArray = []
    findNew
    type = true;
    newType = true;
    
    constructor(){
       this.todoInput = document.querySelector("#todoInput") 
       this.addBtn = document.querySelector(".addBtn")
       this.todoContainer = document.querySelector(".todoContainer")
       this.arrayName = document.querySelector(".name");
       this.search = document.querySelector(".search-bar")
       this.method = document.querySelector(".method")
    }

    createCrud(){
      this.addBtn.addEventListener("click",() => {
        this.dataArray.push(this.todoInput.value)
        this.todoContainer.innerHTML += `<li class="todo"><span class="todoValue">${this.todoInput.value}</span><span><button class="editBtn">Edit</button></span><span class="updatebox"><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`
        this.todo = document.querySelector(".todo")
        console.log(this.dataArray);
        this.todoInput.value = ""
        this.aArray = this.dataArray
        //this.searchCrud()  
      })
    }

    updateCrud(){
       this.todoContainer.addEventListener("click",(e) => {
            if(e.target.className == "editBtn"){
                e.target.style.display = "none"
                e.target.parentElement.nextSibling.style.display = "inline-block"

            } else if(e.target.className == "updateBtn"){
                e.target.parentElement.style.display = "none"
                this.currentValue = e.target.parentElement.previousSibling.previousSibling
                this.updatedValue = e.target.previousSibling.value
                this.index = this.dataArray.indexOf(this.currentValue.innerText)
                this.dataArray[this.index] = this.updatedValue
                this.currentValue.innerText = this.updatedValue
                e.target.parentElement.previousSibling.firstChild.style.display = "inline-block"  
               console.log(this.dataArray);
               this.aArray = this.dataArray
               console.log(this.aArray);  
            }    
       })  
    }

    deleteCrud(){
        this.todoContainer.addEventListener("click",(e) => {
            if(e.target.className == "deleteBtn"){
              this.currentValue = e.target.parentElement.parentElement.firstChild
              this.index = this.dataArray.indexOf(this.currentValue.innerText)
              this.dataArray.splice(this.index,1)
              this.currentValue.parentElement.remove()
              console.log(this.dataArray);
              this.aArray = this.dataArray    
            } 
       })
    }

    checkedCrud(){
      this.todoContainer.addEventListener("click",(e) => {
        this.currentValue = e.target.parentElement.parentElement.firstChild
            if(e.target.className == "doneBtn" && e.target.innerText == "done"){
                this.currentValue.style.textDecoration = "line-through"
                e.target.innerText = "undone"
            } else  if(e.target.className == "doneBtn" && e.target.innerText == "undone"){
                this.currentValue.style.textDecoration = "none"
                 e.target.innerText = "done"
            }
        console.log(e.target.className);
        
        } 
       )
    }

    searchCrud(){
        this.method.addEventListener("change", (e) =>{
        console.log(e.target.value);
        if(e.target.value == "regular"){
            this.newType = this.type
        } else if(e.target.value == "exact"){
            this.newType = !this.type        
        }
    })

    this.search.addEventListener("input",(e)=>{
            if(this.newType == true){    
                this.findArray = this.aArray.map((data) => {
                this.dat = data.toLowerCase()
                this.txtValue = this.dat.slice(0)
                    if (this.txtValue.indexOf(this.search.value) > -1 || data.indexOf(this.search.value) > -1 ){
                        console.log(this.dat);
                        return this.dat
                    }          
                })
            }  else if(this.newType == false) {
                        this.findNew = this.aArray.find((ele) => ele.toLowerCase() == this.search.value);                 
                        this.findArray = [this.findNew]   
            }
            this.filteredArray = this.findArray.filter((data) => {
                    return data !== undefined
                    })
                    console.log(this.filteredArray);
                    
                    console.log(this.filteredArray.length)
                    if(this.filteredArray.length == 0){
                            this.todoContainer.innerHTML = "not found"
                            console.log("test");
                            
                    } else if(this.filteredArray != []){
                        this.todoContainer.innerHTML = ""
                        if(e.target.value.length == 0) {
                                this.dataArray.forEach((element) => {
                                this.todoContainer.innerHTML += `<li class="todo"><span class="todoValue">${element}</span><span><button class="editBtn">Edit</button></span><span class="updatebox"><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`
                                console.log(element);
                                    
                            }) 
                        } else if(e.target.value.length > 0){
                            // console.log(e.target.value.length);
                            this.filteredArray.forEach((element) => {
                                this.todoContainer.innerHTML = `<li class="todo"><span class="todoValue">${element}</span><span><button class="editBtn">Edit</button></span><span class="updatebox"><input type="text"><button class="updateBtn">update</button></span><span><button class="deleteBtn">delete</button></span><span><button class="doneBtn">done</button></span></li>`
                            }
                        )
                        } 
                    }  
        })
    }
}

obj = new Crud()
obj.createCrud()
obj.updateCrud()
obj.deleteCrud()
obj.checkedCrud()
obj.searchCrud()

