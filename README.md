
# Star Wars API Demo
This is a small demo application that uses the Star Wars API to display information about characters and films from the Star Wars universe.
Created with CodeSandbox

# Technologies Used
The following technologies were used in this project:

HTML,
CSS,
JavaScript,
Fetch API

# How to Use
To use this application, simply open the index.html file in your web browser. You will see information about the character "Luke Skywalker" displayed by default.

You can click on any of the links in the "Films" section to see information about that film. Similarly, you can click on any of the links in the "Characters" section of a film's page to see information about that character.

# Code Structure
The application consists of three main files:

index.html: The HTML file that displays the user interface of the application.

style.css: The CSS file that styles the user interface.

script.js: The JavaScript file that fetches data from the Star Wars API and renders it in the user interface.
The script.js file contains three main functions:

fetchData: This function fetches data from a given URL using the Fetch API and returns it in JSON format.

renderPerson: This function takes a person object as a parameter and creates an HTML element to display information about that person. It also creates a list of films that the person appears in and adds links to them. When a film link is clicked, it calls the renderFilm function to display information about that film.

renderFilm: This function takes a film object as a parameter and creates an HTML element to display information about that film. It also creates a list of characters that appear in the film and adds links to them. When a character link is clicked, it calls the renderPerson function to display information about that character.

# Future Improvements
Some possible future improvements for this application include:

Adding more information about each character and film, such as quotes or images.
Allowing users to search for specific characters or films.
Improving the user interface to make it more visually appealing and intuitive.
