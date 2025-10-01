let output = document.querySelector('.output')

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
.then((response) => response.json())
.then((data) => {
    console.log(data)

    for (let c of data) {
        output.innerHTML += `
        <h2> ${c.name.common}</h2>
        <img src=${c.flags.png} />
        
        `;
}
})