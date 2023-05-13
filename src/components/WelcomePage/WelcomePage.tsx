import './WelcomePage.scss';
import Git from './Images/github2.png';
import Linkedin from './Images/linkedin.png';
function WelcomePage() {
    return(

    <>
    <div className='container-home'>
        <h1>BOOLE BOTS BATTLE GAME</h1>
        <button>Lets Play</button>
        
    </div>

    <div className="footer-home">
        <div className='Team'>
            <h4>Our Team</h4>
        </div>
        
    
        <div className='Team-links'>
            <p>Sheriff Oladimeji <img src={Git} alt='github' className='github'/><img src={Linkedin} alt='linkedin' className='in'/></p>
            <p>Giang Pham <img src={Git} alt='github' className='github'/><img src={Linkedin} alt='linkedin' className='in'/></p>
            <p>Daniel <img src={Git} alt='github' className='github'/><img src={Linkedin} alt='linkedin' className='in'/></p>
            <p>Emiri Ishikawa <img src={Git} alt='github' className='github'/><img src={Linkedin} alt='linkedin' className='in'/></p>
            <p>LebzaM <img src={Git} alt='github' className='github'/><img src={Linkedin} alt='linkedin' className='in'/></p>

        </div>
        <div className='chingu'>
            <p>@ 2023 Chingu-V44-Tier2-Team-18</p>
        </div>

    </div>
    </>

  )
}

export default WelcomePage;