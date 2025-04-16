import { useTranslation } from "react-i18next";
const Card = ({ image, name, description, linguage, link1, link2 }) => {
    const { t } = useTranslation("projects");

    return (
        <li>
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
        </li>
    );
};
export default Card;
