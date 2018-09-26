# Escape 


## MVP

In Escape, users will be able to: 

* Start, pause, and reset the game board
* Toggle sound on/off
* Move the main character
* Keep track of score

In addition, this project will include:

* An About modal describing the background and rules of the game
* A production README

#Architecture and Technologies

This project will be implemented with the following technologies:

JavaScript for game logic
Canvas with HTML5


**Day 1:** Setup all necessary Node modules, including getting webpack up and running and Foo.js installed. Write a basic entry file and the bare bones of all 3 scripts outlined above. Learn the basics of Foo.js. Goals for the day:

Get a green bundle with Browserify
Learn enough Foo.js to render an object to the HTML5 Baz element

**Day 2:** Dedicate this day to learning the Foo.js API. First, build out the Cell object to connect to the Board object. Then, use board.js to create and render at least the square grid, ideally all 3 grid types. Build in the ability to toggle the live/dead states on click for each cell. Goals for the day:

Complete the cell.js module (constructor, update functions)
Render a square grid to the HTML5 Baz using Foo.js
Make each cell in the grid clickable, toggling the state of the square on click
Do the same for triangular and hexagonal grids
Day 3: Create the automata logic backend. Build out modular functions for handling the different grid types along with their unique neighbor checks and rule sets. Incorporate the automata logic into the Board.js rendering. Goals for the day:

Export an Automata object with correct type and handling logic
Have a functional grid on the HTML Baz frontend that correctly handles iterations from one generation of the game to the next

**Day 4:** Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

Create controls for game speed, stop, start, reset, and shape type
Have a styled HTML Baz, nice looking controls and title
If time: include buttons on the side to toggle the color scheme of the cells

