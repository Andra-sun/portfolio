import React, { useEffect, useState } from "react";
import "../static/css/Stars.css";

function Stars() {
    const [stars, setStars] = useState({
        background: [],
        foreground: [],
        shooting: [],
    });

    // Gera posições aleatórias para as estrelas
    const generateStars = (count, type) => {
        return Array.from({ length: count }, (_, i) => ({
            id: `${type}-${i}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
        }));
    };

    // Gera uma nova estrela cadente
    const generateShootingStar = () => ({
        id: `shooting-${Date.now()}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: "0s",
    });

    useEffect(() => {
        // Inicializa as estrelas
        setStars({
            background: generateStars(100, "bg"), // 50 estrelas grandes
            foreground: generateStars(100, "fg"), // 100 estrelas pequenas
            shooting: [],
        });

        // Adiciona estrelas cadentes periodicamente
        const shootingStarInterval = setInterval(() => {
            setStars((prevStars) => ({
                ...prevStars,
                shooting: [...prevStars.shooting, generateShootingStar()],
            }));

            // Remove estrelas cadentes antigas após a animação
            setTimeout(() => {
                setStars((prevStars) => ({
                    ...prevStars,
                    shooting: prevStars.shooting.slice(1),
                }));
            }, 3000);
        }, 7000);

        return () => clearInterval(shootingStarInterval);
    }, []);

    return (
        <>
            <div className="stars-background">
                {stars.background.map((star) => (
                    <div
                        key={star.id}
                        className="star-bg"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: star.animationDelay,
                        }}
                    />
                ))}
            </div>
            <div className="stars-foreground">
                {stars.foreground.map((star) => (
                    <div
                        key={star.id}
                        className="star-fg"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: star.animationDelay,
                        }}
                    />
                ))}
                {stars.shooting.map((star) => (
                    <div
                        key={star.id}
                        className="shooting-star"
                        style={{
                            left: star.left,
                            top: star.top,
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default Stars;
