"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [0, 1, 2],
    privat: false,
    start: function () {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How many films did you watch?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Could you name one of them?'),
                b = prompt('Could you rate it?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You didn`t watch a lot of films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are average viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You really enjoy films');
        } else {
            console.log('An error has occurred');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i<=3; i++){
            let genre = prompt(`Whats your favourite genre ${i}`);

            if (genre === '' || genre == null) {
                console.log('Error: entered data is not correct');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i+1} is ${item}`);
        });
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (visibility) {
        if (true) {
            visibility.privat = !visibility.privat;
        } 
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB(personalMovieDB);