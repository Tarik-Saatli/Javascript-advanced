
// JavaScript object
const person = {
  dateOfBirth: "13 april 2000",
  name: "Pim Pronk",
  age: "25",
  gender: "men",
  alive: true,
  hobbies: "€29.99"
};

// Output element selecteren
let output = document.querySelector('.output');

// Data tonen op het scherm
output.innerHTML = `
  <p>dateOfBirth: ${person.dateOfBirth}</p>
  <p>name: ${person.name}</p>
  <p>age: ${person.age}</p>
  <p>gender: ${person.gender}</p>
  <p>alive: ${person.alive}</p>
  <p>hobbies: ${person.hobbies}</p>
`;




