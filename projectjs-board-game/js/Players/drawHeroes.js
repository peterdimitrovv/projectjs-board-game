var drawHeroes = function(){
    playerTwoFigures
    .forEach(f => {
        var img = document.getElementById(f.imgId);
        context.drawImage(img, f.col * 80, f.row * 80);
    })

    playerOneFigures
    .forEach(f => {
        var img = document.getElementById(f.imgId);
        context.drawImage(img, f.col * 80, f.row * 80, 80, 80);
    })
}