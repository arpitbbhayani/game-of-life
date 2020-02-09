function Game(grid) {
  this.grid = grid;
  this.wx = screenProperties.width / grid[0].length;
  this.wy = screenProperties.height / grid.length;

  this.draw = function() {
    for (var i = 0; i < grid.length ; i++) {
      for(var j = 0 ; j < grid[0].length ; j++) {
        fill(this.grid[i][j] ? 255 : 0)
        rect(i * this.wx, j * this.wy, this.wx, this.wy);
      }
    }
  }

  this.run = function() {
    this.draw()
  }
}
