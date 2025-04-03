class Test{
    myName
    myAge
    constructor(myName,myAge){
        this.myName = myName
        this.myAge = myAge
    }

    testFunction(myName,myAge){
        this.myName = myName
        this.myAge = myAge
    }

    displayMe(){
        console.log(this.myName+" "+this.myAge);
 
        
    }
}

let obj = new Test("cooper", 25)
obj.displayMe()
obj.testFunction("Rakesh", 28)

       console.log(this)
