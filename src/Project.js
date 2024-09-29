import React from "react";
import { useTranslation } from "react-i18next";
import "./Project.css";

function Project() {
    const { t } = useTranslation("projects");

    return (
        <div className="projetos">
            <ul>
                {/* Adote um pet */}
                <li>
                    <img
                        src="https://avatars.githubusercontent.com/u/148292923?s=200&v=4"
                        alt="Project Thumbnail"
                    />
                    <div className="textArea">
                        <h2>Adote um pet</h2>
                        <p>{t("projetos.adotDes")}</p>
                        <div className="technologies">
                            <p>javascrip</p>
                            <p>django</p>
                            <p>python</p>
                            <p>postgres</p>
                        </div>
                        <a href="https://github.com/Adote-um-Pet-Web">
                            {t("projetos.verMais")}
                        </a>
                    </div>
                </li>

                {/* book guardian */}
                <li>
                    <img
                        src="https://avatars.githubusercontent.com/u/167376146?s=200&v=4"
                        alt="Project Thumbnail"
                    />
                    <div className="textArea">
                        <h2>Book Guardian</h2>
                        <p>{t("projetos.bookGuadianDes")}</p>
                        <div className="technologies">
                            <p>javascrip</p>
                            <p>django</p>
                            <p>python</p>
                            <p>postgres</p>
                        </div>
                        <a href="https://github.com/A3-P">
                            {t("projetos.verMais")}
                        </a>
                    </div>
                </li>

                {/* Shark blog */}
                <li>
                    <img
                        src="https://cdn-icons-png.freepik.com/512/3127/3127600.png"
                        alt="Project Thumbnail"
                    />
                    <div className="textArea">
                        <h2>Shark</h2>
                        <p>{t("projetos.sharkDes")}</p>
                        <div className="technologies">
                            <p>ruby</p>
                            <p>jekyll</p>
                        </div>
                        <a href="https://github.com/Andra-sun/Andra-sun.github.io">
                            {t("projetos.verMais")}
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Project;
