const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   private: false,
   start: function () {
       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

       while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
           personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
       }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonalLevel: function() {
       if (personalMovieDB.count < 10) {
           console.log("Просмотрено довольно мало фильмов");
       } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
           console.log("Вы классический зритель");
       } else if (personalMovieDB.count >= 30) {
           console.log("Вы киноман");
       } else {
           console.log("Произошла ошибка");
       }
   },
   showMyDB: function() {
       if (personalMovieDB.private == false) {
           console.log(personalMovieDB);
       }
   },
   toggleVisibleMyDB: function () {
       if (personalMovieDB.private) {
           personalMovieDB.private = false;
       } else {
           personalMovieDB.private = true;
       }
   },
   writeYourGenres: function () {
       for (let j = 1; j < 4; j++) {

           let genre = prompt(`Ваш любимый жанр под номером ${j}`);
           if (genre === "" || genre == null) {
               console.log("Вы ввели некорректные данные или не ввели их вовсе");
               i--;
           } else {
               personalMovieDB.genres[j - 1] = genre;
           }
       }
       personalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i + 1} - это ${item}`);
       });
   }
};