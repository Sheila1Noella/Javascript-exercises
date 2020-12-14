function changemode() {
    var element = document.body;
    element.classList.toggle("dark-mode");   
}

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const countriesEl = document.getElementById('countries');

const searchCountries = async searchText => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await res.json();
    console.log(countries);

    // displayCountries(countries);

    let matches = countries.filter(countries => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return countries.name.match(regex);
    });
    if (searchText === 0) {
        matches = [];  
        matchList.innerHTML = '';      
    }
    // console.log(matches);
    outputHtml(matches);
};
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb1 form-group">
        <h2 style="color:grey">${match.name}<span class="text-primary">
        ${match.capital}</span></h2>
        <small  style="color:grey">Capital city: ${match.capital}<br>Region: ${match.region}<br>Population: ${match.population}</small>
        </div>`).join('');
        // console.log(html);
        matchList.innerHTML = html;
    }
};
search.addEventListener('input', () => searchCountries(search.value));

getCountries();
async function getCountries() {
    const reso = await fetch('https://restcountries.eu/rest/v2/all');
    const countries1 = await reso.json();
    displayCountries(countries1);
}
function displayCountries(countries1) {
    countriesEl.innerHTML = '';
    
    // countries1.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.classList.add('card');

    countryEl.innerHTML = `
    <div>
       <img src="https://restcountries.eu/data/deu.svg" style="width: 300px;height:200px;" alt="Germany">
   </div>
   <div class="card-body">
   <h2>Germany</h2>
   <p><strong>Population: </strong>677766</p>
   <p><strong>Region:</strong>Africa</p>
   <p><strong>Capital city:</strong>kigali</p>
   <p><strong>Language:</strong>Kinyarwanda</p>
   </div>
   `;
    countriesEl.appendChild(countryEl);
// });
}