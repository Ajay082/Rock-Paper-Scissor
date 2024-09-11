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

            let isAutoplaying = false;
            let intervalId;

            function autoplay(){
                if(!isAutoplaying){
               intervalId= setInterval(()=>{
                let playerMove=pickComputerMove();
                 playGame(playerMove);
                }, 1000);
                isAutoplaying = true;
            }
            else{
                clearInterval(intervalId);
                isAutoplaying=false;
            }
        }

        document.querySelector('.rock-btn').addEventListener('click', ()=>{
            playGame('rock');
        });

        document.querySelector('.paper-btn').addEventListener('click', ()=>{
            playGame('paper');
        });

        document.querySelector('.scissor-btn').addEventListener('click', ()=>{
            playGame('scissors');
        });

        document.querySelector('.reset-but').addEventListener('click', ()=>{
            score.wins=0;
            score.looses=0;
            score.ties=0;
            localStorage.removeItem('score');
            updateScore();
        })
        document.querySelector('.autoplay-btn').addEventListener('click', ()=>{
            autoplay();
        } )


        // add event listener to reset and auto buttons // added


        document.body.addEventListener('keydown', (event)=>{
                if(event.key === 'r'){
                    playGame('rock');
                }else if(event.key === 'p'){
                    playGame('paper');
                }else if(event.key === 's'){
                    playGame('scissors');
                }
        })


        function playGame(playerMove){

            const computerMove= pickComputerMove();
        
            let result='';

        if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You lose';
        }else if(computerMove === 'paper'){
            result='You Win';
        }else if(computerMove === 'scissors'){
            result='Tie'
        }
          }
          else if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result='You lose';
        }else if(computerMove === 'scissors'){
            result='You Win'
        }
          }
          else if(playerMove === 'paper'){

            if(computerMove === 'rock'){
                result = `You Win`;
            }else if(computerMove === 'paper'){
                result='Tie';
            }else if(computerMove === 'scissors'){
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