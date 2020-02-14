function getNeighbourCount(g, i, j) {
  var neighboursCount = 0;

  try { neighboursCount += g[i-1][j] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i][j-1] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i+1][j] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i][j+1] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i-1][j-1] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i+1][j+1] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i-1][j+1] ? 1 : 0; } catch (e) {}
  try { neighboursCount += g[i+1][j-1] ? 1 : 0; } catch (e) {}
  return neighboursCount
}

function newGrid(r, c) {
  var g = new Array(c)
  for (var i = 0; i < c; i++) {
    g[i] = new Array(r)
  }

  for (var i = 0; i < c; i++) {
    for (var j = 0; j < r; j++) {
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
    for (var i = 0; i < this.cols ; i++) {
      for(var j = 0 ; j < this.rows ; j++) {
        // stroke(255)
        fill(this.grid[i][j] ? 0 : 255)
        rect(i * this.wx, j * this.wy, this.wx, this.wy);
      }
    }
  }

  this.move = function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        let neighboursCount = getNeighbourCount(this.grid, i, j);
        if (this.grid[i][j] && (neighboursCount < 2 || neighboursCount > 3)) {
          this.nextGrid[i][j] = 0;
        } else if (!this.grid[i][j] && neighboursCount === 3) {
          this.nextGrid[i][j] = 1;
        } else {
          this.nextGrid[i][j] = this.grid[i][j];
        }
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
