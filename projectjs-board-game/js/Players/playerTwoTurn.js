var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');

var playerTwoTurn = function(){
    context.clearRect(0, 0, 720, 560);
    createBoard();
    for(var x=0; x<9; x++){
        for(var y=0; y<5; y++){
            context.beginPath();
            context.fillStyle = 'red';
            context.rect(80*x,80*y,80,80);
            context.fill();
            context.stroke();
            context.closePath();
        }
    }
}