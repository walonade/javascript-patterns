const Movie = require('./movie');
const MoviePrinter = require('./movie-printer');
const HtmlFormatter = require('./html-formatter');

const movie = new Movie('Deadpool 2', 2018, '2:22', 'Action');
const printer = new MoviePrinter(movie);
const formatter = new HtmlFormatter();

const result = printer.print(formatter);

console.log(result);