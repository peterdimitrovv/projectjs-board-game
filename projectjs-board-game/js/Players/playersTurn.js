var isPlayerOneTurn = true;

var playersTurn = function(){
    if(isPlayerOneTurn === true){
        playerOneTurn();
    }
    else{
        playerTwoTurn();
    }
}
