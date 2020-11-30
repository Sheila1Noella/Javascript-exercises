//maps and for of loop

var object1 = {
    name: 'I am Sheila',
    age: 30,
    isActive: true
}
var object2 = {
    name: 'I am Noella',
    age: 25,
    isActive: true
}
var object3 = {
    name: 'I am AHISHAKIYE',
    age: 29,
    isActive: false
}
let users = new Map()
console.log(typeof users);
users.set('first', object1)
users.set('Second', object2)
users.set('Third', object3)
console.log(users);
console.log(users.size);
console.log("_______________________________");
console.log(users.get('Second'));
console.log("_________________________");
console.log(users.values());

//for of

for(const value of users.values()){
    console.log(value.name);
}
for(const [key, value] of users.entries())
{
    console.log(key + '='+ value.name);
    console.log("________________________");
}
users.forEach((value, key) => console.log(key + '='+ value.name))
//Array of arrays (multidimensional array)
var arrofarr = [['one','1'], ['two','2'], ['three','3']]
var newMap = new Map(arrofarr)
console.log(newMap);