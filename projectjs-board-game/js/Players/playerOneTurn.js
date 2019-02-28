var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');
var playerOneFigures = [];
var playerOneDwarfsCounter = 0;
var playerOneKnightsCounter = 0;
var playerOneElfsCounter = 0;

var playerOneTurn = function(){
    context.clearRect(0, 0, 720, 560);
    createBoard();
    for(var x=0; x<9; x++){
        for(var y=2; y<7; y++){
            context.beginPath();
            context.fillStyle = 'red';
            context.rect(80*x,80*y,80,80);
            context.fill();
            context.stroke();
            context.closePath();
        }
    }
    
    playerOneFigures
        .forEach(f => {
            var img = document.getElementById(f.imgId);
            context.drawImage(img, f.col * 80, f.row * 80, 80, 80);
        	})

    var dwarfPlacing = function() {
        playerOneDwarf.removeEventListener("click", dwarfPlacing);
        playerOneKnight.removeEventListener("click", knightPlacing);
        playerOneElf.removeEventListener("click", elfPlacing);

        var putDwarfsForFirstPlayer = function(col, row){
            if(row<2 && playerOneDwarfsCounter < 2){
                    var dwarf = getDwarf(row, col);
                    playerOneFigures.push(dwarf);
                    playerOneDwarfsCounter++;
                    isPlayerOneTurn = false;
                    playersTurn();
            }
            else{
                playersTurn();
            }
        }
        onClick(putDwarfsForFirstPlayer);
    };
    var knightPlacing = function(){
        playerOneDwarf.removeEventListener("click", dwarfPlacing);
        playerOneKnight.removeEventListener("click", knightPlacing);
        playerOneElf.removeEventListener("click", elfPlacing);

        var putKnightsForFirstPlayer = function(col, row){
            if(row<2 && playerOneKnightsCounter < 2){
                var knight = getKnight(row, col);
                playerOneFigures.push(knight);
                playerOneKnightsCounter++;
                isPlayerOneTurn = false;
                playerOneKnight.removeEventListener("click", knightPlacing);
                playersTurn();
            }
            else{
                playersTurn();
            }
        }
        onClick(putKnightsForFirstPlayer);
    };
    var elfPlacing = function(){
        playerOneDwarf.removeEventListener("click", dwarfPlacing);
        playerOneKnight.removeEventListener("click", knightPlacing);
        playerOneElf.removeEventListener("click", elfPlacing);

        var putElfsForFirstPlayer = function(col, row){
            if(row<2 && playerOneElfsCounter < 2){
                var elf = getElf(row, col);
                playerOneFigures.push(elf);
                playerOneElfsCounter++;
                isPlayerOneTurn = false;
                playersTurn();
            }
            else{
                playersTurn();
            }
        }
        onClick(putElfsForFirstPlayer);
    }
    playerOneDwarf.addEventListener("click", dwarfPlacing);
    playerOneKnight.addEventListener("click", knightPlacing);
    playerOneElf.addEventListener("click", elfPlacing);
}