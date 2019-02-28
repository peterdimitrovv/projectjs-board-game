var isPlayerOneTurn = true;

var healHero = function(){
    var heal = function(col, row){
        debugger
        if(isPlayerOneTurn === true){
            for(var i = 0; i < playerOneFigures.length; i++){
                if(playerOneFigures[i].row === row && playerOneFigures[i].col === col){
                    var firstRandomNum = Math.floor(Math.random() * 6) + 1;
                    var health = playerOneFigures[i].health;
                    health += firstRandomNum;
                    playerOneFigures[i].health = health;
                    var secondRandomNum = Math.floor(Math.random() * 6) + 1;
                    if(secondRandomNum % 2 !== 0){
                        alert ('Player A turn again');
                        playerTurnForAction();
                    }
                    else{
                        isPlayerOneTurn === false;
                        playerTurnForAction();
                    }
                }
            }
        }
        else if(isPlayerOneTurn === false){
            debugger
            for(var i = 0; i < playerTwoFigures.length; i++){
                if(playerTwoFigures[i].row === row && playerTwoFigures[i].col === col){
                    var firstRandomNum = Math.floor(Math.random() * 6) + 1;
                    var health = playerTwoFigures[i].health;
                    health += firstRandomNum;
                    playerTwoFigures[i].health = health;
                    var secondRandomNum = Math.floor(Math.random() * 6) + 1;
                    if(secondRandomNum % 2 !== 0){
                        alert ('Player B turn again');
                       playerTurnForAction();
                    }
                    else{
                        isPlayerOneTurn === true;
                        playerTurnForAction();
                    }
                }
            }
        }
        
    }
    debugger
    onClick(heal);
};