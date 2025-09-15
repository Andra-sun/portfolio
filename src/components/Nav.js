import { Link, useLocation } from "react-router-dom";
import { IoPerson, IoRocket, IoCodeSlash, IoSchool } from "react-icons/io5";
import { motion } from "framer-motion";
import "../static/css/Nav.css";
import { useTranslation } from "react-i18next";

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { t } = useTranslation("nav");

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            role="navigation"
            aria-label="Menu principal"
        >
            <motion.div
                className="nav-items"
                role="list"
                aria-label="Links de navegação"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    role="listitem"
                >
                    <Link
                        to="/"
                        className={`nav-link ${
                            currentPath === "/" ? "active" : ""
                        }`}
                        data-tooltip={t("about")}
                        aria-label={t("about")}
                        aria-current={currentPath === "/" ? "page" : undefined}
                    >
                        <IoPerson className="nav-icon" aria-hidden="true" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    role="listitem"
                >
                    <Link
                        to="/experiencia"
                        className={`nav-link ${
                            currentPath === "/experiencia" ? "active" : ""
                        }`}
                        data-tooltip={t("experience")}
                        aria-label={t("experience")}
                        aria-current={
                            currentPath === "/experiencia" ? "page" : undefined
                        }
                    >
                        <IoRocket className="nav-icon" aria-hidden="true" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    role="listitem"
                >
                    <Link
                        to="/projetos"
                        className={`nav-link ${
                            currentPath === "/projetos" ? "active" : ""
                        }`}
                        data-tooltip={t("projects")}
                        aria-label={t("projects")}
                        aria-current={
                            currentPath === "/projetos" ? "page" : undefined
                        }
                    >
                        <IoCodeSlash className="nav-icon" aria-hidden="true" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    role="listitem"
                >
                    <Link
                        to="/certificado"
                        className={`nav-link ${
                            currentPath === "/certificado" ? "active" : ""
                        }`}
                        data-tooltip={t("certificates")}
                        aria-label={t("certificates")}
                        aria-current={
                            currentPath === "/certificado" ? "page" : undefined
                        }
                    >
                        <IoSchool className="nav-icon" aria-hidden="true" />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
}

export default Nav;
