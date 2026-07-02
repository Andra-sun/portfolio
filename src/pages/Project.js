import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../static/css/Project.css";
import Card from "../elements/cardProject";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

function Project() {
    const { t } = useTranslation("projects");

    const [galleryImages, setGalleryImages] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            name: "BeeFleet",
            image: "https://avatars.githubusercontent.com/t/12972006?s=116&v=4",
            description: t("projetos.beefleet"),
            linguage: ["javascript", "tailwindcss", "next.js"],
            link1: "https://github.com/HublastX/BeeFleet",
            link2: "https://hublast.com/beefleet/",
            images: [
                "/img/projects/beefleet/bf1.png",
                "/img/projects/beefleet/bf2.png",
                "/img/projects/beefleet/bf3.png",
                "/img/projects/beefleet/bf4.png",
                "/img/projects/beefleet/bf5.png",
                "/img/projects/beefleet/bf6.png",
            ],
            able: false,
        },
        {
            name: "Adote um pet",
            image: "https://avatars.githubusercontent.com/u/148292923?s=200&v=4",
            description: t("projetos.adotDes"),
            linguage: ["javascript", "django", "python"],
            link1: "https://github.com/Adote-um-Pet-Web",
            link2: "https://adoteumpet.up.railway.app/",
            images: [
                "https://picsum.photos/seed/aqp1/800/600",
                "https://picsum.photos/seed/aqp2/800/600",
                "https://picsum.photos/seed/aqp3/800/600",
            ],
            able: true,
        },
        {
            name: "Book Guardian",
            image: "https://avatars.githubusercontent.com/u/167376146?s=200&v=4",
            description: t("projetos.bookGuadianDes"),
            linguage: ["javascript", "django", "python"],
            link1: "https://github.com/A3-P",
            link2: "https://book-guardian-production.up.railway.app/",
            images: [
                "/img/projects/bookguardian/bg1.png",
                "/img/projects/bookguardian/bg2.png",
            ],
            able: true,
        },
        {
            name: "Shark",
            image: "https://andra-sun.github.io/assets/img/favicons/web-app-manifest-512x512.png",
            description: t("projetos.sharkDes"),
            linguage: ["ruby", "jekyll"],
            link1: "https://github.com/Andra-sun/Andra-sun.github.io",
            link2: "https://andra-sun.github.io/",
            images: [
                "https://picsum.photos/seed/shark1/800/600",
                "https://picsum.photos/seed/shark2/800/600",
                "https://picsum.photos/seed/shark3/800/600",
            ],
            able: true,
        },
        {
            name: "Pixel Mart",
            image: "https://github.com/wendellast/Pixel-Mart/blob/main/static/assets/img/icon.png?raw=true",
            description: t("projetos.pixelDes"),
            linguage: ["javascript", "python"],
            link1: "https://github.com/wendellast/Pixel-Mart",
            link2: "https://web-production-b8d4.up.railway.app/",
            images: [
                "https://picsum.photos/seed/aq1/800/600",
                "https://picsum.photos/seed/aq2/800/600",
                "https://picsum.photos/seed/aq3/800/600",
            ],
            able: false,
        },
    ];

    const openGallery = (images) => {
        setGalleryImages(images);
        setCurrentIndex(0);
    };

    const closeGallery = () => setGalleryImages(null);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);

    const prevImage = () =>
        setCurrentIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
        );

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
                        onOpenGallery={openGallery}
                        images={card.images}
                        able={card.able}
                    />
                ))}
            </ul>

            {createPortal(
                <AnimatePresence>
                    {galleryImages && (
                        <motion.div
                            className="galleryOverlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeGallery}
                        >
                            <div
                                className="galleryContent"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="galleryClose"
                                    onClick={closeGallery}
                                >
                                    x
                                </button>
                                <button
                                    className="galleryNav galleryPrev"
                                    onClick={prevImage}
                                >
                                    ‹
                                </button>

                                <img
                                    src={galleryImages[currentIndex]}
                                    alt=""
                                    className="galleryImage"
                                />

                                <button
                                    className="galleryNav galleryNext"
                                    onClick={nextImage}
                                >
                                    ›
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </div>
    );
}

export default Project;
