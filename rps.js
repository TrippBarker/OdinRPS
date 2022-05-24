const weapons = ['rock', 'paper', 'scissors'];
let playGame = true;
const btns = document.querySelectorAll('button');

function computerWep(){
    return Math.round(Math.random() * 2);
}

function playRound(e){
    compWep = weapons[computerWep()];
    humWep = this.id;
        if (humWep === compWep){
            console.log(`Both Comp and Human selected ${compWep}. It's a tie!`)
        } else if (
            humWep === 'rock' && compWep === 'scissors' ||
            humWep === 'paper' && compWep === 'rock' ||
            humWep === 'scissors' && compWep === 'paper'){
                console.log(`Computer chose ${compWep} and human chose ${humWep}, human wins!`);
        } else {
            console.log(`Computer chose ${compWep} and human chose ${humWep}, computer wins!`);
        }
}

function logText(e){
    console.log(this.classList.value);
}

btns.forEach(button => button.addEventListener('click', playRound));