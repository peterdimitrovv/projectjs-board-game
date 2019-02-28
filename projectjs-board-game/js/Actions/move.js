var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');
var moveButton = document.getElementById("move");
var isPlayerOneTurn = true;

var moveHero = function(){
    moveButton.removeEventListener("click", moveButton);
    
    var move = function(col, row){
        var chosedHeroMovement = null;
        var chosedHeroRow = null;
        var chosedHeroCol = null;
        var heroMove = function(col, row){
            if(isPlayerOneTurn === true){
                for(var i = 0; i < playerOneFigures.length; i++){
                    for(var posibleMovement = 1; posibleMovement <= chosedHeroMovement; posibleMovement++){
                        if(chosedHeroCol === playerOneFigures[i].col && chosedHeroRow === playerOneFigures[i].row && chosedHeroMovement === playerOneFigures[i].speed){
                            if((col === playerOneFigures[i].col + posibleMovement && row === playerOneFigures[i].row) || (col === playerOneFigures[i].col && row === playerOneFigures[i].row + posibleMovement) || (col === playerOneFigures[i].col + posibleMovement && row === playerOneFigures[i].row + posibleMovement) || (col === playerOneFigures[i].col - posibleMovement && row === playerOneFigures[i].row) || (col === playerOneFigures[i].col && row === playerOneFigures[i].row - posibleMovement) || (col === playerOneFigures[i].col - posibleMovement && row === playerOneFigures[i].row - posibleMovement)){
                                playerOneFigures[i].row = row;
                                playerOneFigures[i].col = col; 
                                context.clearRect(0, 0, 720, 560);
                                createBoard();
                                drawHeroes();
                                isPlayerOneTurn = false;
                            }
                        }
                    }
                }
                playerTurnForAction();
            }
            else if(isPlayerOneTurn === false){
                for(var i = 0; i < playerTwoFigures.length; i++){
                    for(var posibleMovement = 1; posibleMovement <= chosedHeroMovement; posibleMovement++){
                        if(chosedHeroCol === playerTwoFigures[i].col && chosedHeroRow === playerTwoFigures[i].row && chosedHeroMovement === playerTwoFigures[i].speed){
                            if((col === playerTwoFigures[i].col + posibleMovement && row === playerTwoFigures[i].row) || (col === playerTwoFigures[i].col && row === playerTwoFigures[i].row + posibleMovement) || (col === playerTwoFigures[i].col + posibleMovement && row === playerTwoFigures[i].row + posibleMovement) || (col === playerTwoFigures[i].col - posibleMovement && row === playerTwoFigures[i].row) || (col === playerTwoFigures[i].col && row === playerTwoFigures[i].row - posibleMovement) || (col === playerTwoFigures[i].col - posibleMovement && row === playerTwoFigures[i].row - posibleMovement)){
                                playerTwoFigures[i].row = row;
                                playerTwoFigures[i].col = col; 
                                context.clearRect(0, 0, 720, 560);
                                createBoard();
                                drawHeroes();
                                isPlayerOneTurn = true;
                            }
                        }
                    }
                }
                playerTurnForAction();
            }
        }
        if(isPlayerOneTurn === true){
            for(var i = 0; i < playerOneFigures.length; i++){
                if(playerOneFigures[i].row === row && playerOneFigures[i].col === col){
                    chosedHeroRow = playerOneFigures[i].row;
                    chosedHeroCol = playerOneFigures[i].col;
                    chosedHeroMovement = playerOneFigures[i].speed;
                    onClick(heroMove);
                }
            }
        }
        else if(isPlayerOneTurn === false){
            for(var i = 0; i < playerTwoFigures.length; i++){
                if(playerTwoFigures[i].row === row && playerTwoFigures[i].col === col){
                    chosedHeroRow = playerTwoFigures[i].row;
                    chosedHeroCol = playerTwoFigures[i].col;
                    chosedHeroMovement = playerTwoFigures[i].speed;
                    onClick(heroMove);
                }
            }
        }
    }
    onClick(move);
};