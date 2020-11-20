function getItems() {
    fetch("https://reqres.in/api/users")
    .then(response => {
        console.log(response);
        if (!response.ok) 
        {
            throw Error("ERROR");  
        }
        return response.json();
        // console.log(data);
}).then(data => {
    console.log(data.data);
    const htmll = data.data.map(user => {
        return `
        <div class="user">
        <p>Name: ${user.first_name} </p>
        <p>Email: ${user.email} </p>
        </div>`;
    }).join('');
    console.log(htmll);
    //display Api data on the pages
    document
    .querySelector('#app').insertAdjacentHTML("afterbegin", htmll );
}).catch(error => {
    console.log(error);
});
}
getItems()
//create a user we use POST REQUEST
function postdata() {
    fetch("https://reqres.in/api/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Sheila',
            job: 'Leader'
        })
    })
    .then(response => {
        console.log(response);
        if (!response.ok) 
        {
            throw Error("ERROR");  
        }
        return response.json();
        // console.log(data);
}).then(data => {
    console.log(data);
 }).catch(error => {
    console.log(error);
});
}
postdata()