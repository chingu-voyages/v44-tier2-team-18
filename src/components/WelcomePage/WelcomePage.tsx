import './WelcomePage.scss';
import Git from '../../assets/git.png'
import { Link } from 'react-router-dom';

function WelcomePage() {
    return(
        

    <>
   
    <div className='container-home'>
        <h1>BOOLE BOTS BATTLE GAME</h1>
        <Link to="/gamepage" className='link'><button >Lets Play</button></Link>
        
    </div>

    <div className="footer-home">
        <div className='Team'>
            <h4>Our Team</h4>
        </div>
        
    
        <div className='Team-links'>
            <a href='https://github.com/Sheriff-Oladimeji' className='links' target="_blank" rel="noopener noreferrer"><p>Sheriff Oladimeji <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/giangpham-cfg' className='links' target="_blank" rel="noopener noreferrer"><p>Giang Pham <img src={Git} alt='github' className='github'/></p></a>
            <a href='#' className='links' target="_blank" rel="noopener noreferrer"><p>Daniel <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/Emiri-i' className='links' target="_blank" rel="noopener noreferrer"><p>Emiri Ishikawa <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/LebzaM' className='links' target="_blank" rel="noopener noreferrer"><p>LebzaM <img src={Git} alt='github' className='github'/></p></a>

        </div>
        <div className='chingu'>
            <p>@ 2023 Chingu-V44-Tier2-Team-18</p>
        </div>

    </div>
    </>

  )
}

export default WelcomePage;