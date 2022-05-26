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


function computerWep(){
    return Math.round(Math.random() * 2);
}

function playRound(e){
    compWep = weapons[computerWep()];
    humWep = this.id;
        if(humWep === 'jump' && compWep === 'jump'){
            runGif(ssGif, bjGif);
        } else if(humWep === 'kick' && compWep === 'kick'){
            runGif(ssGif, bkGif);
        } else if(humWep === 'punch' && compWep === 'punch'){
            runGif(ssGif, bpGif)
        } else if (humWep === 'jump' && compWep === 'kick'){
            runGif(ssGif, ljrkGif);
        } else if (humWep === 'jump' && compWep === 'punch'){
            runGif(ssGif, ljrpGif)
        } else if (humWep === 'kick' && compWep === 'jump'){
            runGif(ssGif, lkrjGif);
        } else if (humWep === 'kick' && compWep === 'punch'){
            runGif(ssGif, lkrpGif);
        } else {
            console.log(`Computer chose ${compWep} and human chose ${humWep}, computer wins!`);
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
    btns.forEach(button => button.classList.toggle('disableBtn'));}, 980);
}

function logText(e){
    console.log(this.classList.value);
}

btns.forEach(button => button.addEventListener('click', playRound));