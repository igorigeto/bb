/**
 * @description Calculating the aerodynamic forces of drag for X and Y axis
 * @param {Ball} ball 
 * @param {Object} options 
 * @param {number} options.dragCoefficient 
 * @param {number} options.density
 * 
 * @return {{x: number, y: number}} {x, y} - Object containing drag force on X and Y axis
 */
const calculateDrag = (ball, options) => {
    const {dragCoefficient, density} = options;
        const x = -0.5 * dragCoefficient * density * ball.area * ball.velocity.x ** 2 * (ball.velocity.x / Math.abs(ball.velocity.x));
        const y = -0.5 * dragCoefficient * density * ball.area * ball.velocity.y ** 2 * (ball.velocity.y / Math.abs(ball.velocity.y));

    return {x, y};
};
/**
 * @description Calculating the acceleration of the ball
 * @param {Ball} ball
 * @param {Object} options
 * @param {number} options.gravity
 * @param {Object} options.drag
 * @param {number} options.drag.dragCoefficient 
 * @param {number} options.drag.density
 * 
 * @return {{x: number, y: number}} {x, y} - Object containing acceleration values for X and Y axis
 */
const calculateAcceleration = (ball, options) => {
    const {gravity, drag} = options
    const x = drag.x / ball.mass;
    const y = gravity + (drag.y / ball.mass);

    return {x, y};
}
/**
 * @description Calculating velocity of the ball per frame
 * @param {Ball} ball 
 * @param {{acceleration: {x: number,y: number}, fps:number}} options 
 */
const calculateVelocityByFrame = (ball, options) => {
    const {acceleration, fps} = options;

    ball.velocity.x -=- acceleration.x * fps;
    ball.velocity.y -=- acceleration.y * fps;
}
/**
 * @description Calculation the position of the ball per frame
 * @param {Ball} ball 
 * @param {{fps: number}} options 
 */
const calculatePosition = (ball, {fps}) => {
    //Multiplying by 100 to get correct calculations in meters
    ball.position.x += ball.velocity.x * fps * 100;
    ball.position.y += ball.velocity.y * fps * 100;
}