
// JavaScript object
const book = {
  title: "The JavaScript Guide",
  author: "John Smith",
  publisher: "TechPress",
  year: 2023,
  sold: 15000,
  price: "€29.99"
};

// Output element selecteren
let output = document.querySelector('.output');

// Data tonen op het scherm
output.innerHTML = `
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <p>Publisher: ${book.publisher}</p>
  <p>Year: ${book.year}</p>
  <p>Sold copies: ${book.sold}</p>
  <p>Price: ${book.price}</p>
`;




