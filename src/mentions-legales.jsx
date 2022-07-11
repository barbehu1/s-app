// SCSS
import './autres-pages.scss';

// Sections
import Header from './header';
import Footer from './footer';

function MentionsLegales() {
    return(
        <>
            <Header />
            <h2>Mention Légales</h2>
            <p>Contenu de la page Mentions Légales.</p>
            <Footer />
        </>
    )
}

export default MentionsLegales;