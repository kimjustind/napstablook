//Taken from https://codepen.io/gavra/pen/tEpzn
let a = Math.floor(Math.random() * 42);
let text = new Array(" ");

let iSpeed = 0; // time delay of print out
let iIndex = 0; // start printing array at this position
let iArrLength = text[0].length; // the length of the text array

let iTextPos = 0; // initialise text position
let sContents = ' '; // initialise contents variable
let iRow; // initialise current row

window.onload = function() { typewriter(); };

switch (a) {
    case 0: case 1: case 2: case 3:
        text = "* oh, hello...";
        break;
    case 4: case 5: case 6: case 7:
        text = "* welcome to my website...";
        break;
    case 8: case 9: case 10: case 11:
        text = "* just pluggin along...";
        break;
    case 12: case 13: case 14: case 15:
        text = "* ........................";
        break;
    case 16: case 17: case 18: case 19:
        text = "* oh...................";
        break;
    case 20: case 21: case 22: case 23:
        text = "* okay...";
        break;
    case 24: case 25: case 26: case 27:
        text = "* um..";
        break;
    case 28: case 29: case 30: case 31:
        text = "* oh, i'm REAL funny.";
        break;
    case 32: case 33: case 34: case 35:
        text = "* heh...";
        break;
    case 36: case 37: case 38: case 39:
        text = "* ooooooooooo";
        break;
    default:
        text = "REALLY NOT FEELIN UP TO IT RIGHT NOW. SORRY.";
        break;
}


function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iArrLength - 1);
    let destination = document.getElementById("talking");
    while (iRow < iIndex) {
        sContents += text[iRow++];
    }
    destination.innerHTML = sContents + text[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != text.length - 1) {
            setTimeout("typewriter()", 80);
        }
        else if (iIndex != text.length) {
            setTimeout("typewriter()", 400);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}