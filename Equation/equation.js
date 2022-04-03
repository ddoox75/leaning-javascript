const a = Number(prompt("Nhap a: "));
const b = Number(prompt("Nhap b: "));
const c = Number(prompt("Nhap c: "));

class Equation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    giai = () => {
        if (this.a == 0) {
            //bx+c=0
            alert("x=" + -(this.c / this.b));
        } else {
            const delta = this.b ** 2 - 4 * this.a * this.c;
            if (delta < 0) {
                alert("Phương trình vô nghiệm");
            } else if (delta == 0) {
                const x = -this.b / (2 * this.a);
                alert("Phương trình có nghiệm kép:" + x);
            } else {
                const x1 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
                const x2 = (-this.b + Math.sqrt(delta)) / (2 * this.a);

                alert("Nghiệm x1:" + x1 + "\n Nghiệm x2:" + x2);
            }
        }
    };
}

let equation = new Equation(a, b, c);
equation.giai();