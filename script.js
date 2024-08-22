const cells =document.querySelectorAll(".cell");
const statusDisplay = document.getElementById ('status');
const restarButton = document.getElementById('restartButton');

let board =['', '', '', '', '', '', '', '', '']
let currentPlayer="X";
let isGameActive="true";

const statusMessage = {
X:"jugador X ha ganado!",
O:"juagdor O ha ganado !",
T:"Es un Empate",
};

const winnigconditions =[
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1.4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
    
];
const handleCellClick = (event) => {
    const cell= event.target;
    const cellIndex = cell.getAttribute ('data-cell-index');

    if (board [cellIndex] !== '' || !isGameActive){
        return;
    }
    updateCell(cell , cellIndex);
    checkForWinner();


}
const updateCell=(cell, index) => {
    board[index]= currentPlayer;
    cell.textContent=currentPlayer;

}
const checkForWinner= () => {
    let roundWon = false ;

    for (let i=0; i < winnigconditions.length; i++){
        const[a,,b,c]= winnigconditions[i];
        if (board [a]=== '' || board[b]=== '' || board[c] === ''){
            continue;
        }
        if (board [a] === board[b] && board[a]=== board[c]){
            roundWon=true;
            break;
        }
    }
    if (roundWon){
        statusDisplay.textContent=statusMessage[currentPlayer];
        isGameActive=false;
        return;
    }
    if (!board.includes('')){
        statusDisplay.textContent = statusMessage.T;
        isGameActive = false;
        return;
    }
    currentPlayer =currentPlayer === 'X' ? 'O' : 'X';
} 
const restartGame = () => {
    isGameActive =true;
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = '';
    cells.forEach(cell => {
        cell.textContent ='';
    });
}
cells.forEach (cells => {
    cell.addEventListener('click',handleCellClick)
});
restarButton.addEventListener('click',restartGame);