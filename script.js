// declare variables here 

// NEED TO KEEP TRACK OF CLICKS 
let numberOfClicks = 0;
// this is going to select each of the individual squares
let box1 = document.getElementById('box-1');
box1.addEventListener('click', mark);

let box2 = document.getElementById('box-2');
box2.addEventListener('click', mark);

let box3 = document.getElementById('box-3');
box3.addEventListener('click', mark);

let box4 = document.getElementById('box-4');
box4.addEventListener('click', mark);

let box5 = document.getElementById('box-5');
box5.addEventListener('click', mark);

let box6 = document.getElementById('box-6');
box6.addEventListener('click', mark);

let box7 = document.getElementById('box-7');
box7.addEventListener('click', mark);

let box8 = document.getElementById('box-8');
box8.addEventListener('click', mark);

let box9 = document.getElementById('box-9');
box9.addEventListener('click', mark);
let turn = 'X';
function mark(){
  assignTurn();
  if (this.textContent !== 'O' && this.textContent !== 'X'){
    this.textContent = turn;
  }
  checkWin();
}
function assignTurn(){
  if (turn == 'O'){
    turn = 'X';
  }
  else if (turn == 'X'){
    turn = 'O';
  }
  return turn;
}

let xwin = 0;
let owin = 0;
let ties = 0;
// this function will (eventually) check whether X or O has won 
const winningSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function checkWin(){
    let winner = null;
    let contents = [];
    for (let i=0; i<9; i++){
        contents[i] = document.getElementsByClassName('tic-tac-toe-box')[i].innerHTML;
    }
    winningSet.forEach((set) => {
        if (contents[set[0]] && contents[set[0]] === contents[set[1]] && contents[set[0]] === contents[set[2]]){
            winner = contents[set[0]]; 
            window.alert(`${winner} is our winner!`);
            if (winner == 'X'){
                xwin++;
                document.getElementById('x-wins').textContent = `X has won ${xwin} games.`;
                for (let i=0; i<9; i++){
                document.getElementsByClassName('tic-tac-toe-box')[i].innerHTML = '';
                }
            }
            else if (winner == 'O'){
                owin++;
                document.getElementById('o-wins').textContent = `O has won ${owin} games.`;
                for (let i=0; i<9; i++){
                document.getElementsByClassName('tic-tac-toe-box')[i].innerHTML = '';
                }
            }
        }
    })
    if (contents[0] && contents[1] && contents[2] && contents[3] && contents[4] && contents[5] && contents[6] && contents[7] && contents[8] && winner == null){
        window.alert(`You've Tied!`);
        ties++;
        document.getElementById('ties').textContent = `There are ${ties} ties.`;
        for (let i=0; i<9; i++){
        document.getElementsByClassName('tic-tac-toe-box')[i].innerHTML = '';
        }
    }
}
