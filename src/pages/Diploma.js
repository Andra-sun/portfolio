import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CertificateCard from "../elements/CertificateCard";
import "../static/css/Certificate.css";

function Diploma() {
    const { t } = useTranslation("certificados");

    const certificates = {
        academic: [
            {
                title: "Ambientes Computacionais e Conectividade",
                issuer: "Unifg",
                date: "2024",
                pdfUrl: "/pdf/ambientesComputacionaisEConectividade.pdf",
                logo: "https://images.even3.com/LS4uQhbpYk6dxggsSrV67lvALQQ=/fit-in/250x250/smart/https://static.even3.com/logos/DcmE-mRWkAAEqXy-removebg-preview1.f7b34822fc3c4985a7ea.png",
            },
            {
                title: "Sistemas Computacionais e Segurança",
                issuer: "Unifg",
                date: "2024",
                pdfUrl: "/pdf/sistemasComputacionaisESegurança.pdf",
                logo: "https://images.even3.com/LS4uQhbpYk6dxggsSrV67lvALQQ=/fit-in/250x250/smart/https://static.even3.com/logos/DcmE-mRWkAAEqXy-removebg-preview1.f7b34822fc3c4985a7ea.png",
            },
            {
                title: "Programação de Soluções Computacionais",
                issuer: "Unifg",
                date: "2024",
                pdfUrl: "/pdf/programaçãoDeSoluçõesComputacionais.pdf",
                logo: "https://images.even3.com/LS4uQhbpYk6dxggsSrV67lvALQQ=/fit-in/250x250/smart/https://static.even3.com/logos/DcmE-mRWkAAEqXy-removebg-preview1.f7b34822fc3c4985a7ea.png",
            },
            {
                title: "Modelagem de Software",
                issuer: "Unifg",
                date: "2024",
                pdfUrl: "/pdf/modelagemDeSoftware.pdf",
                logo: "https://images.even3.com/LS4uQhbpYk6dxggsSrV67lvALQQ=/fit-in/250x250/smart/https://static.even3.com/logos/DcmE-mRWkAAEqXy-removebg-preview1.f7b34822fc3c4985a7ea.png",
            },
        ],
        professional: [
            {
                title: "Scrum Fundamentals Certified ",
                issuer: "SCRUMstudy",
                date: "2025",
                pdfUrl: "/pdf/oracleDatabaseDesigne.pdf",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scrum/scrum-original.svg",
            },
            {
                title: "Oracle Database Design",
                issuer: "Oracle Academy",
                date: "2024",
                pdfUrl: "/pdf/oracleDatabaseDesigne.pdf",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
            },
            {
                title: "Oracle Programação em Java",
                issuer: "Oracle Academy",
                date: "2024",
                pdfUrl: "/pdf/OracleProgramacaoEmJava.pdf",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
            },
            {
                title: "Networking Basics",
                issuer: "Cisco",
                date: "2024",
                pdfUrl: "/pdf/ciscoNetworkingBasics.pdf",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
            },
            {
                title: "Cybersecurity Essentials",
                issuer: "Cisco",
                date: "2024",
                pdfUrl: "/pdf/ciscoCyberSecurity.pdf",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            className="certificates-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="certificates-section"
                variants={itemVariants}
            >
                <h2>{t("academicos")}</h2>
                <div className="certificates-grid">
                    {certificates.academic.map((cert, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CertificateCard {...cert} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="certificates-section"
                variants={itemVariants}
            >
                <h2>{t("profissionais")}</h2>
                <div className="certificates-grid">
                    {certificates.professional.map((cert, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CertificateCard {...cert} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Diploma;
