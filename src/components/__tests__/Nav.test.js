import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav Component", () => {
    const renderNav = () => {
        return render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );
    };

    test("renderiza todos os links de navegação", () => {
        renderNav();

        // Verifica se todos os links estão presentes
        expect(screen.getByTitle("sobre mim")).toBeInTheDocument();
        expect(screen.getByTitle("experiência")).toBeInTheDocument();
        expect(screen.getByTitle("projetos")).toBeInTheDocument();
        expect(screen.getByTitle("certificados")).toBeInTheDocument();
    });

    test("links têm os ícones corretos", () => {
        renderNav();

        expect(screen.getByTestId("icon-user")).toBeInTheDocument();
        expect(screen.getByTestId("icon-brain")).toBeInTheDocument();
        expect(screen.getByTestId("icon-apps")).toBeInTheDocument();
        expect(screen.getByTestId("icon-diploma")).toBeInTheDocument();
    });

    test("links têm os caminhos corretos", () => {
        renderNav();

        // Verifica se os links têm os caminhos corretos
        expect(screen.getByTitle("sobre mim")).toHaveAttribute("href", "/");
        expect(screen.getByTitle("experiência")).toHaveAttribute(
            "href",
            "/experiencia"
        );
        expect(screen.getByTitle("projetos")).toHaveAttribute(
            "href",
            "/projetos"
        );
        expect(screen.getByTitle("certificados")).toHaveAttribute(
            "href",
            "/certificado"
        );
    });
});
