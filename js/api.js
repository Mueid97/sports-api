const clickedButton = () =>{
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayContries(data.teams))
}
clickedButton();

const displayContries = countries =>{
    const searchCountry = document.getElementById('search-countries');
    searchCountry.textContent='';
    for(const country of countries){
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
        <img src="${country.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${country.strTeam}</h3>
              <h5 class="card-title">${country.strCountry}</h5>   
            </div>
          </div>
        `;
        searchCountry.appendChild(div);
    }
}