figlet.defaults({
  fontPath: 'https://raw.githubusercontent.com/patorjk/figlet.js/master/fonts'
});
figlet.preloadFonts(['Banner3'])

var text = `
 ######      ###    ##     ## ########     #######  ########    ##       #### ######## ########
##    ##    ## ##   ###   ### ##          ##     ## ##          ##        ##  ##       ##
##         ##   ##  #### #### ##          ##     ## ##          ##        ##  ##       ##
##   #### ##     ## ## ### ## ######      ##     ## ######      ##        ##  ######   ######
##    ##  ######### ##     ## ##          ##     ## ##          ##        ##  ##       ##
##    ##  ##     ## ##     ## ##          ##     ## ##          ##        ##  ##       ##
 ######   ##     ## ##     ## ########     #######  ##          ######## #### ##       ########
`

function setupGameOnText() {
  var lines = text.split('\n');
  var textRows = lines.length;
  var textCols = Math.max(...lines.map(x => x.length || 0));

  var rows, cols;
  rows = cols = Math.max(textRows, textCols) + 2;

  var rowsOffset = Math.round((rows - textRows)/2);
  var colsOffset = Math.round((cols - textCols)/2);

  var grid = new Array(rows)
  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
  }

  for (var i = 1; i < textRows; i++) {
    for (var j = 1; j < textCols; j++) {
      grid[i + rowsOffset][j + colsOffset] = lines[i].charAt(j) === '#' ? 1 : 0;
    }
  }

  game = new Game(grid);
}

setupGameOnText()
