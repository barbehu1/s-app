// SCSS
import './footer.scss';

// Modules
import {useMediaQuery} from '@react-hook/media-query';

// Images
import logoSapp from './images/logo-s-app.png';
import cercle from './images/circle.svg';

function FooterMobile() {
    return(
        <footer>
            <img className="circle1" src={cercle} alt="Cercle d'illustration"/>
            <div className="logoDiv">
                <img className="logo" src={logoSapp} alt="S'APP"/>
            </div>
            <div className="downloadButtonDiv">
                <button>Télécharger</button>
            </div>
            <div className="divProjet">
                <h3>PROJET</h3>
                <ul>
                    <a href="/equipe/"><li>Équipe</li></a>
                    <a href="/independance/"><li>Indépendance</li></a>
                </ul>
            </div>
            <div className="divApplication">
                <h3>APPLICATION</h3>
                <ul>
                    <a href="/features/"><li>Features</li></a>
                    <a href="/faq/"><li>FAQ</li></a>
                </ul>
            </div>
            <div className="divLiens">
                <h3>LIENS UTILES</h3>
                <ul>
                    <a href="mailto:hugo.barbe@edu.devinci.fr"><li>Contactez-nous</li></a>
                    <a href="/mentions-legales/"><li>Mentions légales</li></a>
                </ul>
            </div>
            <img className="circle2" src={cercle} alt="Cercle d'illustration"/>
        </footer>
    );
}

function FooterDesktop() {
    return(
        <footer>
            <img className="circle1" src={cercle} alt="Cercle d'illustration"/>
            <div className="logoDiv">
                <img className="logo" src={logoSapp} alt="S'APP"/>
            </div>
            <div className="downloadButtonDiv">
                <button>Télécharger</button>
            </div>
            <div className="divProjet">
                <h3>PROJET</h3>
                <ul>
                    <a href="/equipe/"><li>Équipe</li></a>
                    <a href="/independance/"><li>Indépendance</li></a>
                </ul>
            </div>
            <div className="divApplication">
                <h3>APPLICATION</h3>
                <ul>
                    <a href="/features/"><li>Features</li></a>
                    <a href="/faq/"><li>FAQ</li></a>
                </ul>
            </div>
            <div className="divLiens">
                <h3>LIENS UTILES</h3>
                <ul>
                    <a href="mailto:hugo.barbe@edu.devinci.fr"><li>Contactez-nous</li></a>
                    <a href="/mentions-legales/"><li>Mentions légales</li></a>
                </ul>
            </div>
            <img className="circle2" src={cercle} alt="Cercle d'illustration"/>
        </footer>
    );
}

function Footer() {
    const matches = useMediaQuery('only screen and (min-width: 1024px)');

    return (
        !matches ?
            <FooterMobile />
        :
            <FooterDesktop />
    )
}

export default Footer;