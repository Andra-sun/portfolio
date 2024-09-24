import './Nav.css';

function Nav({ onNavClick }) {
    return (
        <nav className="Nav">
            <a href="#" title="sobre mim" onClick={() => onNavClick('sobre')}><i className="fi fi-sr-user"></i></a>
            <a href="#" title="esperiencia" onClick={() => onNavClick('Esperiencia')}><i className="fi fi-sr-brain"></i></a>
            <a href="#" title="projetos" onClick={() => onNavClick('projetos')}><i className="fi fi-sr-apps"></i></a>
            <a href="#" title="mensagem" onClick={() => onNavClick('mensagem')}><i className="fi fi-sr-paper-plane"></i></a>
        </nav>
    );
}

export default Nav;
