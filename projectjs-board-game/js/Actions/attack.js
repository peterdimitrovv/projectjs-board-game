var attackButton = document.getElementById("attack");
var isPlayerOneTurn = true;

var attackHero = function(){
    debugger
    var attack = function(col, row){
        debugger
        if(isPlayerOneTurn === true){
            for(var i = 0; i < playerOneFigures.length; i++){
                if(playerOneFigures[i].row === row && playerOneFigures[i].col === col){
                    chosedHeroRow = playerOneFigures[i].row;
                    chosedHeroCol = playerOneFigures[i].col;
                    chosedHeroDistanceInAttack = playerOneFigures[i].speed;
                }
            }
        }
        else if(isPlayerOneTurn === false){
            for(var i = 0; i < playerTwoFigures.length; i++){
                if(playerTwoFigures[i].row === row && playerTwoFigures[i].col === col){
                    chosedHeroRow = playerTwoFigures[i].row;
                    chosedHeroCol = playerTwoFigures[i].col;
                    chosedHeroDistanceInAttack = playerTwoFigures[i].speed;
                }
            }
        }    
        if(isPlayerOneTurn === true){
            for(var i = 0; i < playerOneFigures.length; i++){
                for(var posibleAttack = 1; posibleAttack <= chosedHeroDistanceInAttack; posibleAttack++){
                    if(chosedHeroCol === playerOneFigures[i].col && chosedHeroRow === playerOneFigures[i].row && chosedHeroMovement === playerOneFigures[i].speed){
                        if((col === playerOneFigures[i].col + posibleAttack && row === playerOneFigures[i].row) || (col === playerOneFigures[i].col && row === playerOneFigures[i].row + posibleAttack) || (col === playerOneFigures[i].col - posibleAttack && row === playerOneFigures[i].row) || (col === playerOneFigures[i].col && row === playerOneFigures[i].row - posibleAttack)){
                            var damage = function (){
                                var opponentFigure = function(column, rowP2){
                                    debugger
                                    for(var j = 0; j < playerTwoFigures.length; j++){
                                        if(playerTwoFigures[j].row === rowP2 && playerTwoFigures[j].col === column){
                                            var firstRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var secondRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var thirdRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var sum = firstRandomNum + secondRandomNum + thirdRandomNum;
                                            var damages = playerOneFigures[i].attack - playerTwoFigures[j].armor;
                                            if(sum !== playerTwoFigures[i].health){
                                                playerTwoFigures[j].health -= damages;
                                            }
                                            else if(sum === 3){
                                                playerTwoFigures[j].health -= damages/2;
                                            }
                                            else{
                                                playerTwoFigures[j].health = playerTwoFigures[j].health;
                                            }

                                            if(playerTwoFigures[j].health < 1){
                                                alert('Hero is dead');
                                            }
                                        }
                                    }
                                    isPlayerOneTurn = false;
                                }
                                onClick(opponentFigure);
                            }
                            onClick(damage);
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
                        if((col === playerTwoFigures[i].col + posibleAttack && row === playerTwoFigures[i].row) || (col === playerTwoFigures[i].col && row === playerTwoFigures[i].row + posibleAttack) || (col === playerTwoFigures[i].col - posibleAttack && row === playerTwoFigures[i].row) || (col === playerTwoFigures[i].col && row === playerTwoFigures[i].row - posibleAttack)){
                            var damage = function (){
                                var opponentFigure = function(column, rowP1){
                                    for(var j = 0; j < playerOneFigures.length; j++){
                                        if(playerOneFigures[j].row === rowP1 && playerOneFigures[j].col === column){
                                            var firstRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var secondRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var thirdRandomNum = Math.floor(Math.random() * 6) + 1;
                                            var sum = firstRandomNum + secondRandomNum + thirdRandomNum;
                                            
                                            var damages = playerTwoFigures[i].attack - playerOneFigures[j].armor;
                                            if(sum !== playerOneFigures[i].health){
                                                playerOneFigures[j].health -= damages;
                                            }
                                            else if(sum === 3){
                                                playerOneFigures[j].health -= damages/2;
                                            }
                                            else{
                                                playerOneFigures[j].health = playerOneFigures[j].health;
                                            }

                                            if(playerOneFigures[j].health < 1){
                                                alert('Hero is dead');
                                            }
                                        }
                                    }
                                    isPlayerOneTurn = true;
                                }
                                onClick(opponentFigure);
                            }
                            onClick(damage);
                        }
                    }
                }
            }
            playerTurnForAction();
        }
    }
    onClick(attack)
}
