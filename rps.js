const weapons = ['rock', 'paper', 'scissors'];
let playGame = true;
const btns = document.querySelectorAll('button');
const ssGif = document.querySelector('#ss');
const bjGif = document.querySelector('#bj');

function computerWep(){
    return Math.round(Math.random() * 2);
}

function playRound(e){
    compWep = weapons[computerWep()];
    humWep = this.id;
        if (humWep === compWep){
            console.log(`Both Comp and Human selected ${compWep}. It's a tie!`)
            runGif(ssGif, bjGif);

        } else if (
            humWep === 'rock' && compWep === 'scissors' ||
            humWep === 'paper' && compWep === 'rock' ||
            humWep === 'scissors' && compWep === 'paper'){
                console.log(`Computer chose ${compWep} and human chose ${humWep}, human wins!`);
        } else {
            console.log(`Computer chose ${compWep} and human chose ${humWep}, computer wins!`);
        }
}

function runGif(gif1, gif2){
    gif1.classList.toggle('hideGif');
    gif2.classList.toggle('hideGif');
    btns.forEach(button => button.classList.toggle('disableBtn'));
    setTimeout(() => 
    {gif1.classList.toggle('hideGif'); 
    gif2.classList.toggle('hideGif'); 
    btns.forEach(button => button.classList.toggle('disableBtn'));}, 980);
}

function logText(e){
    console.log(this.classList.value);
}

btns.forEach(button => button.addEventListener('click', playRound));