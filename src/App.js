import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./static/css/App.css";
import About from "./pages/About";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import Knowledge from "./pages/Knowledge";
import Diploma from "./pages/Diploma";
import useGTM from "./hooks/useGTM";

// Componente para rastrear mudanças de página
function PageTracker() {
    const location = useLocation();
    const { trackPageView } = useGTM();
    const { t } = useTranslation();

    useEffect(() => {
        // Mapeia o caminho para o título da página
        const pathToTitle = {
            "/": t("sobreT"),
            "/experiencia": t("conhecimentoT"),
            "/projetos": t("projetosT"),
            "/certificado": t("certificadoT"),
        };

        // Rastreia a visualização da página
        trackPageView(
            pathToTitle[location.pathname] || "Página não encontrada",
            location.pathname
        );
    }, [location, t, trackPageView]);

    return null;
}

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="appContainer">
                <PageTracker />
                <Nav />
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    {" "}
                                    <h1>{t("sobreT")}</h1> <About />{" "}
                                </>
                            }
                        />
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
                        <Route
                            path="/certificado"
                            element={
                                <>
                                    <h1>{t("certificadoT")}</h1>
                                    <Diploma />
                                </>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
