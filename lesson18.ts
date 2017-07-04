class Person18{
    name:string;
    constructor(name:string){
        this.name = name;
        console.log(this.name+" contructor.");
    }

    static talk(){
        console.log("This static method is talk.");
    }

    greet (){
        return "Hello, " + this.name;
    }

}

let p = new Person18("Quyet");
console.log(p.greet());
Person18.talk();
