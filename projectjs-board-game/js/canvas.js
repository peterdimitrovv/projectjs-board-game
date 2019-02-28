var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');

createObstacles();
var createBoard = function(){
    for(var x=0; x<9; x++){
        for(var y=0; y<7; y++){
            context.beginPath();
            let fillStyle = "#b6b7ba";
    
            var obstacles = getObstacles();
            if (obstacles.filter(o => o.col == x && o.row == y).length !== 0){
                fillStyle = '#643C16';
            }
            else {
                if(y<2 || y>4){
                    if(x%2 != y%2){
                        fillStyle = "black";
                    }
                    else{
                        fillStyle = "grey";
                    }
                }
            }
            context.rect(80*x,80*y,80,80);
            context.fillStyle = fillStyle;
            context.fill();
            context.stroke();
        }
          
    }
}

playersTurn();

playerTurnForAction();
