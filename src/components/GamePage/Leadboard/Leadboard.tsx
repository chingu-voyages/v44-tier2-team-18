import './Leadboard.scss'
import { useAppSelector } from '../../../store';

interface leadboardProps {
  result1: number,
  result2: number,
  output: number | null
}

function Leadboard({ result1, result2, output }: leadboardProps): JSX.Element {

  const bot1Config = useAppSelector((state) => state.bot1Config);
  const bot2Config = useAppSelector((state) => state.bot2Config);
  const operation = useAppSelector((state) => state.operation);

  return (
    <div className="board-container">
      <div className='battle-result'>
        <div className='result-text'>Accumulated results</div>
        <div className='result-container'>
          <div className='each-bot'>
            <span className='bot-name'>
              {bot1Config.botName}
            </span>
            <div className='result'>{result1}</div>
          </div>
          <div className='each-bot'>
            <span className='bot-name'>
              {bot2Config.botName}
            </span>
            <div className='result'>{result2}</div>
          </div>
        </div>
      </div>
      <div className='bot-info'>
        <div className='info-text'> Bots' information</div>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>{bot1Config.botName}</th>
              <th>{bot2Config.botName}</th>
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
            <span className='value'>{output}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadboard;