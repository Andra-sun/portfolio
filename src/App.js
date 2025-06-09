import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./static/css/App.css";
import About from "./pages/About";
import Nav from "./components/Nav";
import Project from "./pages/Project";
import Knowledge from "./pages/Knowledge";
import Diploma from "./pages/Diploma";
import Stars from "./components/Stars";
import useGTM from "./hooks/useGTM";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

function PageTracker() {
    const location = useLocation();
    const { trackPageView } = useGTM();
    const { t } = useTranslation();

    useEffect(() => {
        const pathToTitle = {
            "/": t("sobreT"),
            "/experiencia": t("conhecimentoT"),
            "/projetos": t("projetosT"),
            "/certificado": t("certificadoT"),
        };

        trackPageView(
            pathToTitle[location.pathname] || "Página não encontrada",
            location.pathname
        );
    }, [location, t, trackPageView]);

    return null;
}

function AppContent() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <motion.div
            className="appContainer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <PageTracker />
            <Stars />
            <Nav />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    className="App"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <motion.div variants={contentVariants}>
                                    <About />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/experiencia"
                            element={
                                <motion.div variants={contentVariants}>
                                    <Knowledge />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/projetos"
                            element={
                                <motion.div variants={contentVariants}>
                                    <h1>{t("projetosT")}</h1>
                                    <Project />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/certificado"
                            element={
                                <motion.div variants={contentVariants}>
                                    <h1>{t("certificadoT")}</h1>
                                    <Diploma />
                                </motion.div>
                            }
                        />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
