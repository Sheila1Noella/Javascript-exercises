// let name = 'John'
let sayHello = function (name) {
    console.log("greeting message for user");
    console.log(`Hey ${name}`);
}
// console.log(name);
sayHello('John')

let fullNameMaker = function(firstname, lastname, age){
    console.log(`my name is ${firstname} ${lastname}`);
    console.log(`and I am ${age} years old`);
}
fullNameMaker('Sheila', 'Noella',56)

let summ = function(one, two)
{
    let sumation = one + two
    return sumation
}
let result = summ(19,10)
console.log(result);
console.log(summ(19,10));