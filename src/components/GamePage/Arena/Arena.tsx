import Bot from '../../Bot/Bot';
import './Arena.scss';
import React from 'react';

function Arena(): JSX.Element {
    return (
        <div className="board">
            <div className='row'>
                <Bot columnPosition={0} rowPosition={0} />
                <Bot columnPosition={1} rowPosition={0} />
                <Bot columnPosition={2} rowPosition={0} />
                <Bot columnPosition={3} rowPosition={0} />
                <Bot columnPosition={4} rowPosition={0} />
                <Bot columnPosition={5} rowPosition={0} />
                <Bot columnPosition={6} rowPosition={0} />
                <Bot columnPosition={7} rowPosition={0} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={0} />
                <Bot columnPosition={1} rowPosition={1} />
                <Bot columnPosition={2} rowPosition={1} />
                <Bot columnPosition={3} rowPosition={1} />
                <Bot columnPosition={4} rowPosition={1} />
                <Bot columnPosition={5} rowPosition={1} />
                <Bot columnPosition={6} rowPosition={1} />
                <Bot columnPosition={7} rowPosition={1} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={0} />
                <Bot columnPosition={1} rowPosition={2} />
                <Bot columnPosition={2} rowPosition={2} />
                <Bot columnPosition={3} rowPosition={2} />
                <Bot columnPosition={4} rowPosition={2} />
                <Bot columnPosition={5} rowPosition={2} />
                <Bot columnPosition={6} rowPosition={2} />
                <Bot columnPosition={7} rowPosition={2} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={3} />
                <Bot columnPosition={1} rowPosition={3} />
                <Bot columnPosition={2} rowPosition={3} />
                <Bot columnPosition={3} rowPosition={3} />
                <Bot columnPosition={4} rowPosition={3} />
                <Bot columnPosition={5} rowPosition={3} />
                <Bot columnPosition={6} rowPosition={3} />
                <Bot columnPosition={7} rowPosition={3} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={4} />
                <Bot columnPosition={1} rowPosition={4} />
                <Bot columnPosition={2} rowPosition={4} />
                <Bot columnPosition={3} rowPosition={4} />
                <Bot columnPosition={4} rowPosition={4} />
                <Bot columnPosition={5} rowPosition={4} />
                <Bot columnPosition={6} rowPosition={4} />
                <Bot columnPosition={7} rowPosition={4} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={5} />
                <Bot columnPosition={1} rowPosition={5} />
                <Bot columnPosition={2} rowPosition={5} />
                <Bot columnPosition={3} rowPosition={5} />
                <Bot columnPosition={4} rowPosition={5} />
                <Bot columnPosition={5} rowPosition={5} />
                <Bot columnPosition={6} rowPosition={5} />
                <Bot columnPosition={7} rowPosition={5} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={6} />
                <Bot columnPosition={1} rowPosition={6} />
                <Bot columnPosition={2} rowPosition={6} />
                <Bot columnPosition={3} rowPosition={6} />
                <Bot columnPosition={4} rowPosition={6} />
                <Bot columnPosition={5} rowPosition={6} />
                <Bot columnPosition={6} rowPosition={6} />
                <Bot columnPosition={7} rowPosition={6} />
            </div>
            <div className='row'>
                <Bot columnPosition={0} rowPosition={7} />
                <Bot columnPosition={1} rowPosition={7} />
                <Bot columnPosition={2} rowPosition={7} />
                <Bot columnPosition={3} rowPosition={7} />
                <Bot columnPosition={4} rowPosition={7} />
                <Bot columnPosition={5} rowPosition={7} />
                <Bot columnPosition={6} rowPosition={7} />
                <Bot columnPosition={7} rowPosition={7} />
            </div>
        </div>
    )
}

export default Arena;