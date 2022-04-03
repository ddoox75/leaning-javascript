class Sharp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    display() {
        console.log(`Position at ${this.x} : ${this.y}`);
    }
}
class Rectange extends Sharp {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    render() {
        super.display();
        console.log(`Size : ${this.width} and ${this.height}`);
    }
}

let rec1 = new Rectange(0, 0, 20, 10);
rec1.display();

rec1.x = 12;
rec1.render();

rec1.width = 60;
rec1.render();