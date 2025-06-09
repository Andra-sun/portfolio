import { motion } from "framer-motion";

const Card = ({ image, name }) => {

    return (
        <motion.div
            className="knowledge-card"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="card-content">
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </div>
        </motion.div>
    );
};

export default Card;
