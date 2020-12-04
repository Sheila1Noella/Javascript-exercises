const days =['Mon','Tue','Wed','Thr','Fri','Sat','sun']
console.log(days.length);
for(let index = 0; index < days.length; index++) {
    // const element = days[index]; 
    let element =days[index];
    console.log(element);
}
console.log('--------------------------------------------');
for(let ind = days.length - 1; ind >=0; ind--)
{
    const jours = days[ind];
    console.log(jours);
}
console.log('--------------------------------------------');
const myTodos = []
myTodos.push('Work on bugs')
myTodos.push('work on ineza simulation')
myTodos.push('Have lunch')
myTodos.push('Edit a video')
myTodos.push('Learn Javascript')
myTodos.forEach(function(todo, i){
    console.log(`Your task no.${i+1} is: ${todo}`);
})
console.log('________________________________________')
for(let num = myTodos.length-1; num >=0; num--)
{
    let tasks = myTodos[num];
    console.log(`your tasks no.${num+1} is ${tasks}`);
}
