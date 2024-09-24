import { useState } from "react";
import "./App.css";
import Nav from "./Nav";

function App() {
    const [content, setContent] = useState("sobre");

    const navClick = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="appContainer">
            <Nav onNavClick={navClick} /> {}
            <div className="App">
                {content === "sobre" && <h1>Sobre mim</h1>}
                {content === "projetos" && <h1>Projetos</h1>}
                {content === "mensagem" && <h1>Mensagem</h1>}
            </div>
        </div>
    );
}

export default App;
