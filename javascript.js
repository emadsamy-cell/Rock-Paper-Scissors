
let array =['rock' , 'paper' , 'scissors'];

function getComputerChoice(){
    let computer = array[Math.floor(Math.random() *3 )];

    return computer; 
}
array.forEach(child => {
    console.log(child)
});
for(let child of array){
    console.log(child)
}
function Lcat(string){
    return (string[0] == 'p')
}

let filterd = array.map(Lcat)

filterd.forEach(element => {
    console.log(element)
});

function judge(playerSelection , computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection)
    if(playerSelection == computerSelection){
        return 'Draw!';
    }
    let lose = 'You Lose! ';
    let win = 'You win! ';
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

let playerSelection = 'RocK';
let computerSelection = getComputerChoice();
