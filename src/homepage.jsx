// SCSS
import './homepage.scss';

// Modules
import {useMediaQuery} from '@react-hook/media-query';

// Images
import logoSapp from './images/logo-s-app.png';
import mockup1 from './images/mockup1.png';
import googlePlay from './images/google-play.png';
import appStore from './images/app-store.png';
import mockup2 from './images/mockup2.png';
import illustration1 from './images/illustration1.svg';
import cercle from './images/circle.svg';
import mockup3 from './images/mockup3.png';
import illustration2 from './images/illustration2.svg';
import mockup4 from './images/mockup4.png';
import sendIcon from './images/send-icon.png';

function HomepageMobile() {
    return(
        <>
            <section className="section1">
                <nav className="topNav">
                    <img src={logoSapp} alt="S'APP"/>
                    <h2>S'APP</h2>
                    <ul>
                        <li><a href="mailto:hugo.barbe@edu.devinci.fr">CONTACT</a></li>
                    </ul>
                </nav>
                <div className="accroche">
                    <img src={mockup1} alt="Cherchez de nouveaux vêtements"/>
                    <h1>Organisez facilement votre dressing.</h1>
                    <h2>S’APP vous propose de nouvelles tenues chaque jours !</h2>
                    <div className="storesIcons">
                        <img src={googlePlay} className="googlePlayStoreIcon" alt="Google Play Store"/>
                        <img src={appStore} className="appStoreIcon" alt="App Store"/>
                    </div>
                </div>
            </section>
            <section className="section2">
                <div className="part1">
                    <img src={mockup2} className="mockup2" alt="Votre tenue d'aujourd'hui"/>
                    <h3>Des vêtements pour <br />chaque temps</h3>
                    <p>Soleil, pluie ou vent ?<br />Je me sappe tout le temps</p>
                </div>
                <img className="illustration1" src={illustration1} alt="Flèche d'illustration1"/>
                <div className="part2">
                    <img src={mockup3} className="mockup3" alt="Votre dressing"/>
                    <h3>Retrouvez tous vos <br />vêtements dans <br />votre dressing</h3>
                    <p>Ajouter, catégoriser et trier vos <br />vêtements afin de créer de <br />nouvelles tenues</p>
                </div>
                <div className="part3">
                    <img src={mockup4} className="mockup4" alt="Prenez vos vêtements en photo"/>
                    <h3>S'APP arrive prochainement</h3>
                    <p>Envie de gagner du temps ?<br />Découvrez notre application très prochainement</p>
                    <form action="" method="post">
                        <input type="email" name="email" placeholder="ton@mail.com"/>
                        <button type="submit">
                            <img src={sendIcon} alt="Icone d'envoi"/>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

function HomepageDesktop() {
    return(
        <>

        </>
    );
}

function Homepage() {
    const matches = useMediaQuery('only screen and (min-width: 1024px)');

    return (
        !matches ?
            <HomepageMobile />
        :
            <HomepageDesktop />
    )
}

export default Homepage;