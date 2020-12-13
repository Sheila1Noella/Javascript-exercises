function changemode() {
    var element = document.body;
    element.classList.toggle("dark-mode");   
}

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchCountries = async searchText => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();
    console.log(countries);

    let matches = countries.filter(countries => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return countries.name.match(regex);
    });
    if (searchText === 0) {
        matches = [];  
        // matchList.innerHTML = '';      
    }
    // console.log(matches);
    outputHtml(matches);
};
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb1">
        <h4>${match.name}<span class="text-primary">
        ${match.capital}</span></h4>
        <small>Capital city: ${match.capital}<br>Region: ${match.region}<br>Population: ${match.population}</small>
        </div>`).join('');
        // console.log(html);
        matchList.innerHTML = html;
    }
};
search.addEventListener('input', () => searchCountries(search.value))