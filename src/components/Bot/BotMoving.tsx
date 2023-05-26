
interface Bot {
    position: number[];
    direction: "North" | "South" | "East" | "West";
    colour: "Red" | "Blue";
    booleanValue: number;
    active: boolean
}

export const botMoving = (newBot: Bot) => {
    switch (newBot.direction) {
        case 'North': {
            if (newBot.position[1] === 0) {
                newBot.position[1] += 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.direction = 'East';
                } else if (randomDirection === 1) {
                    newBot.direction = 'West';
                } else {
                    newBot.direction = 'South';
                };
            } else {
                newBot.position[1] -= 1;
            };
            break;
        }
        case 'South': {
            if (newBot.position[1] === 7) {
                newBot.position[1] -= 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.direction = 'East';
                } else if (randomDirection === 1) {
                    newBot.direction = 'West';
                } else {
                    newBot.direction = 'North';
                };
            } else {
                newBot.position[1] += 1;
            };
            break;
        }
        case 'East': {
            if (newBot.position[0] === 7) {
                newBot.position[0] -= 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.direction = 'South';
                } else if (randomDirection === 1) {
                    newBot.direction = 'North';
                } else {
                    newBot.direction = 'West';
                };
            } else {
                newBot.position[0] += 1;
            };
            break;
        }
        case 'West': {
            if (newBot.position[0] === 0) {
                newBot.position[0] += 1;
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.direction = 'South';
                } else if (randomDirection === 1) {
                    newBot.direction = 'North';
                } else {
                    newBot.direction = 'East';
                };
            } else {
                newBot.position[0] -= 1;
            };
            break;
        }
    }
    return newBot;
}



