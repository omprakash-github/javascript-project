'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess)
    {
        document.querySelector('.message').textContent='no number enter please enter some';
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent='correct Number';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;

        }
    }
    else if(guess>secretNumber)
    {
        if(score>1){

            document.querySelector('.message').textContent='guess is to hign';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else 
        {
            document.querySelector('.message').textContent='you lost the game!';
        }

    }

    else if(guess < secretNumber)
    { 
        

        if(score > 1){

            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent='text is too low';
        }

        else 
        {
            document.querySelector('.message').textContent='you lost the game!';
        }
      
         
    }
});
document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='start guessing...';
    document.querySelector('.score').textContent='?';
    document.querySelector('.number').textContent='?';

    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';


})