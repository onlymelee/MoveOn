// JavaScript Document

var title;
var stop;
var img;
var RemoteIsClicked = false;
var HangerIsClicked = false;
var BookIsClicked   = false;

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    img = loadImage('image/homebase/livingroom.png'); 
    
    
//    img. id ('livingroom');
//    img.resizeTo (windowWidth,windowHeight);
}



function draw() {

    
    image(img, 0, 0, windowWidth, windowHeight);
   
    
//    this div will follow your mouse
//myDiv. position (mouseX, mouseY);
}


function mousePressed () {
    if(mouseX>0.15*windowWidth && mouseX<0.29*windowWidth && mouseY<(1-0.23)*windowHeight && mouseY>(1-0.377)*windowHeight) {
        window.open("https://www.books.com.tw");
	BookIsClicked = true
    }else if (mouseX>0.385*windowWidth && mouseX<0.425*windowWidth && mouseY<(1-0.337)*windowHeight && mouseY>(1-0.416)*windowHeight) {
        window.open("https://24h.pchome.com.tw/store/DPADQS");
	RemoteIsClicked = true;
    }else if (mouseX>0.542*windowWidth && mouseX<0.783*windowWidth && mouseY<(1-0.133)*windowHeight && mouseY>(1-0.343)*windowHeight) {
        window.open("hanger.html");
	HangerIsClicked = true;
    }else if (mouseX>0*windowWidth && mouseX<0.153*windowWidth && mouseY<(1-0.783)*windowHeight && mouseY>0*windowHeight && allClicked()) {
	window.open("http://google.com");
    }
//    } else {
//	window.open("https://google.com);
//    }
//    stop.position (mouseX, mouseY);
}

function allClicked(){
    return RemoteIsClicked && HangerIsClicked && BookIsClicked
}

//function resize () {
////    img = (windowWidth,windowHeight);
//}

function windowResized () {
    resizeCanvas (windowWidth,windowHeight);
    
}// JavaScript Document

