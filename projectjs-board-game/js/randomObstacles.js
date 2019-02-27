var getRandom = function (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const barriers = [];

var createObstacles = function () {
    const barriersCount = getRandom(5, 1);
    for (let i = 0; i < barriersCount; i++) {
        const barrier = {
            col: getRandom(9, 0),
            row: getRandom(5, 2)
        }
        barriers.push(barrier);
    }
}

var getObstacles = function () {
    return barriers;
}