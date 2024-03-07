// generate number player 1, 1-6
let randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1);

//dice angka .png
var randomDiceImg = "dice" + randomNum1 + ".png"

//set random img source berdasarkan nomor acak 
const randomImgSource = `images/${randomDiceImg}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource)




// generate number player 1, 1-6
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2);

//dice angka .png
var randomDiceImg2 = "dice" + randomNum2 + ".png"

//set randm img player 2
const randomImgSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2)

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML= "KIRI MENANG";
} else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML= "KANAN MENANG";
} else {
    document.querySelector("h1").innerHTML= "SERI";
}