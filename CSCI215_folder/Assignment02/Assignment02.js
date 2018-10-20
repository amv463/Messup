
// ----------------------------------
// Random Picture Generator

var number = Math.floor((Math.random() * 5) + 1);

console.log(number);
var randPic = [];

randPic[0] = "imgs/nba_logo.png" // "https://s3.amazonaws.com/freebiesupply/large/2x/nba-logo-transparent.png";
randPic[1] = "imgs/nfl_logo.png" // "http://www.stickpng.com/img/icons-logos-emojis/iconic-brands/nfl-logo";
randPic[2] = "imgs/mlb_logo.png" // "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png";
randPic[3] = "imgs/nhl_logo.png" // "https://clipart.info/images/ccovers/1526525415nhl-logo-png.png";
randPic[4] = "imgs/soccer_logo.png" // "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/U.S._Soccer_Team_logo.svg/2000px-U.S._Soccer_Team_logo.svg.png";

var picNum = document.getElementById("img_logo");
var assign_item = picNum.value(number);



// -----------------------------------
// Text Processor

var input_text = prompt("Enter message");
    input_text = input_Text.toUpperCase();
    input_text = input_Text.replace(/\./g, " ");

var textArray = input_Text.split(" ");










// ------------------------------------
// Math Solver

do {

    var user_input = prompt("Enter some positive numbers (one at a time). Type in -1 when you're finish");

} while (user_input != -1) {

}

function maximum(input) {



}

function minimum(input){


}

function mean(input){

    // var total = ;
    // var avg = total / ;

}

function median(input){



}

function evenNumber(input){



}

function oddNumber(input){



}

function primeNumber(input){



}

function powerOfTwo(input){



}

// --------------------------------------
// Morse Code

