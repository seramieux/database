let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" ||  numberOfFilms == null ||  isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?", "").trim();
		const b = +prompt("На сколько оцените его??", "");

		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("Done");
		} else {
			console.log("Error");
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}
detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.private == false) {
		console.log(personalMovieDB);
	}
}
showMyDB();

function writeYourGenres() {
	for (let j = 1; j < 4; j++) {
		let genre = prompt(`Ваш любимый жанр под номером ${ j }`);
		personalMovieDB.genres[j - 1] = genre;
	}
}
writeYourGenres();