// aha niho uri bukorere code zawe za js
// const fname = document.getElementById('fname')
// const lname = document.getElementById('lname')
// const nationalid = document.getElementById('nid')
// const pnumber = document.getElementById('pnum')
// const pawd = document.getElementById('pwd')
// const confirmpwd = document.getElementById('cpwd')
// kora validation nibidahura nibyo ushaka 
// ushyire muri id message ko afite ikibazo ucyimubwire icyo kibazo
// validation nicamo umubwire ko validation za passing
// ndashaka ko button ya ya register idakoresha onclick koreshaho add event listerner
// refresh page after 5 secs;
// wongereho aga close kuri message iturutse muri javescript
// koresha loop werekana ibintu byose bitari valid

// document.getElementById('btnregister').addEventListener('click', function(){  
    function validation(){
    const fname = document.querySelector('#fname')
    const lname = document.querySelector('#lname')
    const pnumber = document.querySelector('#pnum')
    const nationalid = document.querySelector('#nid')
    const password = document.querySelector('#pwd') 
    const cpassword = document.querySelector('#cpwd')
    if(pnumber.value.length !== 10){ 
        document.getElementById("message").innerHTML="<div  class='alert alert-danger'>Phone Number not exit</div>"
        // setTimeout(function(){window.location.reload()}, 3000);        
        }
    else if(fname.value === lname.value){
            document.getElementById("message".innerHTML)="<div class='alert alert-success'>Lastname and firstname must not be the same</div>"
            // setTimeout(function(){window.location.reload()}, 3000);
        }
    else if (nationalid.value.length !== 16) {
        document.getElementById("message").innerHTML="<div  class='alert alert-danger'>ID Number not exit</div>"
        // setTimeout(function(){window.location.reload()}, 3000);
    }
    else if(password.value !== cpassword.value || password.value.length <= 8){
        document.getElementById("message").innerHTML="<div class='alert alert-danger'>Please use more than 8 characters and the use same password</div>"
        // setTimeout(function(){window.location.reload()}, 3000);
    }
    else{
        document.getElementById("message").innerHTML="<div class='alert alert-success'>validation passed successful</div>"
        setTimeout(function(){window.location.reload()}, 3000);
    }
    
    
}
// validation();