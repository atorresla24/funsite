'use strict'

let answer = prompt("Skateboards or surfboards");
console.log(answer);

let userName = prompt("What is your name");
console.log(userName);

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

 let question;
 let stars = 5;
 for (let i = 1; i <= stars;){
     let question = prompt("What would you rate the questions? 1-5");
     if (question == 1){
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
     }else if(question == 2){
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
     }else if (question == 3){
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
     }else if(question == 4){
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
     }else if(question == 5){
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
        src("https://static4.depositphotos.com/1026550/376/i/600/depositphotos_3763236-stock-photo-gold-star.jpg");
     }else{
         document.write("No stars :(");
     }
 }
