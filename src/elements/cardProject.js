import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Card = ({ image, name, description, linguage, link1, link2 }) => {
    const { t } = useTranslation("projects");

    return (
        <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img src={image} alt="Project Thumbnail" />
            <div className="textArea">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="technologies">
                    {linguage?.map((tech, index) => (
                        <p key={index}>{tech}</p>
                    ))}
                </div>
                <div className="links">
                    <a href={link1}>{t("projetos.verMais")}</a>
                    <a href={link2}>{t("projetos.verMaisPag")}</a>
                </div>
            </div>
        </motion.li>
    );
};

export default Card;
