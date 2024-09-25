import React, { useState } from "react";
import "./Aside.css";
import { useTranslation } from 'react-i18next';

function Aside() {

    //theme
    const [theme ,setTheme] = useState('dark');

    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);

        if (selectedTheme === 'light') {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
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
                    <option value="dark">{t("escuro")}</option>
                    <option value="light">{t("claro")}</option>
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
                    <a href="https://github.com/Andra-sun">
                        <i className="fi fi-sr-phone-call">
                            <div className="text-container">
                                <p>(77)998369814</p>
                            </div>
                        </i>
                    </a>
                    <a href="https://github.com/Andra-sun">
                        <i className="fi fi-sr-map-marker">
                            <div className="text-container">
                                <p>Guanambi-BA</p>
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
                <div id="redes">
                    <a href="#">
                            <i className="fi fi-brands-instagram">
                            </i>
                        </a>
                        <a href="https://github.com/Andra-sun">
                            <i className="fi fi-brands-github">
                            </i>
                        </a>
                        <a href="#">
                        <i className="fi fi-brands-linkedin">
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
