import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./static/css/App.css";
import About from "./pages/About";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import Knowledge from "./pages/Knowledge";
import Diploma from "./pages/Diploma";


function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="appContainer">
                <Nav />
                <div className="App">
                    <Routes>
                        <Route path="/" element={ <> <h1>{t("sobreT")}</h1> <About /> </>} />
                        <Route
                            path="/experiencia"
                            element={
                                <>
                                    <h1>{t("conhecimentoT")}</h1>
                                    <Knowledge />
                                </>
                            }
                        />
                        <Route
                            path="/projetos"
                            element={
                                <>
                                    <h1>{t("projetosT")}</h1>
                                    <Project />
                                </>
                            }
                        />
                        {/* <Route
                            path="/mensagem"
                            element={<h1>{t("mensagemT")}</h1>}
                        /> */}
                        <Route path='/certificado' element={<><h1>{t("certificadoT")}</h1><Diploma/></>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
