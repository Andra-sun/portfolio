import React from "react";
import { useTranslation } from "react-i18next";
import "./Project.css";

function Project() {
    const { t } = useTranslation('projects');

    return (
        <div className="projetos">
            <ul>
                {/* book guardian */}
                <li>
                    <img src="https://github.com/A3-P/.github/raw/main/profile/images/mainPage.png" alt="Project Thumbnail" />
                    <div className="textArea">
                        <h2>Book Guardian</h2>
                        <p>{t('projetos.bookGuadianDes')}</p>
                        <div className="technologies">
                            <p>javascrip</p>
                            <p>django</p>
                            <p>python</p>
                            <p>postgres</p>
                        </div>
                        <a href="ttps://github.com/A3-P">{t('projetos.verMais')}</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Project;
