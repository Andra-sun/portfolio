import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./App.css";
import Nav from "./Nav";
import ProjectForm from "./ProjectForm";
import Project from "./Project";

function App() {
    const { t } = useTranslation();
    const [content, setContent] = useState("sobre");
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await axios.get("http://localhost:5000/projetos");
            setProjects(response.data);
        } catch (error) {
            console.error("Erro ao buscar projetos:", error);
        }
    };

    useEffect(() => {
        if (content === "projetos") {
            fetchProjects();
        }
    }, [content]);

    const navClick = (newContent) => {
        setContent(newContent);
    };

    return (
        <div className="appContainer">
            <Nav onNavClick={navClick} />
            <div className="App">
                {content === "sobre" && <h1>{t("sobreT")}</h1>}
                {content === "projetos" && (
                    <>
                        <h1>Meus Projetos</h1>
                        <Project
                            fetchProjects={fetchProjects}
                            projects={projects}
                        />
                    </>
                )}
                {content === "mensagem" && <h1>{t("mensagemT")}</h1>}
                {content === "adicionar" && (
                    <ProjectForm fetchProjects={fetchProjects} />
                )}
            </div>
        </div>
    );
}

export default App;
