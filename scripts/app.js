var scores, roundScore, activePlayer, gamePlaying; 

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
   
    if (gamePlaying) {
        //1. Random Number
        var dice = Math.floor(Math.random()*6)+1;
        //2. Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display= 'block';
        diceDOM.src = './resources/img/dice-' + dice + '.png';
        //3. Update the roundScore If the rolled number wasn't 1
        if (dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                //Next player
                nextPlayer();
               }
    }
   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying){
      //Add current Score to Global Score
       scores[activePlayer]+= roundScore;
       //Update the UI
       document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
       //Check if player won the game
       if (scores[activePlayer]>=100)
       {   
           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
           gamePlaying = false;        
       } else {
                //Next PlAYER
                nextPlayer();
              }  
    }
});

function nextPlayer(){
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
    document.querySelector('.player-'+ activePlayer +'-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // Hide the dice
    document.querySelector('.dice').style.display= 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}

document.querySelector('.btn-new').addEventListener('click', init);