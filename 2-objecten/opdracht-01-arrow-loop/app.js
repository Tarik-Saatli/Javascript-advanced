const marvels = ['Iron Man', 'Thor', 'Hulk', 'Captain America'];

// Arrow function om een nieuwe film toe te voegen
const addMarvel = () => {
  marvels.push('Spider-Man');
};

// Functie oproepen
addMarvel();

// For/of loop om alles in de console te tonen
for (let marvel of marvels) {
  console.log(marvel);
}
