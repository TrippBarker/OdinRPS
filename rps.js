// Variables and GIFs

const weapons = ['jump', 'kick', 'punch'];
let playGame = true;
const btns = document.querySelectorAll('button');
const ssGif = document.querySelector('#ss');
const bjGif = document.querySelector('#bj');
const bkGif = document.querySelector('#bk');
const bpGif = document.querySelector('#bp');
const ljrkGif = document.querySelector('#ljrk')
const ljrpGif = document.querySelector('#ljrp')
const lkrjGif = document.querySelector('#lkrj')
const lkrpGif = document.querySelector('#lkrp')
const lprkGif = document.querySelector('#lprk')
const lprjGif = document.querySelector('#lprj')
const bloseGif = document.querySelector('#blose');
const bdownGif = document.querySelector('#bdown');
const rloseGif = document.querySelector('#rlose');
const rdownGif = document.querySelector('#rdown');
const playAgainMsg = document.querySelector('#playAgain');
const human = document.querySelector('#blueScore');
const tie = document.querySelector('#tieScore');
const computer = document.querySelector('#redScore');
let humScore = 0;
let tieScore = 0;
let compScore = 0;
let playingGif = ssGif;

// function generates a random number between 0 and 2 (inclusive) to select a weapon from the weapons array
function computerWep(){
    return Math.round(Math.random() * 2);
}

// function plays a round when user clicks a button
function playRound(e){
    compWep = weapons[computerWep()];
    humWep = this.id;
    // rock, paper scissors logic.
    // jump beats kick, kick beats punch, punch beats jump
    if(humWep === 'jump' && compWep === 'jump'){
        tieScore++;
        runGif(ssGif, bjGif);
    } else if(humWep === 'kick' && compWep === 'kick'){
        tieScore++;
        runGif(ssGif, bkGif);
    } else if(humWep === 'punch' && compWep === 'punch'){
        tieScore++;
        runGif(ssGif, bpGif)
    } else if (humWep === 'jump' && compWep === 'kick'){
        humScore++;
        runGif(ssGif, ljrkGif);
    } else if (humWep === 'jump' && compWep === 'punch'){
        compScore++;
        runGif(ssGif, ljrpGif)
    } else if (humWep === 'kick' && compWep === 'jump'){
        compScore++;
        runGif(ssGif, lkrjGif);
    } else if (humWep === 'kick' && compWep === 'punch'){
        humScore++;
        runGif(ssGif, lkrpGif);
    } else if (humWep === 'punch' && compWep === 'kick'){
        compScore++;
        runGif(ssGif, lprkGif);
    } else if (humWep === 'punch' && compWep === 'jump'){
        humScore++;
        runGif(ssGif, lprjGif);
    } else if (humWep === 'play'){
        humScore = 0;
        tieScore = 0;
        compScore = 0;
        playAgainMsg.textContent = 'BLUE V. RED';
        btns.forEach(button => button.classList.toggle('hideGif'));
        playingGif.classList.toggle('hideGif');
        ssGif.classList.toggle('hideGif');
        runGif(ssGif, ssGif)
    } else {
        console.log("Something happened that I did not predict!");
    }
    // If a player is at 5 points run gameEnd function
    if(humScore === 5){
        gameEnd('BLUE');
    } else if(compScore === 5){
        gameEnd('RED');
    }
}

// function called to run appropriate gif for game scenario
function runGif(gif1, gif2){
    // this line ticks the browser into restarting the gif - reloads gif to page so gif should be small
    gif2.src = gif2.src+"?a="+Math.random();
    // toggle between currently playing gif and gif that should be played
    gif1.classList.toggle('hideGif');
    gif2.classList.toggle('hideGif');
    // disable buttons so user cannot spam input
    btns.forEach(button => button.classList.toggle('disableBtn'));
    // setTimeout to stop JS from running while gif plays.
    setTimeout(() => {
        gif1.classList.toggle('hideGif'); 
        gif2.classList.toggle('hideGif'); 
        btns.forEach(button => button.classList.toggle('disableBtn'));
        if (humScore === 5){
            runKnockOut(rloseGif, rdownGif);
        }
        if (compScore === 5){
            runKnockOut(bloseGif, bdownGif)
        }}, 980);
    human.textContent = `BLUE: ${humScore}`;
    tie.textContent = `TIE: ${tieScore}`;
    computer.textContent = `RED: ${compScore}`;
}

// Plays the knock-out gif once a player reaches 5 wins
function runKnockOut(gif1, gif2){
    // store the gif2 as 'playingGif' so that is can be turned off later - if user wants to play again
    playingGif = gif2;
    // these lines tick the browser into restarting the gif - reloads gif to page so gif should be small
    gif1.src = gif1.src+"?a="+Math.random();
    gif2.src = gif2.src+"?a="+Math.random();
    // toggle between starting stance gif and knock-out gif
    ssGif.classList.toggle('hideGif');
    gif1.classList.toggle('hideGif');
    // disable buttons while gif plays to prevent input spamming
    btns.forEach(button => button.classList.toggle('disableBtn'));
    setTimeout(() => { 
        gif1.classList.toggle('hideGif'); 
        gif2.classList.toggle('hideGif'); 
        btns.forEach(button => button.classList.toggle('disableBtn'));}, 560);
}

// function called once a player reaches 5 wins
function gameEnd(winner){
    playAgainMsg.textContent = `${winner} wins!!`;
    btns.forEach(button => button.classList.toggle('hideGif'));
}

// event listeners for all the buttons
btns.forEach(button => button.addEventListener('click', playRound));