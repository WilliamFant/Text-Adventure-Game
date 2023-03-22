// Text adventure game

const enter = "Please enter 1 or 2 for your answer ";

const gameOver = "You lose GAME OVER ";

const start = "Welcome to ghostbusters text adventure game.Click 'Ok' to Start ";

const q1 = `You are trying to catch a ghost called Slimer at the Sedgwick hotel but have not seen him yet should you ...
1. take the elevator to the 12th floor
OR
2. wait in the lobby to see if he shows up
${enter}`;

const gameOver1 = `You never see Slimer and you give up and become a talk show host ${gameOver}`;

const q2 = `When you get off the elevator something startles you! Should you...
1. look to see what it is.
OR
2. Wait and see what happens`

const gameOver2 = `It was the maid and you about killed her ${gameOver}`

const q3 = `it was just the hotel maid sso you walk around to look for slimer and you spot him. Should you...
1. Shoot at him with a proton pack.
OR
2.Hide and wait to see where he goes
${enter}`

const gameOver3 = `Slimer hears you and flies at you and you get slimed ${gameOver}`

const q4 = `You see that slimer goes into the ball room so you quickly call the others ans you see him flying around. Should you...
1. Shoot at him with a proton pack.
OR
2.Put 2 proton packs together and try and create a more powerful shot. (aka crossing the streams) 
${enter}`

const gameOver4 = `All life as you know it stops instantainaisly and every molecule in your body explodes at the speed of light ${gameOver}`

const q5 = `you wrangles slimer with your shot and the ghost trap is set under him and you are tempted to look at it should you... 
1.look at it 
Or 
2.look at slimer
${enter}`

const gameOver5 = `you looked at the trap and it blinded you`

const win = "You win! you caught slimer and you go home."


// alert user to start
alert(start);

// sets userinput to the users entry ans allows for the hange with let
let userInput = prompt(q1);

if(userInput == 1){
    userInput = prompt(q2)
    if(userInput == 1){
        userInput = prompt(q3)
        if(userInput == 2){
            userInput = prompt(q4)
            if(userInput == 1){
                userInput =  prompt(q5)
                if(userInput == 2){
                    alert(win)
                }else{
                    alert(gameOver5)
                }
            }else{
                alert(gameOver4)
            }
        }else{
            alert(gameOver3)
        }
    }else{
        alert(gameOver2)
    }
} else{
    alert(gameOver1);
};

