// function play(){
//     // hide the home screen.to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // show the playground 
//     const playGroundSection = document.getElementById('play-ground-section');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress (event){
    const playerPressed = event.key;
    console.log('player press', playerPressed);

    // stop the game if player press esc 
    if(playerPressed==='Escape'){
        gameOver();
    }


    // get expected to press:
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentTargetAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = currentTargetAlphabet.toLowerCase();

    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('you get a point');
        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1 ;
        setTextElementById('current-score', updatedScore)




        // update score:
        // get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // increase the score 1
        // const newScore = currentScore + 1 ;
        // // show the update
        // currentScoreElement.innerText = newScore;
        

        // start new round
        deleteBackground(expectedAlphabet);
        continueGame();
    }else{
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

        if(updatedLife===0){
            gameOver();
        }



        // get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        // reduce the life count 

    }
}
// capture keyboard key press:
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame (){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // set randomly generated alphabet to the screen 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet 
    // set background color
    setBackgroundColor(alphabet);
}

function play (){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground-section');

    // reset element
    setTextElementById('current-life', 5);
    setTextElementById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground-section');
    showElementById('final-score');
    // update final score
    // get the final score
    const lastScore = getElementValueById('current-score');
    setTextElementById('game-score', lastScore)

    // clear the last selected alphabet highlight 
    const currentAlphabet = getElementTextById('current-alphabet');
    deleteBackground(currentAlphabet);
}
