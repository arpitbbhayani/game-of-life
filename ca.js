function getNeighbourXOR(g, i, j) {
  var value = 0;

  try { value ^= g[i-1][j] } catch (e) {}
  try { value ^= g[i][j-1] } catch (e) {}
  try { value ^= g[i+1][j] } catch (e) {}
  try { value ^= g[i][j+1] } catch (e) {}
  try { value ^= g[i-1][j-1] } catch (e) {}
  try { value ^= g[i+1][j+1] } catch (e) {}
  try { value ^= g[i-1][j+1] } catch (e) {}
  try { value ^= g[i+1][j-1] } catch (e) {}
  return value
}

function newGrid(r, c) {
  var g = new Array(r)
  for (var i = 0; i < r; i++) {
    g[i] = new Array(c)
  }

  for (var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
      g[i][j] = 0;
    }
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
        fill(this.grid[i][j] ? '#545454' : '#ffd1d1')
        rect(j * this.wy, i * this.wx, this.wy, this.wx);
      }
    }
  }

  this.move = function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.nextGrid[i][j] = getNeighbourXOR(this.grid, i, j);
      }
    }
    var t = this.grid;
    this.grid = this.nextGrid;
    this.nextGrid = t;
  }

  this.run = function() {
    this.draw()
    this.move()
  }
}


var grid123 = new Array(50)
for (var i = 0; i < 50; i++) {
  grid123[i] = new Array(50)
}

for (var i = 0; i < 50; i++) {
  for (var j = 0; j < 50; j++) {
    if (i === 0 || j === 0 || i === 49 || j === 49) {
      grid123[i][j] = 0
    } else {
      grid123[i][j] = Math.floor(Math.random() * 2)
    }
  }
}

game = new Game(grid123);
