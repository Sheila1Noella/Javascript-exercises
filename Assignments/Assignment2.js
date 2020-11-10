//This is assignment number 2 about Array
let Array1 = [1,1001,10,50,600,700]
if(Array1.includes(600,0)){
    console.log("got it");
}
else{
    console.log("not in array");
}
let i;


// for(i=0;i>10;i++){
//     console.log("ndimo kuhagera");
//     console.log("number"+Array1[i]);
// }
console.log(`the array I am using is ${Array1}`);
//print length yiyo array
console.log(` The lenght is ${Array1.length}`);
console.log('_____________________________');
//sorting iyi array by ascending order

//ongeramo ikintu kuriyi array ukoresheje method push
// console.log(Array1.push('myname'));
console.log(Array1);
console.log('_____________________________');
//reba nimba iyi array i contains 600
for (let i = 0; i < Array1.length; i++) {
    if(Array1.includes(600,0)){
        console.log("we got it");
    }
    const element = Array1[i];
 if (Array[i] == 600) {
    console.log("600 irimo");
}
else{
    console.log("600 ntayirimo");
}   
}

//removing ikintu kiri kuri index ya 4
// let pos = Array1.indexOf('1')
// console.log(pos);
// let removeditem = Array1.splice(pos, 3)
// console.log(removeditem);
// console.log('_____________________________');
// console.log(Array1.pop(Array1[4]));

let index = Array1.indexOf(600);
if(index>-1)
{
     Array1.splice(index,1);
}
//searching muriyi array nimba harimo 20 ukoresheje method bita find ukoresheje na foreach loop 

Array1.forEach(element => console.log(element));
let kabonetse = Array1.find(elements => 20);
console.log(`karabonetse noneho ${kabonetse}`);

//printing data zose ziri muri array ukoresheje forloop
for (let index = 0; index < Array1.length; index++) {
    const element = Array1[index];
    console.log(`No:${index+1} is ${element}`);
    console.log("+++++++++++++++++");
    
    
    
    
}

// let sear = Array1.find(element => element == 5)
//     console.log(`fff ${sear}f`)
console.log(Array1);
console.log("+$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


