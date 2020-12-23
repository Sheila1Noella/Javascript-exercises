// Return true if they are anagrams of one another
let string1 = 'Mary'
let string2 = 'Army'

let result = isAnagram(string1,string2);
console.log(result);
function isAnagram(string1,string2)
{
    let first = string1.toLowerCase();
    let second = string2.toLowerCase();
    first = first.split("").sort().join("");
    second = second.split("").sort().join("");
    return first===second;
    if(first===second){
        return true
    }
    else{
        return false
    }
}

// function that accepts an array of strings and return the longest string
let Arrays = "one,two,three,four";
let arr = Arrays.split(",").sort();
console.log(arr);
console.log();
let numarray = [1]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i].split("");
    // console.log(element.length);
    
    // console.log(numarray);
    let hhh = element.length
    let arra = numarray.push(hhh)  

    if (hhh == Math.max.apply(null, numarray)) {
        console.log(`${element}`)
    }
    else{
        console.log("no")
    }
}
let pos = numarray.indexOf()
console.log(`the longest string has ${Math.max.apply(null, numarray)} characters`);
console.log("_______________________________________________________________");
// function that takes a string and returns the character that is most commonly used in the string

let shee = "onetwothreefour"
let x = 1
let y = 0
let z
let ssp = shee.split("").sort().join("");
console.log(ssp)
for (let ssp1 = 0; ssp1 < ssp.length; ssp1++) {
    for (let ssp2 = ssp1; ssp2 < ssp.length; ssp2++) {
        if (ssp[ssp1] == ssp[ssp2]) 
            y++;
            if (x<y) {
                x=y;
                z = ssp[ssp1];
            } 
        }
        y = 0;
   
}
    console.log(`${z} is the most commonly used in ${shee}`);


console.log("_______________________________________________________________");
// recursion function of factorial number

let facto = function(myfact){
    let f = 1
    if (myfact == 0) {

        return `factorial of ${myfact} does not exist`
    }
    else{
    for (let i = myfact; i > 1; i--) {
        f =f*i
    }
    return f
}
}
console.log(facto(5));
// lagest string in array



let array= ['noella','sheila','ahishakiye'];
console.log(longestString(array));
function longestString(arr){
    let longest = '';
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;

}

