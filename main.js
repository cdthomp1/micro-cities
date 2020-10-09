

var ctx = null;
var gameMap = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 2, 1, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

/* for (var i = 0; i < gameMap.length; i++) {
    if (gameMap[i] == 2) {
        console.log(`Index ${i}: ${gameMap[i]}`)
    }
} */

var tileW = 30, tileH = 30;
var mapW = 34, mapH = 19;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;


var canvas = document.getElementById('game');
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
canvas.onmousemove = myMove;

var BB = canvas.getBoundingClientRect();
var offsetX = BB.left;
var offsetY = BB.top;
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var dragok = false;
var startX;
var startY;



var shapes = [];
// define 2 rectangles
shapes.push({ x: 1100, y: 100, width: 30, height: 30, fill: "#444444", isDragging: false });


var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
};

var placeHolderRect = new Path2D();
placeHolderRect.rect(1100, 10, 30, 30);

var draggableRect = new Path2D();
draggableRect.rect(1100, 10, 30, 30);




var player = new Character();
function Character() {
    this.tileFrom = [10, 12];
    this.tileTo = [10, 12];
    this.timeMoved = 0;
    this.dimensions = [10, 10];
    this.position = [310, 370];
    this.delayMove = 1000;
}


Character.prototype.placeAt = function (x, y) {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
    ((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
};

player.placeAt(player.tileFrom[0], player.tileFrom[1]);
Character.prototype.processMovement = function (t) {
    if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }

    if ((t - this.timeMoved) >= this.delayMove) {
        this.placeAt(this.tileTo[0], this.tileTo[1]);
    }
    else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);

        if (this.tileTo[0] != this.tileFrom[0]) {
            var diff = (tileW / this.delayMove) * (t - this.timeMoved);
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
            var diff = (tileH / this.delayMove) * (t - this.timeMoved);
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
        }

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    return true;
}

function toIndex(x, y) {
    return ((y * mapW) + x);
}



window.onload = function () {


    ctx = document.getElementById('game').getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";




    window.addEventListener("keydown", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = true; }
    });
    window.addEventListener("keyup", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = false; }
    });
};

var canvas = document.getElementById('game');
canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
}, false);

function rect(r) {
    ctx.fillStyle = r.fill;
    ctx.fillRect(r.x, r.y, r.width, r.height);
}

function drawGame() {


    if (ctx == null) { return; }

    for (var i = 0; i < shapes.length; i++) {
        // decide if the shape is a rect or circle
        // (it's a rect if it has a width property)
        if (shapes[i].width) {
            rect(shapes[i]);
        } else {
            circle(shapes[i]);
        };
    }

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    var sec = Math.floor(Date.now() / 1000);
    if (sec != currentSecond) {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    }
    else { frameCount++; }
    // Check movement
    if (!player.processMovement(currentFrameTime)) {
        // Up Arrow
        // console.log(`${keysDown[38]} && ${player.tileFrom[1]} > 0 && ${gameMap[toIndex(player.tileFrom[0], player.tileFrom[1])]} == 2`)
        // console.log(`${toIndex(player.tileFrom[0], player.tileFrom[1])} == 2`)
        if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 2) {
            player.tileTo[1] -= 1;
        } else if (keysDown[40] && player.tileFrom[1] < (mapH - 1) && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] == 2) {
            player.tileTo[1] += 1;
        } else if (keysDown[37] && player.tileFrom[0] > 0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 2) {
            player.tileTo[0] -= 1;
        } else if (keysDown[39] && player.tileFrom[0] < (mapW - 1) && gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 2) {
            player.tileTo[0] += 1;
        }

        if (player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) { player.timeMoved = currentFrameTime; }
    }

    // console.log(player.position[0], player.position[1])

    for (var y = 0; y < mapH; ++y) {
        for (var x = 0; x < mapW; ++x) {
            switch (gameMap[((y * mapW) + x)]) {
                case 0:
                    ctx.strokeStyle = "#FF0000";
                    ctx.fillStyle = "#685b48";
                    break;
                case 1:
                    ctx.fillStyle = "#5aa457";
                    break;
                case 2:
                    ctx.fillStyle = "#757575";
                    break;
                case 3:
                    ctx.fillStyle = "#ff0000";
                    break;
                default:
                    ctx.fillStyle = "#5aa457";
            }

            ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
        }
    }

    ctx.fillStyle = "#0000ff";
    // console.log(player.position[0]);
    ctx.fillRect(player.position[0], player.position[1],
        player.dimensions[0], player.dimensions[1]);

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    ctx.strokeStyle = "#FF0000";
    ctx.stroke(placeHolderRect);

    ctx.fillRect(1100, 10, 30, 30);

    lastFrameTime = currentFrameTime;
    requestAnimationFrame(drawGame);




}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



// handle mousedown events
function myDown(e) {

    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // get the current mouse position
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    // test each shape to see if mouse is inside
    dragok = false;
    for (var i = 0; i < shapes.length; i++) {
        var s = shapes[i];
        // decide if the shape is a rect or circle               
        if (s.width) {
            // test if the mouse is inside this rect
            if (mx > s.x && mx < s.x + s.width && my > s.y && my < s.y + s.height) {
                // if yes, set that rects isDragging=true
                dragok = true;
                s.isDragging = true;
            }
        } else {
            var dx = s.x - mx;
            var dy = s.y - my;
            // test if the mouse is inside this circle
            if (dx * dx + dy * dy < s.r * s.r) {
                dragok = true;
                s.isDragging = true;
            }
        }
    }
    // save the current mouse position
    startX = mx;
    startY = my;
}


// handle mouseup events
function myUp(e) {
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear all the dragging flags
    dragok = false;
    for (var i = 0; i < shapes.length; i++) {
        shapes[i].isDragging = false;
    }
}


// handle mouse moves
function myMove(e) {
    // if we're dragging anything...
    if (dragok) {

        // tell the browser we're handling this mouse event
        e.preventDefault();
        e.stopPropagation();

        // get the current mouse position
        var mx = parseInt(e.clientX - offsetX);
        var my = parseInt(e.clientY - offsetY);

        // calculate the distance the mouse has moved
        // since the last mousemove
        var dx = mx - startX;
        var dy = my - startY;

        // move each rect that isDragging 
        // by the distance the mouse has moved
        // since the last mousemove
        for (var i = 0; i < shapes.length; i++) {
            var s = shapes[i];
            if (s.isDragging) {
                s.x += dx;
                s.y += dy;
            }
        }

        // redraw the scene with the new rect positions
        requestAnimationFrame(drawGame);

        // reset the starting mouse position for the next mousemove
        startX = mx;
        startY = my;

    }
}