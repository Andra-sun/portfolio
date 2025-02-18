import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import "./Diploma.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function Diploma() {

    return (
        <div className="Diploma">
            <PdfComp file="ambientesComputacionaisEConectividade.pdf" />
            <PdfComp file="sistemasComputacionaisESegurança.pdf" />
            <PdfComp file="solucoesComputacionais.pdf" />
        </div>
    );
}

export default Diploma;
