/*******************************************************************************
So how do you play Pig Game?
Choose a player to go first. That player throws a die and scores as many points
as the total shown on the die providing the die doesn’t roll a 1. The player may
continue rolling and accumulating points (but risk rolling a 1) or end his
turn.

If the player rolls a 1 his turn is over, he loses all points he accumulated
that turn, and he passes the die to the next player.

Play passes from player to player until a winner is determined.

How do you win?
The first player to accumulate 100 or more points wins the game.
*******************************************************************************/
var gamePlaying;
init();

document.querySelector('#dice').addEventListener('click',function(){
  if(gamePlaying){
    // 1. Generate Random number
    var dice = Math.floor(Math.random()*6)+1;
    // 2. Display the result
    var diceDOM = document.querySelector('#dice_img');
    diceDOM.style.display = 'block';
    img_src_change = 'C:\\Users\\KNarayanan\\Documents\\others\\my_website\\image\\dice_' + dice + '.png';
    document.querySelector('#img-id').src = img_src_change;
    // 3. update the rounds if the rolled number is not 1
    if (dice !== 1){
      current_score += dice;
      document.getElementById('current-score-'+active_player).textContent = current_score;
    }else{
      next_player();
      }
  }
});

document.querySelector('#hold').addEventListener('click', function(){
  if(gamePlaying){
    total_score[active_player] += current_score;
    document.querySelector('#score-'+active_player).textContent = total_score[active_player];
    if (total_score[active_player] >= 30){
      document.querySelector('#player-title-'+active_player).textContent = 'Winner!';
      document.querySelector('#dice_img').style.display = 'none';
      gamePlaying = false;
    }else{
      next_player();
    }
  }
});

document.querySelector('#new-game').addEventListener('click', init);

function next_player(){
  current_score = 0;
  document.getElementById('current-score-'+active_player).textContent = current_score;
  active_player === 0 ? active_player = 1 : active_player = 0;
  document.querySelector('.player_0_panel').classList.toggle('active');
  document.querySelector('.player_1_panel').classList.toggle('active');
}

function init(){
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-score-0').textContent = '0';
  document.getElementById('current-score-1').textContent = '0';
  document.querySelector('#dice_img').style.display = 'none';
  active_player = 0;
  current_score = 0;
  total_score = [0,0];
  document.querySelector('#player-title-0').textContent = 'Player 1';
  document.querySelector('#player-title-1').textContent = 'Player 2';
  gamePlaying = true;
}
