import React from "react";
import { useTranslation } from "react-i18next";
import "../static/css/Project.css";
import Card from "../elements/cardProject";

function Project() {
    const { t } = useTranslation("projects");
    const cards = [
        {
            name: "BeeFleet",
            image: "https://avatars.githubusercontent.com/t/12972006?s=116&v=4",
            description: t("projetos.beefleet"),
            linguage: [
                "javascript",
                "tailwindcss",
                "next.js",
            ],
            link1: "https://github.com/HublastX/BeeFleet",
            link2: "https://hublast.com/beefleet/",
        },
        {
            name: "Adote um pet",
            image: "https://avatars.githubusercontent.com/u/148292923?s=200&v=4",
            description: t("projetos.adotDes"),
            linguage: ["javascript", "django", "python"],
            link1: "https://github.com/Adote-um-Pet-Web",
            link2: "https://adoteumpet.up.railway.app/",
        },
        {
            name: "Book Guardian",
            image: "https://avatars.githubusercontent.com/u/167376146?s=200&v=4",
            description: t("projetos.bookGuadianDes"),
            linguage: ["javascript", "django", "python"],
            link1: "https://github.com/A3-P",
            link2: "https://book-guardian-production.up.railway.app/",
        },
        {
            name: "Shark",
            image: "https://andra-sun.github.io/assets/img/favicons/web-app-manifest-512x512.png",
            description: t("projetos.sharkDes"),
            linguage: ["ruby", "jekyll"],
            link1: "https://github.com/Andra-sun/Andra-sun.github.io",
            link2: "https://andra-sun.github.io/",
        },
        {
            name: "Pixel Mart",
            image: "https://github.com/wendellast/Pixel-Mart/blob/main/static/assets/img/icon.png?raw=true",
            description: t("projetos.pixelDes"),
            linguage: ["javascript", "python"],
            link1: "https://github.com/wendellast/Pixel-Mart",
            link2: "https://web-production-b8d4.up.railway.app/",
        },
    ];

    return (
        <div className="projetos">
            <ul>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        name={card.name}
                        description={card.description}
                        linguage={card.linguage}
                        link1={card.link1}
                        link2={card.link2}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Project;
