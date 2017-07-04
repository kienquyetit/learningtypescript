"use strict";
var Person18 = (function () {
    function Person18(name) {
        this.name = name;
        console.log(this.name + " contructor.");
    }
    Person18.talk = function () {
        console.log("This static method is talk.");
    };
    Person18.prototype.greet = function () {
        return "Hello, " + this.name;
    };
    return Person18;
}());
var p = new Person18("Quyet");
console.log(p.greet());
Person18.talk();
//# sourceMappingURL=lesson18.js.map