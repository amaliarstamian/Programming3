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
}
var matrix = matrics(50, 50);


////////////////////////matricayum vortex petqa lini 0 1 2 //////////////////////////

console.log(matrix);
var grassArr = [];//1
var xotaker = [];//2
var dexnaker = [];//3
var gish2Arr = [];//4
var gish3Arr = [];//5

var side = 15;
function setup() {
    var socket = io.connect('http://localhost:3000');
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side)
    background(209, 201, 199);
  /*  for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            ////////////////1//////////
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }


            ///////////////2//////////////////////
            else if (matrix[y][x] == 2) {
                var ker = new GrassEater(x, y, 2);
                xotaker.push(ker);
            }
            ////////////////3/////////////
            else if (matrix[y][x] == 3) {
                var dker = new Predator(x, y, 3);
                dexnaker.push(dker);
            }
            ////////////////4/////////////
            else if (matrix[y][x] == 4) {
                var dker = new Predator2(x, y, 4);
                gish2Arr.push(dker);
            }
            ////////////////5/////////////
            else if (matrix[y][x] == 5) {
                var dker = new Predator3(x, y, 5);
                gish3Arr.push(dker);
            }

        }
    }
*/
}
//////////////////////////////matrcan nkarume ekranini ira guynerov////////////////////////
function draw() {

  /*  for (var y = 0; y < matrix.length; y++) {
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
    /////////////////////////kanchuma en function vortex petqa gtni 1-@ ira koxq@ gtni 0 ev lcni found zangvac@ dranic heto patahakan @ntri et 0-neric mek@ ev taracvi dra vra ///////////////////////////////
    for (var i in grassArr) {/////1
        grassArr[i].mul();
        ////////////////////petqa sharjvi
    }
    for (var i in xotaker) {/////2
        xotaker[i].eat();

    }
    for (var i in dexnaker) {//////3
        dexnaker[i].eat();

    }
    for (var i in gish2Arr) {//////4
        gish2Arr[i].eat();

    }
    for (var i in gish3Arr) {//////5
        gish3Arr[i].eat();

    }
*/
}

