// function myValidation(){
//     let myValue = document.getElementById('myform').value;

//     if (isNaN(myValue) || myValue < 1 || myValue > 20) {
//         console.log('this input is okay');
//     }
//     else{
//         console.log('Not a valid input');
//     }
// }

//form validate
document.querySelector('.myform').addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.fullname.value);
    event.target.username.value = ''
    event.target.fullname.value = ''

})