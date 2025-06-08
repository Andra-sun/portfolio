// Inicializa o dataLayer
export const initializeGTM = () => {
    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
    }
};

// Função para enviar eventos para o GTM
export const pushToDataLayer = (event) => {
    if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push(event);
    }
};
