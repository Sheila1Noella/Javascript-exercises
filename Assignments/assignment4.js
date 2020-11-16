//muri javascript uze kunkorera codes zakira api data ziri mubwoko bya json() ukoresheje fetch then ubi rendering kuri html page

// const uri = 'api/TodoItems';
// let todos = [];

// function getItems() {
//   fetch(uri)
//     .then(response => response.json())
//     .then(data => _displayItems(data))}

const urll = 'api/Mytasks'
let todos = [];
function getItems() {
    fetch(urll)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('unable to get items. ', error));}
    