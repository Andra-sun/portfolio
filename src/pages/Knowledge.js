import React from "react";
import "../static/css/Knowledge.css";
import Card from "../elements/cardKnow";
import { useTranslation } from "react-i18next";

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
        ],
    };

    return (
        <div className="knowledge">
            <ul>
                <li>
                    <h2>{t("projetos.lingefr")}</h2>
                    <div className="list">
                        {cards.linguagem.map((card) => (
                            <Card key={card.name} image={card.image} name={card.name} />
                        ))}
                    </div>
                </li>
                <li>
                    <h2>{t("projetos.ferramenta")}</h2>
                    <div class="list">
                        {cards.ferramenta.map((card) => (
                            <Card key={card.name} image={card.image} name={card.name} />
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Knowledge;
