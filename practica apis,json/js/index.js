let list= document.querySelector (".characterList")
let characters= ""


fetch ("https://rickandmortyapi.com/api/character")

    .then (function(response){
        return response.json()
    })


    .then (function (data){
        for (let i=0; i<20; i++) {
            let char= data.results [i]
            characters += `
            <article class= "character" >
            <img src="${char.image}" alt='${char.name}'>
            <p>Name: ${char.name} </p>
            <p>Status: ${char.status}</p>
            </article>
            `
        }
        list.innerHTML= characters;
        console.log(data);
    })


    .catch (function (error){
        console.log("Error."+ error);
    })

