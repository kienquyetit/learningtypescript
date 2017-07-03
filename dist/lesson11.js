"use strict";
var displaycolor = function () {
    var colorName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colorName[_i] = arguments[_i];
    }
    console.log(colorName);
    /**for(var color in colorName){
        console.log(colorName[color]);
    }
    **/
};
displaycolor("RED");
displaycolor("RED", "GREEN");
displaycolor("RED", "GREEN", "BLUE");
//# sourceMappingURL=lesson11.js.map