const weapons = ['rock', 'paper', 'scissors'];
let playGame = true;



function computerWep(){
    return Math.round(Math.random() * 2);
}

function game(){
    let compScore = 0;
    let humScore = 0;
    let tie = 0;
    let humWep;
    let compWep;
    while (compScore !== 5 && humScore !== 5){
        compWep = weapons[computerWep()];
        humWep = prompt('Please enter your weapon: [Rock] [Paper] [Scissors]')
        if (humWep === compWep){
            tie ++;
            alert(`Both Comp and Human selected ${compWep}. It's a tie!`)
        } else if (
            humWep === 'rock' && compWep === 'scissors' ||
            humWep === 'paper' && compWep === 'rock' ||
            humWep === 'scissors' && compWep === 'paper'){
                humScore ++;
                alert(`Computer chose ${compWep} and human chose ${humWep}, human wins!`);
        } else {
            compScore ++;
            alert(`Computer chose ${compWep} and human chose ${humWep}, computer wins!`);
        }
    }
    (humScore > compScore) ? alert('Human wins!!!') : alert('Computer wins!!!');
    alert(`computer: ${compScore} human: ${humScore} ties: ${tie}`);
}