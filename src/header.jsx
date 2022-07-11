// SCSS
import './header.scss';

// Modules
import {useMediaQuery} from '@react-hook/media-query';

// Images
import logoSapp from './images/logo-s-app.png';

function HeaderMobile() {
    return(
        <header>
            <img src={logoSapp} alt="Logo de l'application S'APP" />
            <h1>S'APP</h1>
            <ul>
                <li><a href="mailto:hugo.barbe@edu.devinci.fr">CONTACT</a></li>
            </ul>
        </header>
    )
}

function HeaderDesktop() {
    return(
        <header>
            <div className="navLeft">
                <img src={logoSapp} alt="Logo de l'application S'APP" />
                <h1>S'APP</h1>
            </div>
            <div className="navRight">
                <ul>
                    <li><a href="mailto:hugo.barbe@edu.devinci.fr">CONTACT</a></li>
                </ul>
            </div>
        </header>
    )
}

function Header() {
    const matches = useMediaQuery('only screen and (min-width: 1024px)');

    return (
        !matches ?
            <HeaderMobile />
        :
            <HeaderDesktop />
    )
}

export default Header;