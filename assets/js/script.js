console.log("script chargée !");


// Méthode avec fetch

let datasFetch;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}

console.log(datasFetch);

// datasFetch.forEach(pokemon => {
//     let optionPokemon = document.createElement("option");
//     optionPokemon.innerText = pokemon.name;
//     document.querySelector('.menu-select').appendChild(optionPokemon);
// });