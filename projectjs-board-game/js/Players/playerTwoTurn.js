var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');
var playerTwoFigures = [];
var playerTwoDwarfsCounter = 0;
var playerTwoKnightsCounter = 0;
var playerTwoElfsCounter = 0;

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

    playerTwoFigures
        .forEach(f => {
            var img = document.getElementById(f.imgId);
            context.drawImage(img, f.col * 80, f.row * 80);
        })

    var dwarfPlacing = function() {
        playerTwoDwarf.removeEventListener("click", dwarfPlacing);
        playerTwoKnight.removeEventListener("click", knightPlacing);
        playerTwoElf.removeEventListener("click", elfPlacing);

        var putFigureForSecondPlayer = function(col, row){
            if(row > 4 && playerTwoDwarfsCounter < 2){
                var dwarf = getDwarf(row, col);
                playerTwoFigures.push(dwarf);
                playerTwoDwarfsCounter++;
                isPlayerOneTurn = true;
                if(playerTwoDwarfsCounter === 2 && playerTwoElfsCounter === 2 && playerTwoKnightsCounter === 2){
                    createBoard();
                    drawHeroes();
                }
                else{
                    playersTurn();
                }
            }
            else{
                playersTurn();
            }
        }
        onClick(putFigureForSecondPlayer);
    };

    var knightPlacing = function(){
        playerTwoDwarf.removeEventListener("click", dwarfPlacing);
        playerTwoKnight.removeEventListener("click", knightPlacing);
        playerTwoElf.removeEventListener("click", elfPlacing);

        var putFigureForSecondPlayer = function(col, row){
            if(row > 4 && playerTwoKnightsCounter < 2){
                var knight = getKnight(row, col);
                playerTwoFigures.push(knight);
                playerTwoKnightsCounter++;
                isPlayerOneTurn = true;
                if(playerTwoDwarfsCounter === 2 && playerTwoElfsCounter === 2 && playerTwoKnightsCounter === 2){
                    createBoard();
                    drawHeroes();
                }
                else{
                    playersTurn();
                }
            }
            else{
                playersTurn();
            }
        }
        playerTwoKnight.removeEventListener("click", knightPlacing);
        onClick(putFigureForSecondPlayer);
    };
    
    function elfPlacing(){
        playerTwoDwarf.removeEventListener("click", dwarfPlacing);
        playerTwoKnight.removeEventListener("click", knightPlacing);
        playerTwoElf.removeEventListener("click", elfPlacing);

        var putFigureForSecondPlayer = function(col, row){
            if(row > 4 && playerTwoElfsCounter < 2){
                var elf = getElf(row, col);
                playerTwoFigures.push(elf);
                playerTwoElfsCounter++;
                isPlayerOneTurn = true;
                if(playerTwoDwarfsCounter === 2 && playerTwoElfsCounter === 2 && playerTwoKnightsCounter === 2){
                    createBoard();

                   drawHeroes();
                }
                else{
                    playersTurn();
                }
            }
            else{
                playersTurn();
            }
        }
        playerTwoElf.removeEventListener("click", elfPlacing);
        onClick(putFigureForSecondPlayer);
    };

    if(playerTwoDwarfsCounter === 2 && playerTwoElfsCounter === 2 && playerTwoKnightsCounter === 2){
        context.clearRect(0, 0, 720, 560);
        createBoard();
    }

    playerTwoDwarf.addEventListener("click", dwarfPlacing);
    playerTwoKnight.addEventListener("click", knightPlacing);
    playerTwoElf.addEventListener("click", elfPlacing);
}