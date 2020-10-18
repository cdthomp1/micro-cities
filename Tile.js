function Tile(x,y,w,h,i,b,t) {
    this.xCord;
    this.yCord;
    this.width;
    this.height;
    this.image;
    this.buildable;
    this.type;
    this.draw = function (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.fillRect(this.xCord, this.yCord, this.width, this.height);
    };
}