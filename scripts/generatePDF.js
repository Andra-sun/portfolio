const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generatePDF() {
    try {
        // Iniciar o navegador
        const browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox"],
        });
        const page = await browser.newPage();

        // Configurar viewport para A4
        await page.setViewport({
            width: 794, // A4 width in pixels at 96 DPI
            height: 1123, // A4 height in pixels at 96 DPI
        });

        // Carregar o arquivo HTML
        const htmlContent = fs.readFileSync(
            path.join(__dirname, "../public/curriculo.html"),
            "utf8"
        );

        // Substituir o caminho relativo do CSS por um absoluto
        const modifiedHtml = htmlContent.replace(
            "../src/static/css/Curriculo.css",
            path.join(__dirname, "../src/static/css/Curriculo.css")
        );

        // Escrever HTML modificado em um arquivo temporário
        const tempHtmlPath = path.join(__dirname, "temp.html");
        fs.writeFileSync(tempHtmlPath, modifiedHtml);

        // Carregar o arquivo HTML temporário
        await page.goto(`file://${tempHtmlPath}`, {
            waitUntil: "networkidle0",
        });

        // Gerar PDF
        await page.pdf({
            path: "curriculo.pdf",
            format: "A4",
            printBackground: true,
            margin: {
                top: "0mm",
                right: "0mm",
                bottom: "0mm",
                left: "0mm",
            },
            preferCSSPageSize: true,
        });

        // Limpar arquivo temporário
        fs.unlinkSync(tempHtmlPath);

        await browser.close();
        console.log(
            "PDF gerado com sucesso! O arquivo curriculo.pdf foi criado na raiz do projeto."
        );
    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
    }
}

generatePDF();
