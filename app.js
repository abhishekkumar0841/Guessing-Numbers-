
let changingText = document.querySelector('#changingText');
let secretNumber = document.querySelector('#secretNumber');
let restart = document.querySelector('#restart');
let input = document.querySelector('#input');
let check = document.querySelector('.check');

// music section
const error = new Audio('error.mpeg');
const success = new Audio('success.mpeg');
const gameOver = new Audio('gameOver.mp3');


let randomNumber = Math.floor(Math.random() * 20) + 1;

let chances = 5;
let highscore = 0;

check.addEventListener('click', function(){

    let playerInput = Number(input.value);
    if(!playerInput){
        changingText.textContent = "No Number !!";
        changingText.style.color = "red";

        error.play();

    }else if(playerInput === randomNumber){
        changingText.textContent = "..Correct Number..";
        secretNumber.textContent = randomNumber;
        document.querySelector('.container').style.background = "green";
        changingText.style.color = "#fff";

        success.play();
        success.loop = true;

        if(chances === 5){
            document.querySelector('#highscore').textContent = 100;
        }else if(chances === 4){
            document.querySelector('#highscore').textContent = 80;
        }else if(chances === 3){
            document.querySelector('#highscore').textContent = 60;
        }else if(chances === 2){
            document.querySelector('#highscore').textContent = 40;
        }else if(chances === 1){
            document.querySelector('#highscore').textContent = 20;
        }

    }else if(playerInput > randomNumber){
        if(chances > 1){
            changingText.textContent = "! Too High !";
            chances--;
            document.querySelector('#chances').textContent = chances;
            changingText.style.color = "red";

            error.play();

        }else{
            changingText.textContent = "You lost";
            document.querySelector('#chances').textContent = "00";
            secretNumber.textContent = randomNumber;
            document.querySelector('.container').style.background = "red";

            gameOver.play();
            gameOver.loop = true;
        }
    }else if(playerInput < randomNumber){

        if(chances > 1){
            changingText.textContent = "! Too Low !";
            chances--;
            document.querySelector('#chances').textContent = chances;
            changingText.style.color = "red";

            error.play();

        }else{
            changingText.textContent = "You lost";
            document.querySelector('#chances').textContent = "00";
            secretNumber.textContent = randomNumber;
            document.querySelector('.container').style.background = "red";       

            gameOver.play();
            gameOver.loop = true;
        }
        
    }
    
});


restart.addEventListener('click', function(){
    input.value = "";

    randomNumber = Math.floor(Math.random() * 20) + 1;
    secretNumber.textContent = "?";

    changingText.textContent = "..Are You Ready..";

    chances = document.querySelector('#chances').textContent = 5;

     highscore = document.querySelector('#highscore').textContent = 0;

    document.querySelector('.container').style.background = "#333";

    document.querySelector('.container').style.background = "#333";

    changingText.style.color = "#fff";

    success.pause();

    gameOver.pause();
    
})


