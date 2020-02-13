var bitBuffer = [1];

function get_state(a, b, c) {
  a = a || 0
  b = b || 0
  c = c || 0
  return a ^ (b | c);
}

function Game(grid) {
  this.grid = grid;

  this.rows = grid.length;
  this.cols = grid[0].length;
  this.current = 1;

  this.wx = screenProperties.width / this.cols;
  this.wy = screenProperties.height / this.rows;

  this.draw = function() {
    for (var i = 0; i < this.rows ; i++) {
      for(var j = 0 ; j < this.cols ; j++) {
        fill(this.grid[i][j] ? '#545454' : '#ffd1d1')
        rect(j * this.wy, i * this.wx, this.wy, this.wx);
      }
    }
  }

  this.move = function() {
    var parent = this.current - 1

    for (var i = 0; i < this.cols; i++) {
      this.grid[this.current][i] = get_state(this.grid[parent][i >= 1 ? i-1 : this.cols - 1], this.grid[parent][i], this.grid[parent][i+1  % this.cols])
    }

    bitBuffer.push(this.grid[this.current][45])
    if (bitBuffer.length === 8) {
      var v = 0;
      for (var j = 0; j < 8; j++) {
        v += bitBuffer[j] * (1 << 7 - j);
      }
      console.log(bitBuffer, v)
      bitBuffer = []
    }

    this.current ++
    if (this.current === this.rows) {
      this.current = this.rows - 1
      this.grid.shift()
      this.grid.push(new Array(this.cols))
    }
  }

  this.run = function() {
    this.draw()
    this.move()
  }
}


var grid123 = new Array(161)
for (var i = 0; i < 161; i++) {
  grid123[i] = new Array(161)
}

grid123[0][45] = 1;

game = new Game(grid123);
