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