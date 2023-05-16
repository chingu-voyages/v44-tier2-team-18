import Bot from '../../Bot/Bot';
import './Arena.scss';
import React from 'react';

function generateBots() {
    const bots = [];
    for (let row = 0; row < 8; row++) {
        const rowBots = [];
        for (let col = 0; col < 8; col++) {
            rowBots.push(<Bot columnPosition={col} rowPosition={row} />);
        }
        bots.push(<div className='row'>{rowBots}</div>);
    }
    return bots;
}

function Arena(): JSX.Element {
    return <div className="board">{generateBots()}</div>;
}

export default Arena;