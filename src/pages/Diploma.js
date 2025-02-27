import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import PdfComp from "../PdfComp";
import "../static/css/Diploma.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function Diploma() {

    return (
        <div className="Diploma">
            <ul>
            <PdfComp file="ambientesComputacionaisEConectividade.pdf" />
            <PdfComp file="sistemasComputacionaisESegurança.pdf" />
            <PdfComp file="programaçãoDeSoluçõesComputacionais.pdf" />
            <PdfComp file="modelagemDeSoftware.pdf" />
	    <PdfComp file="oracleDatabaseDesigne.pdf" />
	    <PdfComp file="OracleProgramacaoEmJava.pdf" />
	    <PdfComp file="ciscoNetworkingBasics.pdf" />
	    <PdfComp file="ciscoCyberSecurity.pdf" />   
            </ul>
        </div>
    );
}

export default Diploma;
