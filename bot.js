const dinoBot = setInterval(() => {
    const dino = Runner.instance_.tRex;
    const obstacles = Runner.instance_.horizon.obstacles;
    if (obstacles.length > 0) {
        const obstacle = obstacles[0];
        const distance = obstacle.xPos;
        if (distance < 80 && dino.jumping === false) {
            dino.startJump(0.1);
        }
    }
}, 10);
