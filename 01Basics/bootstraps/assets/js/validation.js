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

function validation(){  
    const pnumber = document.querySelector('#pnum')
    const nationalid = document.querySelector('#nid')
    const password = document.querySelector('#pwd')
    const cpassword = document.querySelector('#cpwd')
    if(pnumber.value.length !== 10){
        // alert("ntago yuzuye");
        //   document.getElementById("message").innerHTML="<div  class='alert alert-danger'>Phone Number not exit</div>";
        // setTimeout(function(){ 
            // var myWindow = window.open("", "", "width=200, height=100");
            // myWindow.document.write("<p>This is 'myWindow'</p>");
            // setTimeout(function(){ myWindow.close() }, 3000);    
        document.getElementById("message").innerHTML="<div  class='alert alert-danger'>Phone Number not exit</div>"
        setTimeout(function(){window.location.reload()}, 3000);
        //  }, 3000);
        
        }
    else if (nationalid.value.length !== 16) {
        document.getElementById("message").innerHTML="<div  class='alert alert-danger'>ID Number not exit</div>"
        setTimeout(function(){window.location.reload()}, 3000);
    }
    else{
        document.getElementById("message").innerHTML="<div class='alert alert-success'>validation passed successful</div>"
        setTimeout(function(){window.location.reload()}, 3000);
    }
    // else if(password !== cpassword){
        
    // }
    // else{
        
    // }
    
    
}
  