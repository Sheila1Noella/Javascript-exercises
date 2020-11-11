//This is assignment number 2 about Array
//Create this Array [1,1001,10,50,600,700]
let Array1 = [1,1001,10,50,600,700]
console.log(`the array I am using is ${Array1}`);
//print length yiyo array
console.log(` The lenght is ${Array1.length}`);
console.log('_____________________________');
//sorting iyi array by ascending order
console.log(`Ascending Order: ${Array1.sort()}`);
console.log('_____________________________');
//ongeramo ikintu kuriyi array ukoresheje method push
console.log(`I am adding something on ${Array1.push(10000)}th index in the array`);
console.log(`The new array is ${Array1}`);
console.log('_____________________________');
//reba nimba iyi array i contains 600
 if(Array1.includes(600,0)){
        console.log("After searching 600 from the Array");
        console.log("we got it");
        console.log('_____________________________');
    }
    else{
        console.log("After searching 900 from the Array");
        console.log("We didn't found it");
        console.log('_____________________________');
    }
//removing ikintu kiri kuri index ya 4
let removeditem = Array1.splice(4, 1)
console.log(Array1);
console.log('_____________________________');

//searching muriyi array nimba harimo 20 ukoresheje method bita find ukoresheje na foreach loop 
if (Array1.find(twenty => twenty == 20)) {
    Array1.forEach(element => console.log(element));
    console.log("20 found");
    console.log('_____________________________');
}
else{
    console.log("20 not found");
    console.log('_____________________________');
}

//printing data zose ziri muri array ukoresheje forloop

for (let index = 0; index < Array1.length; index++) {
    const element = Array1[index];
    console.log(`No:${index+1} is ${element}`);
}
 console.log("_________________________________");
