console.log("script chargée !");


// Méthode avec fetch
// avec cette methode j'interoge l'api et je recupere des info
let datasFetch;
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/limit/100";
await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}
console.log(datasFetch);
datasFetch.forEach(pokemon => {
    let optionPokemon = document.createElement("option");
    optionPokemon.innerText = pokemon.name;
    document.querySelector('.menu-select').appendChild(optionPokemon);
 
        
    });
// menuSelectNamePoke.addEventListener("change", function () {
//         let pokemonDemande = dataFetch.find((dataFetchPokemon) => dataFetchPokemon.name == menuSelectNamePoke.value);
//         boiteImagePokemon.innerHTML = "";
//         let imagePokemon = document.createElement("img");
//         imagePokemon.src = pokemonDemande.image;
//         console.log(imagePokemon);
//         boiteImagePokemon.appendChild(imagePokemon);
//     })
   
    // let menuselect = document.addEventListener("change", function () {
    //     let pokedemande = datasFetch.find(datasFetchpokemon) => datasFetchPokemon.name == menuSelect.value);
    //     boiteImagePokemon.innerHTML = "";


        
    // });
    // menuselect.classList.add("classe-menu")



    