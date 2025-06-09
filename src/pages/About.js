import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../static/css/About.css";

function About() {
    const { t } = useTranslation("about");

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="about-container">
            <motion.h1
                className="greeting"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                dangerouslySetInnerHTML={{ __html: t("saudacao") }}
            />

            <motion.div
                className="about-content"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
            >
                <p dangerouslySetInnerHTML={{ __html: t("descricao1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("descricao2") }} />
                <p className="invitation">{t("convite")}</p>
            </motion.div>
        </div>
    );
}

export default About;
