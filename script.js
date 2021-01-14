

let numberoffilms;

function start () {
    numberoffilms = prompt("Сколько фильмов ты смотрел?", "");
    while (numberoffilms == "" || numberoffilms == null || isNaN(numberoffilms)){
        numberoffilms = prompt("Сколько фильмов ты смотрел?", "");
    }
}

start();

const personallist = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyfilms (){
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
}
 rememberMyfilms();


function detectPersonalLevel(){

    if (personallist.count <=10){
        console.log("Смотри больше!");
        } else if (personallist.count <=30){
            console.log("Норм!");
        } else if (personallist.count >30){
            console.log("100% смотрел чел многоножку!");
        }   else if (npersonallist.count !==1){
            console.log("и правильно порно это не кино");
        }
}
detectPersonalLevel();

function writeyougenres(){
    for (u=1; u<4; u++) {
        let d = prompt(`какой твой любимый жанр ${u}`, "Ужасы, Комедии, Порнушка, и тд");
        
        if (d !=null & d !="" & d != "многоножка"){
            personallist.genres.push(d.toLowerCase(d));
        } else if (d == "многоножка"){
            console.log("Он опасный тип!!!!!");
            u--;
        } else {
            d = prompt("какой твой любимый жанр", "1.Ужасы, 2.Комедия, 3.Порнушка,");
            console.log("!");
            u--;
        }       
    }
}

writeyougenres();

function  showMyDb(){
 if (personallist.privat == false){
     console.log(personallist);
 }
}

showMyDb();
