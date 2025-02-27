import React from "react";
import { useTranslation } from "react-i18next";
import "../static/css/About.css";

function About() {
    const { t } = useTranslation("about");

    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: t("saudacao") }} />
            <p dangerouslySetInnerHTML={{ __html: t("descricao1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("descricao2") }} />
            <p>{t("convite")}</p>
        </div>
    );
}

export default About;