((msg) => {
    console.log(msg);
    it('Should return an object', () => {
        // Arrange
        const dragCoefficient = 0.47;
        const density = 1.22;
        const ball = {
            area: 0.007853981633974483,
            velocity: {
                x: 1.2,
                y: 3.7
            }
        };
        const expected = typeof {};
        // Act
        const result = calculateDrag(ball, { dragCoefficient, density });
        // Assert
        assert(typeof result === expected);
    })
    it('Should return an object with x and y fields of type number', () => {
        // Arrange
        const dragCoefficient = 0.47;
        const density = 1.22;
        const ball = {
            area: 0.007853981633974483,
            velocity: {
                x: 1.2,
                y: 3.7
            }
        };
        const expectedX = typeof 1;
        const expectedY = typeof 1;
        // Act
        const { x, y } = calculateDrag(ball, { dragCoefficient, density });
        // Assert
        assert(typeof x === expectedX && typeof y === expectedY);
    });
    it('Should return drag.x = -0.003242500609623097 and drag.y = -0.030826273156764027 for a ball velocity of x = 1.2 and y = 3.7', () => {
        // Arrange
        const dragCoefficient = 0.47;
        const density = 1.22;
        const ball = {
            area: 0.007853981633974483,
            velocity: {
                x: 1.2,
                y: 3.7
            }
        };
        const expectedX = -0.003242500609623097;
        const expectedY = -0.030826273156764027;
        // Act
        const { x, y } = calculateDrag(ball, { dragCoefficient, density });
        // Assert
        assert(x === expectedX && y === expectedY);
    });
}
)('Testing calculateDrag');

((msg) => {
    console.log(msg);
    it('Should return an object', () => {
        // Arrange
        const gravity = 9.81;
        const drag = {x: 1, y: 1};
        const ball = {
            mass: 20
        };
        const expected = typeof {};
        // Act
        const result = calculateAcceleration(ball, { gravity, drag });
        // Assert
        assert(typeof result === expected);
    })
})('Testing calculateAcceleration');
