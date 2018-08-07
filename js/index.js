$(function () {
    $(".start").bind("click", function () {
        puzzle.start();
    });
});
$(window).load(function () {
    puzzle = new myPuzzle({
        id: "game",
        pic: "images/p1.jpg",//图片
        x: 3,
        y: 3,
        hard: 10,//最大难度最好不要大于总格数的一半
        duration: 100,//毫秒

    });
});
$(window).resize(function () {
    puzzle.refresh();
});