//to check the username and password
let Uemail = 'Shei123'
let password = '123456789'
console.log(password.length);
console.log(Uemail.toUpperCase());
console.log(Uemail.trim());
let userCheker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }
  else{
              return false
  }
    
}
console.log(userCheker(Uemail));
let passchecker = function(mypass)
{
    if ((mypass.includes(123)) && (mypass.length > 8)) {
        return true        
    }
    return false
}
console.log(passchecker(password));