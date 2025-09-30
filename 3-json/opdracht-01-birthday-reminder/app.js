async function loadData() {
  const birthday = await fetch('birthday.json');
  const data = await birthday.json();
  displayPeople(data);
}

function displayPeople(people) {
  const list = document.getElementById('list');
  list.innerHTML = ''; 

  people.forEach(person => {
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `
      <img src="${person.image}" alt="${person.name}">
      <div>
        <h4>${person.name}</h4>
        <p>${person.age} years</p>
      </div>
    `;
    list.appendChild(div);
  });

  document.getElementById('count').textContent = people.length;
}

document.getElementById('clear').addEventListener('click', () => {
  document.getElementById('list').innerHTML = '';
  document.getElementById('count').textContent = 0;
});

loadData();
