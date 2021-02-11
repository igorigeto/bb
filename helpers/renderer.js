/**
 * @description Drawing the ball on the screen
 * @param {Object} ctx - Canvas object
 * @param {Ball} ball 
 */
const drawBall = (ctx, ball) => {

    //Rendering the ball
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}
/**
 * @description Will check if the ball is near a wall and will bounce of it
 * @param {Ball} ball 
 * @param {{width: number, height: number}} options - width and height of the box 
 */
const bounceOffWall = (ball, { width, height }) => {
    if (ball.position.x > width - ball.radius) {
        ball.velocity.x *= ball.elasticity; // will make the ball bounce off in the opposite direction
        ball.position.x = width - ball.radius; // Makes sure that the ball wont pass the wall border but make a clean bounce
    }
    if (ball.position.y > height - ball.radius) {
        ball.velocity.y *= ball.elasticity;
        ball.position.y = height - ball.radius;
    }
    if (ball.position.x < ball.radius) {
        ball.velocity.x *= ball.elasticity;
        ball.position.x = ball.radius;
    }
    if (ball.position.y < ball.radius) {
        ball.velocity.y *= ball.elasticity;
        ball.position.y = ball.radius;
    }
}
/**
 * @description Will check if the ball is about to colide with another ball and will make both balls bounce off each other
 * @param {Ball} blue 
 * @param {Ball[]} balls 
 */
const twoBallsOneBox = (blue, balls) => {
    for (const red of balls) {
        if (blue.position.x != red.position.x && blue.position.y != red.position.y) { // making sure we dont match the same ball
            if (blue.position.x + blue.radius + red.radius > red.position.x
                && blue.position.x < red.position.x + blue.radius + red.radius
                && blue.position.y + blue.radius + red.radius > red.position.y
                && blue.position.y < red.position.y + blue.radius + red.radius) {

                const distanceX = blue.position.x - red.position.x;
                const distanceY = blue.position.y - red.position.y;
                const distance = Math.sqrt((distanceX ** 2) + (distanceY ** 2));

                //checking ball on ball action 
                if (distance < blue.radius + red.radius) {
                    const nx = (red.position.x - blue.position.x) / distance;
                    const ny = (red.position.y - blue.position.y) / distance;
                    const p = 2 * (blue.velocity.x * nx + blue.velocity.y * ny - red.velocity.x * nx - red.velocity.y * ny) / (blue.mass + red.mass);

                    const collisionPointX = ((blue.position.x * red.radius) + (red.position.x * blue.radius)) / (blue.radius + red.radius);
                    const collisionPointY = ((blue.position.y * red.radius) + (red.position.y * blue.radius)) / (blue.radius + red.radius);

                    blue.position.x = collisionPointX + blue.radius * (blue.position.x - red.position.x) / distance;
                    blue.position.y = collisionPointY + blue.radius * (blue.position.y - red.position.y) / distance;
                    red.position.x = collisionPointX + red.radius * (red.position.x - blue.position.x) / distance;
                    red.position.y = collisionPointY + red.radius * (red.position.y - blue.position.y) / distance;

                    blue.velocity.x -= p * blue.mass * nx;
                    blue.velocity.y -= p * blue.mass * ny;
                    red.velocity.x -=- p * red.mass * nx;
                    red.velocity.y -=- p * red.mass * ny;
                }
            }
        }
    }
}
