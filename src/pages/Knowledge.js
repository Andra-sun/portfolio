import React from "react";
import "../static/css/Knowledge.css";
import Card from "../elements/cardKnow";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Knowledge() {
    const { t } = useTranslation("projects");
    const cards = {
        linguagem: [
            {
                name: "HTML",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
                name: "CSS",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
            {
                name: "Javascript",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
                name: "Next.js",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "React",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
                name: "Django",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
            },
            {
                name: "Python",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            },
            {
                name: "Java",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
            },
            {
                name: "Typescript",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
                name: "Markdown",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg",
            },
            {
                name: "Tailwind",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
        ],
        ferramenta: [
            {
                name: "VSCode",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
            },
            {
                name: "Github",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
            },
            {
                name: "Git",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
                name: "Arduino",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
            },
            {
                name: "Figma",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            },
            {
                name: "Godot",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
            },
            {
                name: "Linux",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
            },
            {
                name: "Eclipse",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
            },
            {
                name: "Cisco PT",
                image: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png",
            },
            {
                name: "Gimp",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg",
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <motion.div
            className="knowledge"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="knowledge-section">
                <h2>{t("projetos.lingefr")}</h2>
                <div className="knowledge-grid">
                    {cards.linguagem.map((card) => (
                        <motion.div key={card.name} variants={itemVariants}>
                            <Card {...card} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="knowledge-section">
                <h2>{t("projetos.ferramenta")}</h2>
                <div className="knowledge-grid">
                    {cards.ferramenta.map((card) => (
                        <motion.div key={card.name} variants={itemVariants}>
                            <Card {...card} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Knowledge;
