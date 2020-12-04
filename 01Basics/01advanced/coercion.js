//Coercion
console.log('5' - 4);
const giveType = typeof true
console.log(giveType);

const adder = true + 3
console.log(adder);
console.log('_________________________________');
const loginDetails = []
//login for getting details from DB
const loginID = loginDetails[0]
if (loginDetails) 
{
    console.log('Allow user to login');    
}
else{
    console.log('Auth failed');
}