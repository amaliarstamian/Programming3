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