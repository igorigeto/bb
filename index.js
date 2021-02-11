const balls = [];

const setup = () => {
    const fps = 1 / 60;
    const delay = fps * 1000;
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    canvas.onmousemove = getMousePosition;
    canvas.onmouseup = throwBall;
    const options = {
        fps,
        ctx,
        width,
        height
    }
    const timer = setInterval(loop(options), delay);
}
const throwBall = (e) => {
    const {x, y} = getMousePosition(e);
    balls.push(new Ball(x, y, 5, .7, 20));
}

const getMousePosition = (e) => {
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;

    return {x, y}
}

const loop = options => () => {
    const {ctx, fps, width, height} = options;
    //create constants
    const density = 1.22;
    const dragCoefficient = 0.47;
    const gravity = 9.81;

    ctx.clearRect(0, 0, width, height);
    for(const ball of balls) {
        const drag = calculateDrag(ball, {dragCoefficient, density});
        const acceleration = calculateAcceleration(ball, {gravity, drag})
        calculateVelocityByFrame(ball, {acceleration, fps});
        calculatePosition(ball, {fps});        
        drawBall(ctx, ball);
        twoBallsOneBox(ball, balls);
        bounceOffWall(ball, options);
    }
};
