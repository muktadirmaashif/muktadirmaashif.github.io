let playButton = document.getElementById('play-btn');
playButton.addEventListener("click", theGame);


let guessCount = 2;
//generate random number
let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(`random Number = ${randomNum}`);

//count guess 

//let result;


function theGame() {
    console.log("Play/Restart Button clicked");
    
    //creating input and submit
    let guessDiv = document.createElement('div');
    guessDiv.className = `game-input-div`;
    let gameInput = `
    <input class="input-guess" id="input-guess" type="text" placeholder="Enter your guess here">
    <input class="btn btn-info  btn-sm submit-btn" id="submit-btn" type="submit">
    `
    guessDiv.innerHTML = gameInput;
    
    // append input and submit
    mainDiv = document.getElementById('main-form');
    mainDiv.appendChild(guessDiv);

    //console.log(guessDiv);
    // remove play button
    playButton.remove();
    alert("You can guess 3 times. Good Luck!");
    // adding submit button evenlistener
    let submitButton = document.getElementById('submit-btn');
    
    
    
        
    
    submitButton.addEventListener('click', guessIt);    
    
    
    
}

function guessIt() {
    
        let guessedNum = document.getElementById('input-guess').value;
        console.log("Submit button clicked");
        console.log(`Guessed Number = ${guessedNum}`);
        
        if(guessedNum == randomNum) {
            alert("You won! Wanna try again?");
            //guessCount = 0;
            location.reload();
        } else if(guessedNum < randomNum && guessCount!=0) {
            guessCount--;
            alert(`Correct answer is greater! You can try ${guessCount+1} more times`);
        } else if(guessedNum > randomNum && guessCount!=0) {
            guessCount--;
            alert(`Correct answer is smaller! You can try ${guessCount+1} more times`);
        } else {
            alert("You lost! One more time?");
            location.reload();
        }
        
        
    
}

/* 
        if(guessCount == 0) {
            //let GuessDiv = document.querySelector('.game-input-div');
            //GuessDiv.remove();
            //console.log(`guessCount = ${guessCount}`);

            //playButton.addEventListener("click", location.reload(true));
            
            let restartButtonDiv = document.createElement('div');
            restartButtonDiv.className = ` btn btn-success restart-btn`;
            restartButtonDiv.innerHTML = `
            <button class="btn btn-success btn-sm" id="restart-btn">Restart Game</button>
            `
            mainDiv = document.getElementById('main-form');
            mainDiv.appendChild(restartButtonDiv);

            

           restartButton = document.getElementById('restart-btn');
            restartButton.addEventListener('click', function() {
                location.reload();
                //theGame();
                //restartButtonDiv.remove();
            }); 
        } */
