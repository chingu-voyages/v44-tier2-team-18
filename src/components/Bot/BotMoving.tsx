
interface Bot {
    botName: string;
    position: number[];
    active: boolean;
    colour: string;
    booleanValue: string;
    startingDirection: string;
}

export const botMoving = (newBot: Bot) => {
    switch (newBot.startingDirection) {
        case 'north': {
            if (newBot.position[1] === 0) {
                newBot.position = [newBot.position[0], newBot.position[1] + 1];
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.startingDirection = 'east';
                } else if (randomDirection === 1) {
                    newBot.startingDirection = 'west';
                } else {
                    newBot.startingDirection = 'south';
                };
            } else {
                newBot.position = [newBot.position[0], newBot.position[1] - 1];
            };
            break;
        }
        case 'south': {
            if (newBot.position[1] === 7) {
                newBot.position = [newBot.position[0], newBot.position[1] - 1];
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.startingDirection = 'east';
                } else if (randomDirection === 1) {
                    newBot.startingDirection = 'west';
                } else {
                    newBot.startingDirection = 'north';
                };
            } else {
                newBot.position = [newBot.position[0], newBot.position[1] + 1];
            };
            break;
        }
        case 'east': {
            if (newBot.position[0] === 7) {
                newBot.position = [newBot.position[0] - 1, newBot.position[1]];
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.startingDirection = 'south';
                } else if (randomDirection === 1) {
                    newBot.startingDirection = 'north';
                } else {
                    newBot.startingDirection = 'west';
                };
            } else {
                newBot.position = [newBot.position[0] + 1, newBot.position[1]];
            };
            break;
        }
        case 'west': {
            if (newBot.position[0] === 0) {
                newBot.position = [newBot.position[0] + 1, newBot.position[1]];
                const randomDirection = Math.floor(Math.random() * 3);
                if (randomDirection === 0) {
                    newBot.startingDirection = 'south';
                } else if (randomDirection === 1) {
                    newBot.startingDirection = 'north';
                } else {
                    newBot.startingDirection = 'east';
                };
            } else {
                newBot.position = [newBot.position[0] - 1, newBot.position[1]];
            };
            break;
        }
    }
    return newBot;
}
