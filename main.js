function Tile(x, y, w, h, i, c, b, d, t, id, ss) {
    this.id = id;
    this.xCord = x;
    this.yCord = y;
    this.width = w;
    this.height = h;
    this.image = i;
    this.color = c;
    this.buildable = b;
    this.dragable = d;
    this.type = t;
    this.strokeStyle = ss;
    this.draw = function (canvas) {
        var ctx = canvas.getContext('2d');

        if (!this.image) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.xCord, this.yCord, this.width, this.height);
        } else {
            var img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 45, 45, this.xCord, this.yCord, this.width, this.height);
                ctx.strokeStyle = this.strokeStyle;
                ctx.strokeRect(this.xCord, this.yCord, this.height, this.width)
            }
            img.src = this.image;
        }
    };

    this.hover = function(canvas){
        this.draw(canvas);
    }

}

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var tiles = [];

var selectedTile = null;


// Fill Tiles array with the map 
// x loop
for (var i = 0; i < 450; i += 45) {
    // y loop
    for (var j = 0; j < 450; j += 45) {
        var tile = new Tile(i, j, 45, 45, './assets/images/grass.png', 'green', true, false, null, null, 'grey');
        tiles.push(tile);
    }
}

for (var i = 0; i <tiles.length; i++) {
    tiles[i].id = i;
}

// Draw each Tile
function draw(canvas) {
    tiles.forEach(t => {
        t.draw(canvas)
    });
}

// Track Mouse
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// Track mouse Click
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
    var tile = getTile(x, y);

    if (tile && tile.buildable === true) {
        console.log('here')
        tile.strokeStyle = 'yellow';
        tile.draw(canvas);
        selectedTile = tile.id;
    } else {
        tile.strokeStyle = 'grey';
        tile.draw(canvas);
    }


}

    

// Get the tile with the mouse coords
function getTile(x, y) {
    var mx = x;
    var my = y;

    for (var i = 0; i < tiles.length; i++) {
        var r = tiles[i];
        if (mx > r.xCord && mx < r.xCord + r.width && my > r.yCord && my < r.yCord + r.height) {

           return r;
        } 
    }
}


canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});


function place(id) {
    if (id === 'house') {
        tiles[selectedTile].image = './assets/images/house.png';
        tiles[selectedTile].draw(canvas);
        tiles[selectedTile].buildable = false;

    } else if (id === 'road') {
        tiles[selectedTile].image = './assets/images/road.png';
        tiles[selectedTile].draw(canvas);
        tiles[selectedTile].buildable = false;
    } else if (id === 'store') {
        tiles[selectedTile].image = './assets/images/store.png';
        tiles[selectedTile].draw(canvas);
        tiles[selectedTile].buildable = false;
    }
}

draw(canvas);
