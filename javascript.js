const score =JSON.parse(localStorage.getItem('score')) || 
            {
                wins:0,
                looses:0,
                ties:0
            };

            updateScore();
        
        //  if(!score){
        //     score ={
        //         wins:0,
        //         looses:0,
        //         ties:0
        //     };
        //  }

        function playGame(playerMove){

            const computerMove= pickComputerMove();
        
            let result='';

        if(playerMove === 'Scissors'){
        if(computerMove === 'rock'){
            result = 'You lose';
        }else if(computerMove === 'paper'){
            result='You Win';
        }else if(computerMove === 'Scissors'){
            result='Tie'
        }
          }
          else if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result='You lose';
        }else if(computerMove === 'Scissors'){
            result='You Win'
        }
          }
          else if(playerMove === 'paper'){

            if(computerMove === 'rock'){
                result = `You Win`;
            }else if(computerMove === 'paper'){
                result='Tie';
            }else if(computerMove === 'Scissors'){
                result='You lose'
            }
          }


          if(result === `You Win`){
            score.wins += 1;
          } else if(result === 'You lose') {
            score.looses += 1;
          } else if('Tie'){
            score.ties += 1;
          }

        localStorage.setItem('score', JSON.stringify(score));

        updateScore();

          document.querySelector('.js-result').innerHTML=result;

          document.querySelector('.js-moves').innerHTML=`
           You
    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
    Computer`;

        }


        function updateScore(){
            document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} Looses : ${score.looses} Ties : ${score.ties}`;
        }
        
        function pickComputerMove() {
            const randomNumber = Math.random()

            console.log(randomNumber);

            let computerMove = '';
        if(randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'rock';
        }else if(randomNumber  >= 1/3 && randomNumber < 2/3){
            computerMove = 'paper'
        }else if(randomNumber >=2/3 && randomNumber < 1){
            computerMove = 'scissors'
        }
        return computerMove;
                }