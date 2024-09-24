import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importa useTranslation
import "./App.css";
import Nav from "./Nav";

function App() {
    const { t } = useTranslation(); // Inicializa useTranslation
    const [content, setContent] = useState("sobre");

    const navClick = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="appContainer">
            <Nav onNavClick={navClick} />
            <div className="App">
                {content === "sobre" && <h1>{t("sobreT")}</h1>}
                {content === "projetos" && <h1>{t("projetosT")}</h1>}
                {content === "mensagem" && <h1>{t("mensagemT")}</h1>}
            </div>
        </div>
    );
}

export default App;
