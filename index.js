const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = +prompt("На сколько оцените его??", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = +prompt("Один из последних просмотренных фильмов?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);