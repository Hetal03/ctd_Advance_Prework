//API endpoint to fetch data from.
const endpointUrl = "https://swapi.dev/api/people/1/";

// constant variable to use html elements
const navEl = document.querySelector("#nav");
const mainEl = document.querySelector("#main");
const overlayEl = document.querySelector(".overlay");

//fetches data from URL using fetch method and convert in json format
// overlayEl used to display overloading while fetching data.

async function fetchData(url) {
  try {
    overlayEl.classList.add("active");
    const response = await fetch(url);
    const data = await response.json();
    overlayEl.classList.remove("active");
    return data;
  } catch (error) {
    console.error(error);
  }
}

// create list to display person's information using person object as parameter
function renderPerson(person) {
  const personEl = document.createElement("div");
  personEl.innerHTML = `
    <h2>${person.name}</h2>
    <p><strong>Birth Year:</strong> ${person.birth_year}</p>
    <p><strong>Eye Color:</strong> ${person.eye_color}</p>
    <p><strong>Hair Color:</strong> ${person.hair_color}</p>
    <p><strong>Height:</strong> ${person.height} cm</p>
    <p><strong>Mass:</strong> ${person.mass} kg</p>
    <p><strong>Skin Color:</strong> ${person.skin_color}</p>
  `;

  // Create a list of films that the person appears in and add links to them
  //when film link is clicked it renders the film's information by calling the renderFilm() function.

  const filmListEl = document.createElement("ul");
  filmListEl.innerHTML = "<h3>Films:</h3>";
  person.films.forEach(async (url) => {
    const film = await fetchData(url);
    const filmEl = document.createElement("li");
    filmEl.innerHTML = `<a href="#" data-url="${url}">${film.title}</a>`;
    filmListEl.appendChild(filmEl);
    filmEl.addEventListener("click", async (event) => {
      event.preventDefault();
      mainEl.innerHTML = "";
      const url = event.target.dataset.url;
      const data = await fetchData(url);
      renderFilm(data);
    });
  });
  personEl.appendChild(filmListEl);
  //This function appends the person's HTML element to the mainEl element,
  mainEl.appendChild(personEl);
}

// it will give information about films
function renderFilm(film) {
  const filmEl = document.createElement("div");
  filmEl.innerHTML = `
    <h2>${film.title}</h2>
    <p><strong>Release Date:</strong> ${film.release_date}</p>
    <p><strong>Director:</strong> ${film.director}</p>
    <p><strong>Producer:</strong> ${film.producer}</p>
    <p><strong>Opening Crawl:</strong></p>
    <p>${film.opening_crawl}</p>
  `;

  // Create a list of characters that appear in the film and add links to them
  const characterListEl = document.createElement("ul");
  characterListEl.innerHTML = "<h3>Characters:</h3>";
  film.characters.forEach(async (url) => {
    const character = await fetchData(url);
    const characterEl = document.createElement("li");
    characterEl.innerHTML = `<a href="#"  data-url="${url}">${character.name}</a>`;
    characterListEl.appendChild(characterEl);
    characterEl.addEventListener("click", async (event) => {
      event.preventDefault();
      mainEl.innerHTML = "";
      // / get the URL of the character from the data-url attribute of the clicked link
      const url = event.target.dataset.url;
      // fetch the character data from the API
      const data = await fetchData(url);
      renderPerson(data);
    });
  });
  filmEl.appendChild(characterListEl);

  mainEl.appendChild(filmEl);
}

//
(async () => {
  // fetch data from the API endpoint URL
  const data = await fetchData(endpointUrl);
  //render the person's information by calling the renderPerson() function with the fetched data as a parameter
  renderPerson(data);
})();
