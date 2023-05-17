import Bot from '../../Bot/Bot';
import './Arena.scss';
import React, { useState } from 'react';

let genNArray = (n: number) => Array.from({ length: n }, () => ({}));

function Arena(): JSX.Element {
    const [grid, setGrid] = useState(genNArray(8).map(() => genNArray(8)));
    return (
        <div className="board">
            {grid.map((row, i) => {
                return (
                    <div className="row">
                        {row.map((col, j) => {
                            return <Bot columnPosition={i} rowPosition={j} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}
// function generateBots() {
//     const bots = [];
//     for (let row = 0; row < 8; row++) {
//         const rowBots = [];
//         for (let col = 0; col < 8; col++) {
//             rowBots.push(<Bot columnPosition={col} rowPosition={row} />);
//         }
//         bots.push(<div className='row'>{rowBots}</div>);
//     }
//     return bots;
// }

// function Arena(): JSX.Element {
//     return <div className="board">{generateBots()}</div>;
// }

export default Arena;