const data = { username: 'pharmacy'};
function getItems() {
    fetch("http://ineza.ishyiga.com/pharmacy/closedOrder.php")
    .then(response => response.json())
    .then(data => console.log(data));
}