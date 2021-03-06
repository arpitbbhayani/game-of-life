p5.disableFriendlyErrors = true; // disables FES

var game = null;
var gameCanvas = null;

var screenProperties = {
  width: 640,
  height: 480,
}

function setup() {
  var size = min(windowWidth - 10, windowHeight - 10, 640)
  screenProperties.width = size;
  screenProperties.height = size;
  gameCanvas = createCanvas(screenProperties.width, screenProperties.height);
  gameCanvas.parent('sketch');
  frameRate(10)
}

function draw() {
  game.run()
}
