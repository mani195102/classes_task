class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number, color?: string) {
        this.radius = radius;
        this.color = color !== undefined ? color : 'undefined';
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

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public toString(): string {
        return `Circle(radius: ${this.radius}, color: ${this.color})`;
    }
}

// Example usage:
const circleWithRadiusOnly = new Circle(5);
console.log('Radius:', circleWithRadiusOnly.getRadius());
console.log('Area:', circleWithRadiusOnly.getArea());
console.log('Circumference:', circleWithRadiusOnly.getCircumference());
console.log('Color:', circleWithRadiusOnly.getColor());
console.log('String Representation:', circleWithRadiusOnly.toString());

const circleWithRadiusAndColor = new Circle(7, 'green');
console.log('Radius:', circleWithRadiusAndColor.getRadius());
console.log('Area:', circleWithRadiusAndColor.getArea());
console.log('Circumference:', circleWithRadiusAndColor.getCircumference());
console.log('Color:', circleWithRadiusAndColor.getColor());
console.log('String Representation:', circleWithRadiusAndColor.toString());

circleWithRadiusAndColor.setRadius(10);
circleWithRadiusAndColor.setColor('blue');
console.log('Updated Radius:', circleWithRadiusAndColor.getRadius());
console.log('Updated Area:', circleWithRadiusAndColor.getArea());
console.log('Updated Circumference:', circleWithRadiusAndColor.getCircumference());
console.log('Updated Color:', circleWithRadiusAndColor.getColor());
console.log('Updated String Representation:', circleWithRadiusAndColor.toString());

