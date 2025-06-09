import React from "react";
import { motion } from "framer-motion";
import { IoDocumentText, IoOpenOutline } from "react-icons/io5";

const CertificateCard = ({ title, issuer, date, pdfUrl, logo }) => {
    const openPdf = () => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <motion.div
            className="certificate-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            onClick={openPdf}
        >
            <div className="certificate-logo">
                {logo ? (
                    <img src={logo} alt={`${issuer} logo`} />
                ) : (
                    <IoDocumentText className="default-logo" />
                )}
            </div>
            <div className="certificate-info">
                <h3>{title}</h3>
                <p className="issuer">{issuer}</p>
                <p className="date">{date}</p>
            </div>
            <IoOpenOutline className="view-icon" />
        </motion.div>
    );
};

export default CertificateCard;
