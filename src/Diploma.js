import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import './Diploma.css';

pdfjs.GlobalWorkerOptions.workerSrc =
    "//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

function Diploma() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="Diploma">
            <div className="pdfImgContainer">
                <div className="pdfImg">
                    <Document
                        file="/img/pdf/programacaoDeSolucoesComputacionais.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Diploma;
