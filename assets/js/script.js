console.log("script chargée !");


// Méthode avec fetch
// avec cette methode j'interoge l'api et je recupere des info


// je cree une variable 
let getAllPokemons;

// cette ligne creer une constante urlApi contenant L'URL de L'API qui sera interogée pour obtenir des informatoion sur pikatchu,je peut changer "pikatchu par n'import quelle autre nom de pokemon pour obtenir des "
const urlApi = "https://pokebuildapi.fr/api/v1/pokemon/pikachu";

await getDataFetch();
async function getDataFetch () {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}
console.log(datasFetch);
datasFetch.forEach(pokemon => {
    let optionPokemon = document.createElement("option");
    optionPokemon.innerText = pokemon.name;
    document.querySelector('menu-select').appendChild(optionPokemon);
 
        
    });
// menuSelectNamePoke.addEventListener("change", function () {
    //     let pokemonDemande = dataFetch.find((dataFetchPokemon) => dataFetchPokemon.name == menuSelectNamePoke.value);
    //     boiteImagePokemon.innerHTML = "";
    //     let imagePokemon = document.createElement("img");
    //     imagePokemon.src = pokemonDemande.image;
    //     console.log(imagePokemon);
    //     boiteImagePokemon.appendChild(imagePokemon);
    // })
   
    // let menuselect = document.addEventListener("change", function () {
    //     let pokedemande = datasFetch.find(datasFetchpokemon) => datasFetchPokemon.name == menuSelect.value);
    //     boiteImagePokemon.innerHTML = "";


        
    // });
    // menuselect.classList.add("classe-menu")



    