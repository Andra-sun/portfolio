import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Aside from "../Aside";

// Mock para i18n
jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: {
            changeLanguage: jest.fn(),
        },
    }),
}));

describe("Aside Component", () => {
    test("renderiza informações básicas corretamente", () => {
        render(<Aside />);

        // Verifica elementos básicos
        expect(screen.getByText("Camile")).toBeInTheDocument();
        expect(screen.getByText("Andra")).toBeInTheDocument();
        expect(screen.getByAltText("Imagem de perfil")).toBeInTheDocument();
        expect(screen.getByText("Download CV")).toBeInTheDocument();
    });

    test("seletor de idioma funciona corretamente", () => {
        render(<Aside />);
        const languageSelect = screen.getByRole("combobox");

        // Verifica se as opções de idioma estão presentes
        expect(languageSelect).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "pt" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "en" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "un" })).toBeInTheDocument();
    });

    test("menu mobile toggle funciona corretamente", () => {
        render(<Aside />);
        const menuButton = screen.getByRole("button", { name: "" });

        // Verifica se o menu está inicialmente fechado
        expect(screen.getByTestId("aside-component")).not.toHaveClass("open");

        // Clica no botão e verifica se o menu abre
        fireEvent.click(menuButton);
        expect(screen.getByTestId("aside-component")).toHaveClass("open");

        // Clica novamente e verifica se o menu fecha
        fireEvent.click(menuButton);
        expect(screen.getByTestId("aside-component")).not.toHaveClass("open");
    });

    test("links de redes sociais estão presentes e corretos", () => {
        render(<Aside />);

        // Verifica se os links das redes sociais estão presentes com URLs corretos
        expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
            "href",
            "https://github.com/Andra-sun"
        );
        expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
            "href",
            "https://linkedin.com/in/camile-andrade-guimaraes"
        );
        expect(screen.getByRole("link", { name: /site/i })).toHaveAttribute(
            "href",
            "https://Andra-sun.github.io"
        );
    });

    test("informações de contato estão presentes e corretas", () => {
        render(<Aside />);

        // Verifica se as informações de contato estão presentes com links corretos
        expect(screen.getByText("andra-sun")).toBeInTheDocument();
        expect(screen.getByText("Guanambi-BA")).toBeInTheDocument();
        expect(
            screen.getByText("camilea_guimaraes@outlook.com")
        ).toBeInTheDocument();
    });

    test("botão de download do CV funciona", () => {
        // Mock para o createElement e click
        const mockLink = {
            href: "",
            download: "",
            click: jest.fn(),
        };

        jest.spyOn(document, "createElement").mockImplementation(
            () => mockLink
        );

        render(<Aside />);
        const downloadButton = screen.getByText("Download CV");

        fireEvent.click(downloadButton);

        // Verifica se o link foi criado com os atributos corretos
        expect(mockLink.href).toContain("cv_27022025.pdf");
        expect(mockLink.download).toBe("CamileCV.pdf");
        expect(mockLink.click).toHaveBeenCalled();

        // Limpa o mock
        jest.restoreAllMocks();
    });
});
