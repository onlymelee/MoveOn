// JavaScript Document

var img;
var clickCount;
var hanger;
function setup(){
    createCanvas (windowWidth,windowHeight);
    
    clickCount = 0;
	
    img = loadImage('image/clickable/clotheshanger.png'); 
    hanger = loadImage('image/clickable/hangerrotate.png');
    body = loadImage('image/clickable/body.png');
    body1 = loadImage('image/clickable/bruise/1.png');
    body2 = loadImage('image/clickable/bruise/2.png');
    body3 = loadImage('image/clickable/bruise/3.png');
    body4 = loadImage('image/clickable/bruise/4.png');
//    img = loadImage('image/clickable/clotheshanger.png');
}



function draw() {

    switch(clickCount) {
        case 0:
            image(img, 0, 0, windowWidth, windowHeight);
	    break;
        case 1:
	    image(body, 0, 0, windowWidth, windowHeight);
            break;
        case 2:
            image(body1, 0, 0, windowWidth, windowHeight);
	    break;
        case 3:
            image(body2, 0, 0, windowWidth, windowHeight);
            break;
	case 4:
	    image(body3, 0, 0, windowWidth, windowHeight);
            break;
	default:
           image(body4, 0, 0, windowWidth, windowHeight);
    }
    if(clickCount>0) {
	image(hanger, mouseX-150, mouseY-80, windowWidth*0.2, windowHeight*0.2);
    }
   
}


function mousePressed () {
    if(clickCount == 0) {
        clickCount = clickCount + 1;
    } else if (isInBody()) {
        clickCount = clickCount + 1;
    } 
}

function isInBody() {
    if (isInRect(0.536, 0.697, 0, 0.044))  {return true;}
    if (isInRect(0.389, 0.832, 0.092, 0.813)) {return true;}
    if (isInRect(0, 0.121, 0.480, 0.765)) {return true;}
    if (isInRect(0.121, 0.241, 0.32, 0.628)) {return true;}
    if (isInRect(0.241, 0.363, 0.167, 0.51)) {return true;}
    if (isInRect(0.263, 0.354, 0.495, 0.599)) {return true;}
    if (isInRect(0.287, 0.463, 0.904, 0.998)) {return true;}
    if (isInRect(0.463, 0.670, 0.833, 0.995)) {return true;}
    return false;
}

function isInRect(xmin, xmax, ymin, ymax) {
    if(mouseX > xmin*windowWidth && mouseX < xmax*windowWidth && mouseY > ymin*windowHeight && mouseY < ymax*windowHeight) {
        return true;
    } else {
        return false;	
    }
}


function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
    
}

// JavaScript Document

