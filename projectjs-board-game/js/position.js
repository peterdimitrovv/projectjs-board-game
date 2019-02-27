var cellSize = 80;

var onClick = function(callback){
    var board_click = function(e) {
        var cellX = Math.floor(e.clientX/cellSize);
        var cellY = Math.floor(e.clientY/cellSize);

        gameBoard.removeEventListener("click", board_click);
        callback(cellX, cellY);
    }
    gameBoard.addEventListener("click", board_click);
}