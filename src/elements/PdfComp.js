import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
function PdfComp({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    useEffect(() => {
        if (file) {
            import(`../pdf/${file}`)
                .then((pdf) => {
                    setPdfFile(pdf.default);
                    setError(null);
                })
                .catch((err) => {
                    console.error("erro pra carregar o pdf: ", err);
                    setError("erro pra carregar o pdf! ");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [file]);
    const pdfName = file
        ? file
              .replace(".pdf", " ")
              .replace(/([A-Z])/g, " $1")
              .trim()
        : " ";
    const openPdfNewTab = () => {
        if (pdfFile) {
            window.open(pdfFile, "_blank");
        }
    };

    return (
        <div>
            {loading && <p>carregando pdf...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {pdfFile && (
                <>
                    <Document
                        file={pdfFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="pdfImageContainer"
                        onClick={openPdfNewTab}
                    >
                        <p>{pdfName} </p>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                className="pdfImg"
                            />
                        ))}
                    </Document>
                </>
            )}
        </div>
    );
}
export default PdfComp;
