//////////////////////////////////222222222222/////////////////////////
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

        this.energy = 5;


    }
    /////////////nor zangvac/////////////////////
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }





/////////////////////////////////////////////////2partadir
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    /////////////////////////////sharjvel/////////////////////////
    sharjvel() {
        var gtnel = this.chooseCell(0);
        var dava = random(gtnel);
        if (dava) {
            matrix[this.y][this.x] = 0;
            matrix[dava[1]][dava[0]] = 2;
            this.y = dava[1];
            this.x = dava[0];
            this.energy--;
            if (this.energy <= 0) {
                this.mernel();
            }
        }
    }
    /////////////////////////utel xot@////////////////
    eat() {
        var gtnel = this.chooseCell(1);
        var dava = random(gtnel);
        if (dava) {
            this.energy++;

            matrix[dava[1]][dava[0]] = 2;


            for (var i in grassArr) {
                if (dava[0] == grassArr[i].x && dava[1] == grassArr[i].y) {
                   grassArr.splice(i, 1);
                    break;
                }
            }
            
            if (this.energy >= 1) {
                this.bazm();

            }
            else if(this.energy<=0){
                this.mernel();
            }
            else {


                matrix[this.y][this.x] = 0;
            }
            this.y = dava[1];
            this.x = dava[0];
        }
        else {
            this.sharjvel();
        }
    }

    /////////////////mernel/////////////////////////////////
    mernel() {
       
        matrix[this.y][this.x] = 0;
     this.energy--;
        for (var i in xotaker) {
            if (this.x == xotaker[i].x && this.y == xotaker[i].y) {
               xotaker.splice(i, 1);
                break;
            }
        }


    }

    /////////////////////////bazmanal/////////////
    bazm() {
      
        var xot = new GrassEater(this.x, this.y, 2);
         xotaker.push(xot);

     this.energy = 0;
     
       }
    

}