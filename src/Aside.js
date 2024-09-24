import "./Aside.css";

function Aside() {
    return (
        <aside className="Aside">
            <div id="foto">
                <img
                    src="https://andra-sun.github.io/portifolio/img/profile1.jpg"
                    alt="Imagem de perfil"
                />
            </div>
            <div id="infoBar">
                <div id="nomes">
                    <h1 id="nome">Camile</h1>
                    <p id="apelido">Andra</p>
                </div>
                <div id="mais-infos">
                    <a href="#">
                        <i className="fi fi-brands-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fi fi-brands-github"></i>
                    </a>
                    <a href="#">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                    <a href="#">
                        <i className="fi fi-sr-envelope"></i>
                    </a>
                </div>
                <button id="cv">
                    <i className="fi fi-rs-download"></i> Download CV
                </button>
            </div>
        </aside>
    );
}

export default Aside;
