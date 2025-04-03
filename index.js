class Test{
    bg = document.querySelector(".bg")
    btn = document.querySelector(".btn")
    

    constructor(){
        this.bg.style.backgroundColor = "green"
        this.btn.addEventListener("click",() => {
        this.bg.classList.toggle("newColor")})
        console.log("working");
    }

    testFunction(){
        
       
        
    }
}

let obj = new Test()
obj.testFunction()

