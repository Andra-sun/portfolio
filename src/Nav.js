import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <nav className="Nav">
            <Link to="/" title="sobre mim"><i className="fi fi-sr-user"></i></Link>
            <Link to="/experiencia" title="experiência"><i className="fi fi-sr-brain"></i></Link>
            <Link to="/projetos" title="projetos"><i className="fi fi-sr-apps"></i></Link>
            {/* <Link to="/mensagem" title="mensagem"><i className="fi fi-sr-comment-alt"></i></Link> */}
            <Link to="/certificado" title="certificados"><i className="fi fi-sr-diploma"></i></Link>
        </nav>
    );
}

export default Nav;
