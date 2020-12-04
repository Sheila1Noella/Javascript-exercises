/*var h = document.createElement('h1')
var myValue = document.createTextNode('Hello World!!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h)
var valu = 5;
while(valu > 0){
    console.log(valu);
    valu--;
}*/
var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)
function addItem (){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if (item == '') {
        return false
    }
    else
    {
        //creating a checkbox
        li = document.createElement('li');
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')
        //creating a label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //added elements to be displayed on the webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'visual'
    }

}
function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        ul.removeChild(li[index])
    }
}