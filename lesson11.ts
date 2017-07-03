let displaycolor = function(...colorName:string[]){
    console.log(colorName);
    /**for(var color in colorName){
        console.log(colorName[color]);
    }
    **/
}
displaycolor("RED");
displaycolor("RED","GREEN");
displaycolor("RED","GREEN","BLUE");