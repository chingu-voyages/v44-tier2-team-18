import './WelcomePage.scss';
import Git from './Images/git.png';
import Linkedin from './Images/linkedin.png';
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
        <a href='#' className='links'><p>Sheriff Oladimeji <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/giangpham-cfg' className='links'><p>Giang Pham <img src={Git} alt='github' className='github'/></p></a>
            <a href='#' className='links'><p>Daniel <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/Emiri-i' className='links'><p>Emiri Ishikawa <img src={Git} alt='github' className='github'/></p></a>
            <a href='https://github.com/LebzaM' className='links'><p>LebzaM <img src={Git} alt='github' className='github'/></p></a>

        </div>
        <div className='chingu'>
            <p>@ 2023 Chingu-V44-Tier2-Team-18</p>
        </div>

    </div>
    </>

  )
}

export default WelcomePage;