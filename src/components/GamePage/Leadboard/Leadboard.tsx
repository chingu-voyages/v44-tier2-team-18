import './Leadboard.scss'
import { botImg } from './assets';
function Leadboard() {

    return (
        <div className="board-container">
             <h3>Battle Results</h3>
            <div className='result-container'>
                      <div className='bot-container'>
                    <div>
                        <p>Bot 1</p>
                          <img src={botImg} alt="bot-1" />
                  </div>
                    <div>
                        <p> Bot 2</p>
                          <img src={botImg} alt="bot-2" />
                  </div>
                </div>
</div>
    </div>
    )
}

export default Leadboard;