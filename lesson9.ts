var employee = {
    id : 1,
    greet:  function(){
        setTimeout(() => console.log(1000), 1000);
    }
}
console.log(employee.greet());