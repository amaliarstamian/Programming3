function matrics(n, m) {
    var matrix = [];
    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            if (x == y) {
                matrix[y][x] = 1;
            }
            else {
                matrix[y][x] = 0;
            }
        }
    }
    matrix[12][12] = 2;
    matrix[6][11] = 2;
    matrix[13][12] = 3;
    matrix[5][10] = 4;
    matrix[18][12] = 3;
    matrix[13][10] = 4;
    matrix[17][14] = 3;
    matrix[15][10] = 4;
    matrix[11][10] = 4;
    matrix[2][1] = 4;
    matrix[45][10] = 4;
    matrix[31][10] = 4;
    matrix[42][15] = 4;
    matrix[18][39] = 5;
    matrix[35][39] = 5;
    matrix[27][20] = 5;
    matrix[12][39] = 5;
    matrix[35][19] = 5;
    matrix[37][29] = 5;
    return matrix
}////////////////////////matricayum vortex petqa lini 0 1 2 //////////////////////////

console.log(matrix);
var grassArr = [];//1
var xotaker = [];//2
var dexnaker = [];//3
var gish2Arr = [];//4
var gish3Arr = [];//5
var side = 15;

var matrix = matrics(50, 50);

module.exports = matrix;


