'use strict'
function board(){
    let answer = prompt("Skateboards or surfboards");
    console.log(answer);
    console.log("That's awesome!");
}

function greeting(){
    let userName = prompt("What is your name");
    console.log(userName);
    return userName
}

if (answer == skateboards){
    console.log("Good choice! WELCOME!" + userName);
}else{
    console.log("Well then this isn't the place for you...BYE!");
}

let deckWidth = prompt('Skateboard width length (7.5in-8.7in');
let respone;

if(deckWidth < 8){
    response = 'Guess small boards are for you!';
 } else if(deckWidth == 8) {
    response = 'Middle child much';
 }else if(deckWidth < 8){
    response = 'Look at this big man here!';
 } else {
    response = 'I guess skateboards are not for you :(';
 }
function numGuess(){
    let number;
    let guesses = 3;
    for(let i = 0; i < guesses; i++){
        let number = prompt("Guess to enter 1-10");
        if (number == 9){
            console.log("You may enter");
            break;
        }else{
            console.log("Better luck next time ;)");
        }
    }
}
function pic(){
    let question = prompt("What would you rate the questions? 1-5");
    for (let i = 0; i <= question;i++){
        document.write("<img src='https://thumbs.dreamstime.com/z/golden-star-27179479.jpg'/>")
        }
    }
