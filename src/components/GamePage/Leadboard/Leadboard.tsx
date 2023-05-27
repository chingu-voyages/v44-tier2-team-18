import './Leadboard.scss'
import { botImg } from '../../../assets';

function Leadboard() {

  return (
    <div className="board-container">
      <h3>Battle Results</h3>
      <div className='result-container'>
        <div className='bot-container'>
          <div className='bot'>
            <p>Bot 1</p>
            <img src={botImg} alt="bot-1" />
          </div>
          <div className='bot'>
            <p> Bot 2</p>
            <img src={botImg} alt="bot-2" />
          </div>
        </div>
        <div className='result-info'>
          <p>Winner:</p>
          <p>Looser:</p>
        </div>

      </div>
    </div>
  )
}

export default Leadboard;