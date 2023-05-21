import './Leadboard.scss'

function Leadboard() {

    return <div className="board-container">
        <div className='title'>
            <h3>Bot results</h3>
        </div >
        <div className='botname'>
        <div className='botname-A'>
            <p>Bot A</p>
            

        </div>
        <div>
            <p>Winner</p>
            {/* Functional code that shows the winner of the round after the arena battle */}
        </div>
        <div className='botname-B'>
            
            <p>Bot B</p>

        </div>
        </div>
    </div>;
}

export default Leadboard;