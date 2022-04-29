'use strict'
function board(){
    let answer = prompt("Skateboards or surfboards");
    console.log(answer);
    console.log("That's awesome!");
    return answer;
}

function greeting(){
    let userName = prompt("What is your name");
    console.log(userName);
    return userName;
}

function answer(skates){
    if (skates == 'skateboards'){
        console.log("Good choice! WELCOME!" + userName);
    }else{
        console.log("Well then this isn't the place for you...BYE!");
    }
    
    let deckWidthString = prompt('Skateboard width length (7.5in-8.7in)');
    let deckWidth = parseFloat(deckWidthString);
    console.log(deckWidth);
    let response;
    
    if(deckWidth < 8.0){
        response = 'Guess small boards are for you!';
     } else if(deckWidth == 8.0) {
        response = 'Middle child much';
     }else if(deckWidth > 8.0){
         response = 'Look at this big man here!';
        } else {
         response = 'I guess skateboards are not for you :(';
     }
     console.log(response);
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
    for (let i = 1; i <= question;i++){
        document.write("<img src='https://image.shutterstock.com/image-vector/five-pointed-yellow-star-icon-260nw-543076969.jpg'/>")
        }
    }
let skater = board();
let userName = greeting();
answer(skater);
numGuess();
pic();