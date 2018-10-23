var side = 15;
var matrix;
var socket;
function redrawMatrix(mat){
    matrix=mat;
    redraw();
}
function setup() {
    frameRate(0);
    socket = io.connect();
    socket.on('receive matrix', function (mat) {
        matrix = mat;
        
        createCanvas(matrix[0].length * side, matrix.length * side)
   noLoop(); 
socket.on('redraw',function(){
})


});
    
    background(209, 201, 199);
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }
    }
}