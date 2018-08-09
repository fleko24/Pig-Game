var scores = [0,0];
var roundScore = 0;
var activePlayer = 0; 

// Hide the dice
document.querySelector('.dice').style.display= 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
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
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add current Score to Global Score
    scores[activePlayer]+= roundScore;
    //Update the UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer]>=20)
    {   
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    } else {
            //Next PlAYER
            nextPlayer();
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
