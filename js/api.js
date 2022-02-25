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

