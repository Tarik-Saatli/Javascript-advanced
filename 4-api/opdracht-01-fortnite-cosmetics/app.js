let output = document.querySelector('.output')

fetch('https://fortnite-api.com/v2/cosmetics/new')
.then((response) => response.json())
.then((data) => {
    console.log(data.data.items.br)

    for (let fortn of data.data.items.br) {
        output.innerHTML += `
        <h2> ${fortn.name}</h2>
        <img src=${fortn.images.featured}/>
        
        `;
}
})