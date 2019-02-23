var getRandomNum = function (maxNum, minNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}
const obstacles = [];

var createObstacles = function () {
    var obstaclesCount = getRandomNum(6, 1);
    for (let i = 0; i < obstaclesCount; i++) {
        var obstacle = {
            col: getRandomNum(9, 0),
            row: getRandomNum(5, 2)
        }
        obstacles.push(obstacle);
    }
}

var getObstacles = function () {
    return obstacles;
}