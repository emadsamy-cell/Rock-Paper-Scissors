let array =['rock' , 'paper' , 'scissors'];

function getComputerChoice(){
    let computer = array[Math.floor(Math.random() *3 )];

    return computer; 
}
function judge(playerSelection , computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 'Draw!';
    }
    let lose = 'You Lose! ';
    let win = 'You Win! ';
    if( playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            return lose + computerSelection + ' beats ' + playerSelection;
        }
        else{
            return win + playerSelection + ' beats ' + computerSelection;
        }
    }
    else if( playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            return lose + computerSelection + ' beats ' + playerSelection;
        }
        else{
            return win + playerSelection + ' beats ' + computerSelection;
        }
    }
    else{
        if(computerSelection == 'rock'){
            return lose + computerSelection + ' beats ' + playerSelection;
        }
        else{
            return win + playerSelection + ' beats ' + computerSelection;
        }
    }
}


// get what user clicked 

let buttons = document.querySelectorAll('button');
let result = document.querySelector('#status');
let backgroud = document.querySelector('#winner-loser-draw');
console.log(backgroud);
console.log(result);
buttons.forEach(btn => {
    btn.addEventListener('click',function(event){
        let playerSelection = btn.id;
        let computerSelection = getComputerChoice();
        let status = judge(playerSelection,computerSelection) ;
        //clear backgorund
        backgroud.classList.remove('lose');
        backgroud.classList.remove('draw');
        backgroud.classList.remove('draw');
        if(status.search('Win') != -1){
            backgroud.classList.add('win');
        }
        else if(status.search('Lose') != -1){
            backgroud.classList.add('lose');
        }
        else{
            backgroud.classList.add('draw');
        }
        result.textContent = status;
    });
        
});

