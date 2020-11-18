function getItems() {
    fetch("https://reqres.in/api/users?page=2").then(response => {
        console.log(response)
    })
}
getItems()