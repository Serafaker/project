"use strict";

const numberoffilms = +prompt("Сколько фильмов ты смотрел?", "");

const personallist = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("какой фильм ты смотрел?");
const b = +prompt("на сколько баллов фильм?");
const c = prompt("какой фильм ты смотрел?");
const d = +prompt("на сколько баллов фильм?");

personallist.movies[a] = b;
personallist.movies[c] = d;

console.log(personallist);