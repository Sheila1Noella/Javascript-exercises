/*console.log(document.title);
document.title = "I got changed"
alert('File is attached')
const myPElements = document.querySelector('p')
myPElements.textContent = 'I am being changed using Javascript'

const myPElements = document.querySelectorAll('p')
myPElements.forEach(function(p){
    p.textContent = 'I am changed using loop in Js'
})
const myPElements = document.querySelectorAll('p')
myPElements.forEach((p) => p.textContent = 'I am changed using loop in Js'
)

document.title = 'I got Changed'

const myPElements = document.querySelectorAll('p')
console.log(myPElements[0]);*/
//track input 

document.querySelector('#myform').addEventListener('input',(event) => {
    console.log(event.target.value);
})


