var randomNumber1 = Math.floor(Math.random()*3)+1;
var randomImageSrc = "images/pic" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);


var randomNumber2 = Math.floor(Math.random()*3)+1;
var randomImageSrc2 = "images/pic" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


if (randomNumber1==1 && randomNumber2==2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if (randomNumber1==1 && randomNumber2==3){
    document.querySelector("h1").textContent = "Player 1 Wins!!";
}
else if (randomNumber1==2 && randomNumber2==1){
    document.querySelector("h1").textContent = "Player 1 Wins!!";
}
else if (randomNumber1==2 && randomNumber2==3){
    document.querySelector("h1").textContent = "Player 2 Wins!!";
}    
else if (randomNumber1==3 && randomNumber2==1){
    document.querySelector("h1").textContent = "Player 2 Wins!!";
}
else if (randomNumber1==3 && randomNumber2==2){
    document.querySelector("h1").textContent = "Player 1 Wins!!";
} 
else{
    document.querySelector("h1").textContent = "It's a TIE!";
}