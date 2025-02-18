import {useEffect, useState} from 'react';
import {Document, Page} from 'react-pdf';
function PdfComp({file}) {
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);
	function onDocumentLoadSuccess({numPages}){
		setNumPages(numPages);
	}
	const [pdfFile, setPdfFile] = useState(null);
	useEffect(() => {
		if (file) {
		  import(`./pdf/${file}`).then((pdf) => {
			setPdfFile(pdf.default);
		  }).catch((error) => {
			console.error("Erro ao carregar o PDF:", error);
		  });
		}
	}, [file]);
	const pdfName = file ? file.replace('.pdf', ' ').replace(/([A-Z])/g, ' $1').trim(): ' ';
	const [isFullScreen, setFullScreen] = useState(false);
	const toggleFullScreen = () => {
		setFullScreen((prev) => !prev);
	};
	return(
		<div >
			{pdfFile ? (
				<>
				{isFullScreen && <button onClick={toggleFullScreen}>x</button>}
			<Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} className={isFullScreen ? 'fullScreenContainer' : 'pdfImageContainer'} onClick={toggleFullScreen} >
				<p>{pdfName} </p>
				<Page pageNumber={1}  renderTextLayer={false} renderAnnotationLayer={false} className='pdfImg'/>
				<Page pageNumber={2}  renderTextLayer={false} renderAnnotationLayer={false} className='pdfImg'/>
			</Document>
				</>
			) : (
				<p>Carregando pdf...</p>
			)}
		</div>
	);
}
export default PdfComp;
