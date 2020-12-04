// const sayHello = function(name){
//     return "Hey there, "+name+" !"
// }
// console.log(sayHello("Sheila"));

//using arrow functions
const sayHello = (name) => `Hey there, ${name} !`
console.log(sayHello("Sheila"));

const tasks = [{
    title: "Do this first",
    isDone: true
},{
    title: 'Do this second',
    isDone: true
},{
    title: 'Do this third',
    isDone: false
}]
const tasksDone = tasks.filter((taski) => taski.isDone === true)
console.log(tasksDone);
console.log("________________________");

const cameras = {
    price: 600,
    weight: 2000,
    //Arrow function can't work in the objects
    myDes: function() {
        return `this canon camera is of ${this.price}$`
        
    }
}
console.log(cameras.myDes());