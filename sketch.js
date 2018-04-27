
// canvas
var currentWidth = window.outerWidth;
var currentHeight = window.outerHeight;
var myCanvas;
// gui
//var visible = true;
//var gui2;
// mouse click variables
var isOverCanvas;
var isClicked = 0;

// send info into test6 only after dsp is loaded 
var isLoaded = false;
// gui coordinates
var guiX;
var guiY;
var isOverGui;
//var isGuiVisible = true;

//var dsp = false;
var Octave = 4;

// SETUP

function setup() {
  

  //Canvas as a background instead of as an object within the webpage.
  //Note that we declare Canvas as a variable outside setup().
  //See Shiffman's video: https://www.youtube.com/watch?v=OIfEHD3KqCg
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.position(0,0);
  myCanvas.style('z-index', '-1');
  //myCanvas.parent('myCanvasContainer');
  
}

// this is a p5js built-in function that is called whenever the browser's window is resized.
function windowResized() {
  var currentWidth = windowWidth;
  var currentHeight = windowHeight;
  resizeCanvas(currentWidth, currentHeight);

  
  
}

// DRAW

function draw() {

  //call parent method to activate dsp, i.e. function start()
  //if (dsp == true) {
    //parent.start();
    //isLoaded = true;

  //}

  //note: if I call parent.stop() from within Draw() it throws "loader is null" error. parent.stop() is therefore loaded within mousePressed().  

  // pass data into test6 
  //if (isLoaded === true) {
    //print(p.lifespan);
    // pass the data to test6
    //parent.updateSlider_pitch60(pitch60);
    //parent.updateSlider_inlet2(p.position.y);
    //parent.updateSlider_inlet3(p.velocity.x);
    //parent.updateSlider_inlet4(p.velocity.y);
    //parent.updateSlider_inlet5(p.acceleration.x);
    //parent.updateSlider_inlet6(p.acceleration.y);
    //parent.updateSlider_inlet7(p.lifespan);
    //parent.updateSlider_inlet8(initlifespan);
    //parent.updateSlider_inlet9(scalemode);

  //}

}
// END OF DRAW FUNCTION

// EVENT FUNCTIONS

function keyPressed() {
  if (keyCode === 65) {
    pitch60 = 1;
    parent.updateSlider_pitch60(pitch60);
    //print(pitch60);
  } else if (keyCode === 87) {
    pitch61 = 1;
    parent.updateSlider_pitch61(pitch61);
  }
  else if (keyCode === 83) {
    pitch62 = 1;
    parent.updateSlider_pitch62(pitch62);
  } else if (keyCode === 69) {
    pitch63 = 1;
    parent.updateSlider_pitch63(pitch63);
  } else if (keyCode === 68) {
    pitch64 = 1;
    parent.updateSlider_pitch64(pitch64);
  } else if (keyCode === 70) {
    pitch65 = 1;
    parent.updateSlider_pitch65(pitch65);
  } else if (keyCode === 84) {
    pitch66 = 1;
    parent.updateSlider_pitch66(pitch66);
  } else if (keyCode === 71) {
    pitch67 = 1;
    parent.updateSlider_pitch67(pitch67);
  } else if (keyCode === 89) {
    pitch68 = 1;
    parent.updateSlider_pitch68(pitch68);
  } else if (keyCode === 72) {
    pitch69 = 1;
    parent.updateSlider_pitch69(pitch69);
  } else if (keyCode === 85) {
    pitch70 = 1;
    parent.updateSlider_pitch70(pitch70);
  } else if (keyCode === 74) {
    pitch71 = 1;
    parent.updateSlider_pitch71(pitch71);
  } 

    else if (keyCode === UP_ARROW && Octave<8) {
    Octave ++;
    parent.updateSlider_MIDIOctave(Octave);
    //print(Octave);
  } else if (keyCode === DOWN_ARROW && Octave>1) {
    Octave --;
    parent.updateSlider_MIDIOctave(Octave);
    //print(Octave);
  } 

    return false; // prevent default
}

function keyReleased() {
  if (keyCode === 65) {
    pitch60 = 0;
    parent.updateSlider_pitch60(pitch60);
    //print(pitch60);
  } else if (keyCode === 87) {
    pitch61 = 0;
    parent.updateSlider_pitch61(pitch61);
  }
  else if (keyCode === 83) {
    pitch62 = 0;
    parent.updateSlider_pitch62(pitch62);
  } else if (keyCode === 69) {
    pitch63 = 0;
    parent.updateSlider_pitch63(pitch63);
  } else if (keyCode === 68) {
    pitch64 = 0;
    parent.updateSlider_pitch64(pitch64);
  } else if (keyCode === 70) {
    pitch65 = 0;
    parent.updateSlider_pitch65(pitch65);
  } else if (keyCode === 84) {
    pitch66 = 0;
    parent.updateSlider_pitch66(pitch66);
  } else if (keyCode === 71) {
    pitch67 = 0;
    parent.updateSlider_pitch67(pitch67);
  } else if (keyCode === 89) {
    pitch68 = 0;
    parent.updateSlider_pitch68(pitch68);
  } else if (keyCode === 72) {
    pitch69 = 0;
    parent.updateSlider_pitch69(pitch69);
  } else if (keyCode === 85) {
    pitch70 = 0;
    parent.updateSlider_pitch70(pitch70);
  } else if (keyCode === 74) {
    pitch71 = 0;
    parent.updateSlider_pitch71(pitch71);
  } return false; // prevent default
}


// mousePressed calls the parent.stop method if dsp is false (gui2).
// John Kuiphoff example http://coursescript.com/notes/interactivecomputing/interactivity/ 
function mousePressed()
{
  
  //if (dsp == false) {
    //parent.stop();}
  //print('new click');
}


