var playerTurnForAction = function(){
    var moveButton = document.getElementById("move");
    var healButton = document.getElementById("heal");
    var attackButton = document.getElementById("attack");

    moveButton.addEventListener("click", moveHero);
    healButton.addEventListener("click", healHero);
    attackButton.addEventListener("click", attackHero);
}