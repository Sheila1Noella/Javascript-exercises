// && - AND operator
// || - OR operation
let isVerified = false
let isloggedin = true
let haspaymenttoken =  true
let isguest = true
if(isVerified && isloggedin && haspaymenttoken){
    console.log("Greeting messagae to user")
    console.log("grant access to paid course")
}

else if( isVerified || isguest){
    console.log("Allow free previews")
}
else {
    console.log("MESSAGE: please contact admin")
}