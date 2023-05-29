import './Leadboard.scss'
import { useAppSelector } from '../../../store';

function Leadboard() {

  const bot1Config = useAppSelector((state) => state.bot1Config);
  const bot2Config = useAppSelector((state) => state.bot2Config);
  const operation = useAppSelector((state) => state.operation);

  return (
    <div className="board-container">
      <div className='battle-result'>
        <div className='result-text'>Accumulated results</div>
        <div className='result-container'>
          <div className='bot-name'>
            {bot1Config.botName}
            <div className='result'>1</div>
          </div>
          <div className='bot-name'>
            {bot2Config.botName}
            <div className='result'>0</div>
          </div>
        </div>
      </div>
      <div className='bot-info'>
        <div className='info-text'> Bots' information</div>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Giang</th>
              <th>Ha</th>
            </tr>
            <tr>
              <th>Boolean value</th>
              <th className='value'>{bot1Config.booleanValue}</th>
              <th className='value'>{bot2Config.booleanValue}</th>
            </tr>
          </tbody>
        </table>
        <div className='result-info'>
          <div>
            Operation:
            <span className='value'>{operation}</span>
          </div>
          <div>
            Output:
            <span className='value'></span>
          </div>
        </div>
      </div>
      {/* <h3>Battle Results</h3>
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

      </div> */}
    </div>
  )
}

export default Leadboard;