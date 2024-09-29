import React, { useState, useEffect } from "react";
import "./Aside.css";
import { useTranslation } from 'react-i18next';

function Aside() {
    // theme
    const [theme, setTheme] = useState('dark');
    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);

        if (selectedTheme === 'light') {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    };

    // Mutar/Desmutar
    const [isMuted, setIsMuted] = useState(false);

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
        const audioElement = document.getElementById("background-audio");
        if (audioElement) {
            audioElement.muted = !audioElement.muted; // Muda o estado do áudio
        }
    };

    // locale
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    // Letreiro
    useEffect(() => {
        const paragraphs = document.querySelectorAll('#mais-infos .text-container p');
        paragraphs.forEach(p => {
            if (p.textContent.length > 13) {
                p.classList.add('letreiro');
            }
        });
    }, []);

    return (
        <aside className="Aside">
            <audio id="background-audio" autoPlay loop>
                <source src="/img/project/lofi.mp3" type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <div id="fixed">
                <select onChange={handleLanguageChange}>
                    <option value="pt">pt</option>
                    <option value="en">en</option>
                </select>
                {/* <select id="themeSwitcher" onChange={handleThemeChange}>
                    <option value="dark">{t("escuro")}</option>
                    <option value="light">{t("claro")}</option>
                </select> */}
                
                <button id="muteButton" onClick={handleMuteToggle}>
                    {isMuted ? (
                        <i className="fi fi-sr-volume-mute"></i>
                    ) : (
                        <i className="fi fi-sr-volume"></i>
                    )}
                </button>
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
                    <a href="https://t.me/andra_sun">
                        <i className="fi fi-brands-telegram">
                            <div className="text-container">
                                <p>andra-sun</p>
                            </div>
                        </i>
                    </a>
                    <a href="#">
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
                        <i className="fi fi-brands-instagram"></i>
                    </a>
                    <a href="https://github.com/Andra-sun">
                        <i className="fi fi-brands-github"></i>
                    </a>
                    <a href="#">
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                    <a href="https://Andra-sun.github.io">
                        <i className="fi fi-sr-site"></i>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
