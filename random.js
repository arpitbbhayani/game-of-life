var grid = new Array(50)
for (var i = 0; i < 50; i++) {
  grid[i] = new Array(50)
}

for (var i = 0; i < 50; i++) {
  for (var j = 0; j < 50; j++) {
    if (i === 0 || j === 0 || i === 49 || j === 49) {
      grid[i][j] = 0
    } else {
      grid[i][j] = Math.floor(Math.random() * 2)
    }
  }
}

game = new Game(grid);
