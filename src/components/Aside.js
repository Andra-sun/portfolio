import React, { useState, useEffect } from "react";
import "../static/css/Aside.css";
import { useTranslation } from "react-i18next";
import useGTM from "../hooks/useGTM";

function Aside() {
    const { trackLanguageChange, trackDownload, trackClick } = useGTM();

    // locale
    const { i18n } = useTranslation();
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        const currentLanguage = i18n.language;
        i18n.changeLanguage(selectedLanguage);

        if (selectedLanguage === "unown") {
            document.body.classList.add("unown-font");
        } else {
            document.body.classList.remove("unown-font");
        }

        // Rastrear mudança de idioma
        trackLanguageChange(currentLanguage, selectedLanguage);
    };

    // Letreiro
    useEffect(() => {
        const paragraphs = document.querySelectorAll(
            "#mais-infos .text-container p"
        );
        paragraphs.forEach((p) => {
            if (p.textContent.length > 13) {
                p.classList.add("letreiro");
            }
        });
    }, []);

    //menu mobile
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        trackClick("menu-mobile", "button", menuOpen ? "close" : "open");
    };

    //download
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "cv_27022025.pdf";
        link.download = "CamileCV.pdf";
        link.click();

        // Rastrear download do CV
        trackDownload("CamileCV.pdf", "pdf");
    };

    // Handler para links sociais
    const handleSocialClick = (platform, url) => {
        trackClick(platform, "social-link", url);
    };

    return (
        <aside
            className={`Aside ${menuOpen ? "open" : ""}`}
            data-testid="aside-component"
        >
            <div id="fixed">
                <button className="menu-toggle" onClick={toggleMenu}>
                    <div className={`hamburger ${menuOpen ? "open" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <select onChange={handleLanguageChange}>
                    <option value="pt">pt</option>
                    <option value="en">en</option>
                    <option value="unown">un</option>
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
                    <a
                        href="https://t.me/andra_sun"
                        onClick={() =>
                            handleSocialClick(
                                "telegram",
                                "https://t.me/andra_sun"
                            )
                        }
                    >
                        <i className="fi fi-brands-telegram">
                            <div className="text-container">
                                <p>andra-sun</p>
                            </div>
                        </i>
                    </a>
                    <a
                        href="https://www.google.com/maps/place/Guanambi+-+BA/@-14.1890625,-43.1547377,10z/data=!3m1!4b1!4m6!3m5!1s0x75ac2d5ea46c245:0xdbbd134623c62738!8m2!3d-14.2193421!4d-42.7796873!16s%2Fm%2F04lghl4?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                        onClick={() => handleSocialClick("location", "maps")}
                    >
                        <i className="fi fi-sr-map-marker">
                            <div className="text-container">
                                <p>Guanambi-BA</p>
                            </div>
                        </i>
                    </a>
                    <a
                        href="mailto:camilea_guimaraes@outlook.com"
                        onClick={() => handleSocialClick("email", "mailto")}
                    >
                        <i className="fi fi-sr-envelope">
                            <div className="text-container">
                                <p>camilea_guimaraes@outlook.com</p>
                            </div>
                        </i>
                    </a>
                </div>
                <div id="redes">
                    <a
                        href="https://github.com/Andra-sun"
                        onClick={() =>
                            handleSocialClick(
                                "github",
                                "https://github.com/Andra-sun"
                            )
                        }
                    >
                        <i className="fi fi-brands-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/camile-andrade-guimaraes"
                        onClick={() =>
                            handleSocialClick(
                                "linkedin",
                                "https://linkedin.com/in/camile-andrade-guimaraes"
                            )
                        }
                    >
                        <i className="fi fi-brands-linkedin"></i>
                    </a>
                    <a
                        href="https://Andra-sun.github.io"
                        onClick={() =>
                            handleSocialClick(
                                "portfolio",
                                "https://Andra-sun.github.io"
                            )
                        }
                    >
                        <i className="fi fi-sr-site"></i>
                    </a>
                </div>
                <button id="cv" onClick={downloadCV}>
                    <i className="fi fi-rs-download"></i> Download CV
                </button>
            </div>
        </aside>
    );
}

export default Aside;
