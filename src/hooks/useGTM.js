import { useCallback } from "react";
import { pushToDataLayer } from "../gtm";

const useGTM = () => {
    // Função para enviar eventos para o GTM
    const pushEvent = useCallback((event) => {
        pushToDataLayer(event);
    }, []);

    // Função para rastrear visualização de página
    const trackPageView = useCallback(
        (pageTitle, pagePath) => {
            pushEvent({
                event: "page_view",
                page: {
                    title: pageTitle,
                    path: pagePath,
                },
            });
        },
        [pushEvent]
    );

    // Função para rastrear cliques
    const trackClick = useCallback(
        (elementName, elementType, destination = "") => {
            pushEvent({
                event: "click",
                element: {
                    name: elementName,
                    type: elementType,
                    destination: destination,
                },
            });
        },
        [pushEvent]
    );

    // Função para rastrear downloads
    const trackDownload = useCallback(
        (fileName, fileType) => {
            pushEvent({
                event: "file_download",
                file: {
                    name: fileName,
                    type: fileType,
                },
            });
        },
        [pushEvent]
    );

    // Função para rastrear mudanças de idioma
    const trackLanguageChange = useCallback(
        (fromLanguage, toLanguage) => {
            pushEvent({
                event: "language_change",
                language: {
                    from: fromLanguage,
                    to: toLanguage,
                },
            });
        },
        [pushEvent]
    );

    return {
        pushEvent,
        trackPageView,
        trackClick,
        trackDownload,
        trackLanguageChange,
    };
};

export default useGTM;
