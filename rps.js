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

function computerWep(){
    return Math.round(Math.random() * 2);
}

function playRound(e){
    compWep = weapons[computerWep()];
    humWep = this.id;
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
    } else if (humWep === 'yes'){
        humScore = 0;
        tieScore = 0;
        compScore = 0;
        playAgainMsg.textContent = 'BLUE V. RED';
        btns.forEach(button => button.classList.toggle('hideGif'));
        playingGif.classList.toggle('hideGif');
        ssGif.classList.toggle('hideGif');
        runGif(ssGif, ssGif)
    } else if (humWep === 'no'){
        btns.forEach(button => button.classList.add('hideGif'));
        btns.forEach(button => button.classList.toggle('hideGif'));
        playAgainMsg.textContent = 'BYE!';
    } else {
        console.log("Something happened that I did not predict!");
    }
    if(humScore === 5){
        gameEnd('BLUE');
    } else if(compScore === 5){
        gameEnd('RED');
    }
}

function runGif(gif1, gif2){
    gif2.src = gif2.src+"?a="+Math.random();
    gif1.classList.toggle('hideGif');
    gif2.classList.toggle('hideGif');
    btns.forEach(button => button.classList.toggle('disableBtn'));
    setTimeout(() => 
    {gif1.classList.toggle('hideGif'); 
    gif2.classList.toggle('hideGif'); 
    btns.forEach(button => button.classList.toggle('disableBtn'));if (humScore === 5){
        runKnockOut(rloseGif, rdownGif);
    }
    if (compScore === 5){
        runKnockOut(bloseGif, bdownGif)
    }}, 980);
    human.textContent = `BLUE: ${humScore}`;
    tie.textContent = `TIE: ${tieScore}`;
    computer.textContent = `RED: ${compScore}`;
}

function runKnockOut(gif1, gif2){
    playingGif = gif2;
    gif1.src = gif1.src+"?a="+Math.random();
    gif2.src = gif2.src+"?a="+Math.random();
    ssGif.classList.toggle('hideGif');
    gif1.classList.toggle('hideGif');
    btns.forEach(button => button.classList.toggle('disableBtn'));
    setTimeout(() => 
    {gif1.classList.toggle('hideGif'); 
    gif2.classList.toggle('hideGif'); 
    btns.forEach(button => button.classList.toggle('disableBtn'));}, 560);
}

function gameEnd(winner){
    playAgainMsg.textContent = `${winner} wins! Play Again?`;
    btns.forEach(button => button.classList.toggle('hideGif'));
}

btns.forEach(button => button.addEventListener('click', playRound));