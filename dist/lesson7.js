"use strict";
var isDone = true;
console.log(isDone);
var decimal = 10;
console.log(decimal);
var color = "000000";
console.log(color);
var fullName = "Do Kien Quyet";
var age = 23;
var sentence = "\n    hello! I am " + fullName + ". Age is " + (age + 2) + ".\n";
console.log(sentence);
//let list: number[] = [1, 2, 3];
var list = [3, 4, 5];
for (var i = 0; i < 3; i++)
    console.log(list[i]);
var x;
x = ["Nhung", 22, true];
for (var i = 0; i < 3; i++)
    console.log(x[i]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var red = Color.Red;
console.log(red);
//# sourceMappingURL=lesson7.js.map