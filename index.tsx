// typscript class

class circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const mycircle = new circle(5);
console.log('Radius:', myCircle.getRadius());
console.log('Area:', myCircle.getArea());
console.log('Circumference:', myCircle.getCircumference());

myCircle.setRadius(10);
console.log('Updated Radius:', myCircle.getRadius());
console.log('Updated Area:', myCircle.getArea());
console.log('Updated Circumference:', myCircle.getCircumference());
