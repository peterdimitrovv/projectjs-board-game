var gameBoard = document.getElementById("game-board");
var context = gameBoard.getContext('2d');

var getKnight = function(row, col){
    var knight = {
        attack: 8,
        armor: 3,
        health: 15,
        attackedSquares: 1,
        speed: 1,
        row,
        col,
        imgId: 'knight'
    };
    return knight;
}

var getElf = function(row, col){
    var elf = {
        attack: 5,
        armor: 1,
        health: 10,
        attackedSquares: 3,
        speed: 3,
        row, 
        col,
        imgId: 'elf'

    };
    return elf;
}

var getDwarf = function(row, col){
    var dwarf = {
        attack: 6, 
        armor: 2,
        health: 12, 
        attackedSquares: 2,
        speed: 2,
        row,
        col,
        imgId: 'dwarf'

    };
    return dwarf;
}

var playerOneDwarf = document.getElementById("dwarf1");
var playerOneKnight = document.getElementById("knight1");
var playerOneElf = document.getElementById("elf1");

var playerTwoDwarf = document.getElementById("dwarf2");
var playerTwoKnight = document.getElementById("knight2");
var playerTwoElf = document.getElementById("elf2");

playerOneDwarf.addEventListener("click", getDwarf);
playerOneKnight.addEventListener("click", getKnight);

playerTwoDwarf.addEventListener("click", getDwarf);
playerTwoKnight.addEventListener("click", getKnight);
playerTwoElf.addEventListener("click", getElf);