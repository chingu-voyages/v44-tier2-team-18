import './WelcomePage.scss';
import Git from '../../assets/git.png'
import { Link } from 'react-router-dom';
import Atropos from 'atropos/react';

function WelcomePage() {

    return (
        <>
            <Atropos className="my-atropos">
                <div className='container-home'>
                    <div className='main-text'>BOOLE BOTS BATTLE GAME</div>
                    <Link to="/gamepage" className='link'><button>
                        L E T'S P L A Y
                        <div id="clip">
                            <div id="leftTop" className="corner"></div>
                            <div id="rightBottom" className="corner"></div>
                            <div id="rightTop" className="corner"></div>
                            <div id="leftBottom" className="corner"></div>
                        </div>
                        <span id="rightArrow" className="arrow"></span>
                        <span id="leftArrow" className="arrow"></span>
                    </button></Link>
                </div>
            </Atropos>

            <div className="footer-home">
                <div className='Team'>
                    Our Team
                </div>


                <div className='Team-links'>
                    <a href='https://github.com/giangpham-cfg' className='links' target="_blank" rel="noopener noreferrer"><p>Giang<img src={Git} alt='github' className='github' /></p></a>
                    <a href='https://github.com/Emiri-i' className='links' target="_blank" rel="noopener noreferrer"><p>Emiri<img src={Git} alt='github' className='github' /></p></a>
                    <a href='https://github.com/LebzaM' className='links' target="_blank" rel="noopener noreferrer"><p>LebzaM <img src={Git} alt='github' className='github' /></p></a>

                </div>
                <div className='chingu'>
                    <p>@ 2023 Chingu-V44-Tier2-Team-18</p>
                </div>

            </div>
        </>

    )
}

export default WelcomePage;