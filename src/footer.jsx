import './footer.scss';

function FooterMobile() {
    return(
        <footer>
            <img class="circle1" src="images/circle.svg" alt="Cercle d'illustration"/>
            <div class="logoDiv">
                <img class="logo" src="images/logo-s-app.png" alt="S'APP"/>
            </div>
            <div class="downloadButtonDiv">
                <button>Télécharger</button>
            </div>
            <div class="divProjet">
                <h3>PROJET</h3>
                <ul>
                    <li>Équipe</li>
                    <li>Indépendance</li>
                </ul>
            </div>
            <div class="divApplication">
                <h3>APPLICATION</h3>
                <ul>
                    <li>Features</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div class="divLiens">
                <h3>LIENS UTILES</h3>
                <ul>
                    <a href="mailto:hugo.barbe@edu.devinci.fr"><li>Contactez-nous</li></a>
                    <li>Mentions légales</li>
                </ul>
            </div>
            <img class="circle2" src="images/circle.svg" alt="Cercle d'illustration"/>
        </footer>
    );
}

function FooterDesktop() {
    return(
        <footer>
            <img class="circle1" src="images/circle.svg" alt="Cercle d'illustration"/>
            <div class="logoDiv">
                <img class="logo" src="images/logo-s-app.png" alt="S'APP"/>
            </div>
            <div class="downloadButtonDiv">
                <button>Télécharger</button>
            </div>
            <div class="divProjet">
                <h3>PROJET</h3>
                <ul>
                    <li>Équipe</li>
                    <li>Indépendance</li>
                </ul>
            </div>
            <div class="divApplication">
                <h3>APPLICATION</h3>
                <ul>
                    <li>Features</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div class="divLiens">
                <h3>LIENS UTILES</h3>
                <ul>
                    <a href="mailto:hugo.barbe@edu.devinci.fr"><li>Contactez-nous</li></a>
                    <li>Mentions légales</li>
                </ul>
            </div>
            <img class="circle2" src="images/circle.svg" alt="Cercle d'illustration"/>
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