// javascript class is updated

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color !== undefined ? color : 'undefined';
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    toString() {
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








// Calculate the uber price Task

class UberPriceCalculator {
    constructor() {
        this.baseFare = 2.0; // Base fare in dollars
        this.costPerMinute = 0.15; // Cost per minute in dollars
        this.costPerMile = 1.5; // Cost per mile in dollars
    }

    calculatePrice(distanceMiles, durationMinutes) {
        /**
         * Calculate the price of an Uber ride based on distance and duration.
         * @param {number} distanceMiles - The distance of the trip in miles.
         * @param {number} durationMinutes - The duration of the trip in minutes.
         * @returns {number} The total price of the trip.
         */
        const totalPrice = this.baseFare + (this.costPerMinute * durationMinutes) + (this.costPerMile * distanceMiles);
        return totalPrice;
    }
}

// Example usage:
const calculator = new UberPriceCalculator();
const distance = 10; // in miles
const duration = 30; // in minutes
const price = calculator.calculatePrice(distance, duration);
console.log("The price of the Uber ride is $", price.toFixed(2));

// person details Task

class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getDetails() {
        /**
         * Get details of the person.
         * @returns {string} Details of the person.
         */
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Email: ${this.email}`;
    }
}

// Example usage:
const person1 = new Person("John Doe", 30, "Male", "john@example.com");
console.log(person1.getDetails());

const person2 = new Person("Jane Smith", 25, "Female", "jane@example.com");
console.log(person2.getDetails());


// class pratice task

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        /**
         * Get movies with a rating of "PG" from the given array of movies.
         * @param {Array<Movie>} movies - Array of Movie instances.
         * @returns {Array<Movie>} Array of Movie instances with a rating of "PG".
         */
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of the getPG method
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

/************** MINI TASK ********************************** */

// leap year

function isLeapYear(year) {
    // Check if the input is a number
    if (typeof year !== 'number' || isNaN(year)) {
        throw new Error('Input must be a number');
    }

    // Leap year condition:
    // A year is a leap year if it is divisible by 4
    // But if it is divisible by 100, it must also be divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true


// Reverse string task

function reverseString(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Split the string into an array of characters, reverse it, then join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("Hello")); // Output: "olleH"

