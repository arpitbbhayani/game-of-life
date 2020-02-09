function newGrid(r, c) {
  var g = new Array(r)
  for (var i = 0; i < r; i++) {
    g[i] = new Array(c)
  }
  return g
}

function Game(grid) {
  this.grid = grid;

  this.rows = grid.length;
  this.cols = grid[0].length;

  this.wx = screenProperties.width / this.cols;
  this.wy = screenProperties.height / this.rows;

  this.nextGrid = newGrid(this.rows, this.cols);

  this.draw = function() {
    for (var i = 0; i < this.rows ; i++) {
      for(var j = 0 ; j < this.cols ; j++) {
        if (i == 0 || j == 0 || i === this.rows - 1 || j === this.cols - 1) {
          fill(255)
        } else {
          fill(this.grid[i][j] ? 255 : 0)
        }
        rect(i * this.wx, j * this.wy, this.wx, this.wy);
      }
    }
  }

  this.move = function() {
    for (var i = 1; i < this.rows - 1 ; i++) {
      for (var j = 1; j < this.cols - 1; j++) {
        let neighboursCount = 0;
        neighboursCount += this.grid[i-1][j];
        neighboursCount += this.grid[i+1][j];
        neighboursCount += this.grid[i][j-1];
        neighboursCount += this.grid[i][j+1];
        neighboursCount += this.grid[i-1][j-1];
        neighboursCount += this.grid[i-1][j+1];
        neighboursCount += this.grid[i+1][j-1];
        neighboursCount += this.grid[i+1][j+1];
        if (this.grid[i][j] === 1) {
          this.nextGrid[i][j] = neighboursCount < 2 || neighboursCount > 3 ? 0 : 1;
        } else {
          this.nextGrid[i][j] = neighboursCount === 3 ? 1 : 0;
        }
      }
    }
    var t = this.grid;
    this.nextGrid = this.nextGrid;
    this.nextGrid = t;
  }

  this.run = function() {
    this.draw()
    this.move()
  }
}