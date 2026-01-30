import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useGTM from "../hooks/useGTM";
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoGlobe,
    IoLocationSharp,
    IoMail,
    IoPaperPlane,
    IoCloudDownload,
} from "react-icons/io5";
import "../static/css/Aside.css";

function Aside() {
    const { i18n } = useTranslation();
    const { trackLanguageChange, trackDownload, trackClick } = useGTM();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        const currentLanguage = i18n.language;
        i18n.changeLanguage(selectedLanguage);

        if (selectedLanguage === "unown") {
            document.body.classList.add("unown-font");
        } else {
            document.body.classList.remove("unown-font");
        }

        trackLanguageChange(currentLanguage, selectedLanguage);
    };

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "curriculo.pdf";
        link.download = "CamileCV.pdf";
        link.click();

        trackDownload("CamileCV.pdf", "pdf");
    };

    const handleSocialClick = (platform, url) => {
        trackClick(platform, "social-link", url);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        trackClick("menu-mobile", "button", !menuOpen ? "open" : "close");
    };

    return (
        <>
            <motion.div
                className="language-select"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                role="region"
                aria-label="Seletor de idioma"
            >
                <motion.select
                    onChange={handleLanguageChange}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Selecione o idioma"
                    role="combobox"
                    aria-expanded="false"
                    aria-controls="language-options"
                    aria-haspopup="listbox"
                    id="language-select"
                >
                    <option value="en" aria-selected={i18n.language === "en"}>
                        English
                    </option>
                    <option value="pt" aria-selected={i18n.language === "pt"}>
                        Português
                    </option>
                    <option
                        value="unown"
                        aria-selected={i18n.language === "unown"}
                    >
                        Unown
                    </option>
                </motion.select>
            </motion.div>

            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
            >
                <div className={`hamburger ${menuOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <motion.aside
                className={menuOpen ? "open" : ""}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                role="complementary"
                aria-label="Informações de perfil e contato"
            >
                <motion.div
                    className="profile-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    role="img"
                    aria-label="Foto de perfil de Camile"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/111245270?v=4"
                        alt="Imagem de perfil"
                    />
                </motion.div>

                <motion.div
                    className="profile-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    role="region"
                    aria-label="Informações básicas"
                >
                    <h1>Camile</h1>
                    <p>Andra</p>
                </motion.div>

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    role="region"
                    aria-label="Informações de contato"
                >
                    <motion.a
                        href="https://t.me/andra_sun"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            handleSocialClick(
                                "telegram",
                                "https://t.me/andra_sun"
                            )
                        }
                        aria-label="Telegram: andra-sun"
                    >
                        <IoPaperPlane className="icon" aria-hidden="true" />
                        <span>andra-sun</span>
                    </motion.a>

                    <motion.a
                        href="https://www.google.com/maps/place/Guanambi+-+BA"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSocialClick("location", "maps")}
                        aria-label="Localização: Guanambi-BA"
                    >
                        <IoLocationSharp className="icon" aria-hidden="true" />
                        <span>Guanambi-BA</span>
                    </motion.a>

                    <motion.a
                        href="mailto:camilea_guimaraes@outlook.com"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSocialClick("email", "mailto")}
                        aria-label="Email: camilea_guimaraes@outlook.com"
                    >
                        <IoMail className="icon" aria-hidden="true" />
                        <span>camilea_guimaraes@outlook.com</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="social-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    role="region"
                    aria-label="Redes sociais"
                >
                    <motion.a
                        href="https://github.com/Andra-sun"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            handleSocialClick(
                                "github",
                                "https://github.com/Andra-sun"
                            )
                        }
                        aria-label="GitHub"
                    >
                        <IoLogoGithub className="icon" aria-hidden="true" />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/camile-andrade-guimaraes"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            handleSocialClick(
                                "linkedin",
                                "https://linkedin.com/in/camile-andrade-guimaraes"
                            )
                        }
                        aria-label="LinkedIn"
                    >
                        <IoLogoLinkedin className="icon" aria-hidden="true" />
                    </motion.a>
                    <motion.a
                        href="https://Andra-sun.github.io"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            handleSocialClick(
                                "portfolio",
                                "https://Andra-sun.github.io"
                            )
                        }
                        aria-label="Portfólio"
                    >
                        <IoGlobe className="icon" aria-hidden="true" />
                    </motion.a>
                </motion.div>

                <motion.button
                    className="cv-button"
                    onClick={downloadCV}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Download do currículo"
                >
                    <IoCloudDownload className="icon" aria-hidden="true" />
                    Download CV
                </motion.button>
            </motion.aside>
        </>
    );
}

export default Aside;
