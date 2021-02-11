/**
 * @class
 * @classdesc A wild ball appears
 */
class Ball {
    /**
     * 
     * @param {number} x - position on the X axis
     * @param {number} y - position on the Y axis
     * @param {number} radius - radius of the ball
     * @param {number} elasticity - bounciness of the ball (will be mutated to negative value within the constructor)
     * @param {number} mass - the mass of the ball
     */
    constructor(x, y, radius, elasticity, mass) {
        this.position = { x, y };
        this.velocity = { // will generate random velocity for X and Y axis resulting in random speed and direction of the thrown ball
            x: Math.floor(Math.random() * (50 - 5) + 5) / 10, 
            y: Math.floor(Math.random() * (50 - 5) + 5) / 10 
        };
        this.elasticity = -elasticity; // bouncing capacity
        this.mass = mass; // kg
        this.radius = radius; //m
        this.area = (Math.PI * radius ** 2) / 10000; //m^2
    }
}