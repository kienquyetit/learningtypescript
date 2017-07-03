let isDone: boolean = true;
console.log(isDone);

let decimal: number = 10;
console.log(decimal);

let color: string = "000000"
console.log(color);

let fullName: string = "Do Kien Quyet";
let age: number = 23;
let sentence = `
    hello! I am ${fullName}. Age is ${age+2 }.
`
console.log(sentence);

//let list: number[] = [1, 2, 3];
let list: Array<number> = [3, 4, 5];
for(var i=0; i<3; i++)
    console.log(list[i]);

let x:[string, number, boolean];
x = ["Nhung", 22, true];
for(var i=0; i<3; i++)
    console.log(x[i]);

enum Color{Red, Green, Blue}
let red: Color = Color.Red;
console.log(red);