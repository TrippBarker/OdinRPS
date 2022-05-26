# OdinRPS

This is a 'rock, paper, 'scissors' style game I am working on as part of the Odin Project.

I wanted to play around with my working knowledge of how HTML, CSS and JavaScript work together.
I ended up deciding to make a little fighting game to replace the typical rock, paper, scissors,
game works as follows:

    Punch beats Jump
    Jump beats Kick
    Kick beats punch

To animate the page I loaded up a TON of tiny little gif files since I already know how to make those.
I do not believe that this is the optimum way in order to do this, and would like to come back to the
project at a later date to try and change the gifs out for a sprite sheet and animate it through JavaScript.

The JavaScript logic simply uses Math.round(Math.random() * 2); to generate a number between 0 - 2
which is then used to select a 'move' from an array that stores 'jump', 'kick', 'punch'. This is then
compared to the user's choice and the corrisponding gif is put through the "runGif" function and the score
board is incremented.

Once a player reaches 5 wins the game is over and a knock-out animation is played. User is promted an option
to play again.