const myTodos = ['Javascript learning', 'Work on ineza', 'pushing on github']
console.log(myTodos.indexOf('Javascript learning'));
const newTodos = [{
    title: "Javascript learning",
    isDone: false,
},
{
    title: 'Work on ineza',
    isDone: false 
},
{
    title: 'pushing on github',
    isDone: true,
}]
const index = newTodos.findIndex(function(todos, index){
    console.log(todos);
    return todos.title === 'pushing on github'
})
console.log(index);
console.log("___________________________________");
const finding = function(mytdo, title) {
    const index = mytdo.findIndex(function(todd, index) {
        return todd.title.toLowerCase() === title.toLowerCase()        
    })
    return mytdo[index]
    
}
let printMe = finding(newTodos, "pushing on github")
           con         sole.log(printMe);
console.log("___________________________________");
//Method 2
const findTodo = function(myTodos, title) {
    const titleRetuned = myTodos.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleRetuned
}
let printeMe = findTodo(newTodos, "Work on ineza")
console.log(printeMe);