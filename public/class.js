///////////////////////////1111111///////////////////

class Grass {




//////////////////////////////////////////1

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 6;
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


//////////////////////////////////////////////////2partadir


    chooseCell(character) {
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
    //////////////////////////////harevan voreve 0 sarqel 1 aysinq xot@ taracvel///////////////////
    mul() {
        this.multiply++;
        var gtnel = this.chooseCell(0);
        var dava = random(gtnel);
        if (dava && this.multiply >= 0) {
            matrix[dava[1]][dava[0]] = 1;
            
            var xot = new Grass(dava[0], dava[1], 1);
            grassArr.push(xot);
            this.multiply == 0;
        }
    }
}
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
//////////////////////////////////33333333333333//////////////////////
class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

        this.energy = 30;
this.naxord = 0;

    }
    /////////////////zangvac//////////////////////////

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

    /////////////////////////////////2partadir
    chooseCell(character1,character2) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    /////////////////////////////sharjvel/////////////////////////
    sharjvel() {
        var gtnel = this.chooseCell(0,1);
        var dava = random(gtnel);
        if (dava) {
           matrix[this.y][this.x] = this.naxord;
          
           if(  matrix[dava[1]][dava[0]] ==0){
           this.naxord = 0;
           }
           else if(matrix[dava[1]][dava[0]] == 1){
               this.naxord =1;
            }
           matrix[dava[1]][dava[0]] = this.index;
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
        var gtnel = this.chooseCell(2);
        var dava = random(gtnel);
        if (dava) {
            this.energy++;

            matrix[dava[1]][dava[0]] = 3;


            for (var i in xotaker) {
                if (dava[0] == xotaker[i].x && dava[1] == xotaker[i].y) {
                   xotaker.splice(i, 1);
                    break;
                }
            }
            
            if (this.energy >= 10) {
                this.bazm();

            }
            else if(this.energy==0){
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
        for (var i in dexnaker) {
            if (this.x == dexnaker[i].x && this.y == dexnaker[i].y) {
               dexnaker.splice(i, 1);
                break;
            }
        }


    }

    /////////////////////////bazmanal/////////////
    bazm() {
      
        var xot = new Predator(this.x, this.y, 3);
         dexnaker.push(xot);

     this.energy = 0;
     
       }
    

}
/////////////////////////////44444444444//////////////////////////
class Predator2 {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

        this.energy = 90;
this.naxord = 0;

    }
    /////////////////zangvac//////////////////////////

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

    /////////////////////////////////2partadir
    chooseCell(character1,character2,character3) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    /////////////////////////////sharjvel/////////////////////////
    sharjvel() {
        var gtnel = this.chooseCell(0,1,2);
        var dava = random(gtnel);
        if (dava) {
           matrix[this.y][this.x] = this.naxord;
          
           if(  matrix[dava[1]][dava[0]] ==0){
           this.naxord = 0;
           }
           else if(matrix[dava[1]][dava[0]] == 1){
               this.naxord =1;
            }
             else if(matrix[dava[1]][dava[0]] == 2){
               this.naxord =2;
            }
           matrix[dava[1]][dava[0]] = this.index;
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
        var gtnel = this.chooseCell(3);
        var dava = random(gtnel);
        if (dava) {
           

            matrix[dava[1]][dava[0]] = 4;
            this.energy++;

            for (var i in dexnaker) {
                if (dava[0] == dexnaker[i].x && dava[1] == dexnaker[i].y) {
                   dexnaker.splice(i, 1);
                    break;
                }
            }
            
            if (this.energy >= 5) {
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
     
        for (var i in gish2Arr) {
            if (this.x == gish2Arr[i].x && this.y == gish2Arr[i].y) {
               gish2Arr.splice(i, 1);
                break;
            }
        }


    }

    /////////////////////////bazmanal/////////////
    bazm() {
      
        var xot = new Predator2(this.x, this.y, 4);
         gish2Arr.push(xot);

     this.energy = 0;
     
       }
    

}
///////////////////////////55555555555555////////////////////////
class Predator3 {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;

        this.energy = 100;
this.naxord = 0;

    }
    /////////////////zangvac//////////////////////////

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

    /////////////////////////////////2partadir
    chooseCell(character1,character2,character3) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    /////////////////////////////sharjvel/////////////////////////
    sharjvel() {
        var gtnel = this.chooseCell(0,1,2);
        var dava = random(gtnel);
        if (dava) {
           matrix[this.y][this.x] = this.naxord;
          
           if(  matrix[dava[1]][dava[0]] ==0){
           this.naxord = 0;
           }
           else if(matrix[dava[1]][dava[0]] == 1){
               this.naxord =1;
            }
             else if(matrix[dava[1]][dava[0]] == 2){
               this.naxord =2;
            }
            
           matrix[dava[1]][dava[0]] = this.index;
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
        var gtnel = this.chooseCell(3,4);
        var dava = random(gtnel);
        if (dava) {
            this.energy++;

            matrix[dava[1]][dava[0]] = 5;


            for (var i in gish2Arr) {
                if (dava[0] == gish2Arr[i].x && dava[1] == gish2Arr[i].y) {
                   gish2Arr.splice(i, 1);
                    break;
                }
            }
            
            if (this.energy >= 13) {
                this.bazm();

            }
            else if(this.energy==0){
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
    
        for (var i in gish3Arr) {
            if (this.x == gish3Arr[i].x && this.y == gish3Arr[i].y) {
               gish3Arr.splice(i, 1);
                break;
            }
        }


    }

    /////////////////////////bazmanal/////////////
    bazm() {
      
        var xot = new Predator3(this.x, this.y, 5);
         gish3Arr.push(xot);

     this.energy = 0;
     
       }
    

}