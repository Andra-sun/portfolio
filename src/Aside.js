import React, { useState } from "react";
import "./Aside.css";
import { useTranslation } from 'react-i18next';

function Aside() {

    //theme
    const [theme, setTheme] = useState('light');

    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);

        if (selectedTheme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    };

    //locale
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <aside className="Aside">
            <div id="fixed">
                <select onChange={handleLanguageChange}>
                    <option value="pt">pt</option>
                    <option value="en">en</option>
                </select>
                <select id="themeSwitcher" onChange={handleThemeChange}>
                    <option value="light">{t("claro")}</option>
                    <option value="dark">{t("escuro")}</option>
                </select>
            </div>
            <div id="foto">
                <img
                    src="https://avatars.githubusercontent.com/u/111245270?v=4"
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
                        <i className="fi fi-brands-instagram">
                            <div className="text-container">
                                <p>c.a.m.i_le</p>
                            </div>
                        </i>
                    </a>
                    <a href="https://github.com/Andra-sun">
                        <i className="fi fi-brands-github">
                            <div className="text-container">
                                <p>Andra-sun</p>
                            </div>
                        </i>
                    </a>
                    <a href="#">
                        <i className="fi fi-brands-linkedin">
                            <div className="text-container">
                                <p>camile andrade guimaraes</p>
                            </div>
                        </i>
                    </a>
                    <a href="#">
                        <i className="fi fi-sr-envelope">
                            <div className="text-container">
                                <p>camileguimaraes463@gmail.com</p>
                            </div>
                        </i>
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
