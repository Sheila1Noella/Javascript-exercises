// let iAmGlobal = 'someValues'
// if(true)
// {
//     var iamLocal = 'someMoreValues'
//     iAmGlobal = 'superman'
//     console.log(iAmGlobal);
//     console.log(iamLocal);
// }
// console.log(iamLocal);
// console.log(iAmGlobal);
let king = 'John'
if(true)
{
    let king = 'Sam'
    if(true)
    {
        //let king = 'Ram'
        console.log(king);
    }
}
if(true)
{
    console.log("I am second part " + king);
}