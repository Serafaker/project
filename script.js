

let numberoffilms = prompt("Сколько фильмов ты смотрел?", "");

const personallist = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (personallist.count <=10){
    console.log("Смотри больше!");
    } else if (personallist.count <=30){
        console.log("Норм!");
    } else if (personallist.count >30){
        console.log("100% смотрел чел многоножку!");
    }   else if (npersonallist.count !==1){
        console.log("и правильно порно это не кино");
    
}


for (i=0; i<2; i++) {
    let a = prompt("какой фильм ты смотрел?"),
        b = prompt("На сколько  баллов фильм?");

        if (a !=null && b !=null && a.length<50 && b.length<50 && a !="" && b !=""){
        personallist.movies[a] = b;
        } else {
        console.log("Хуеча!! давай по новой!");
        i--;
        }
}

console.log(personallist);