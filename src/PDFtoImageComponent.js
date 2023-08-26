import React, { useState, useEffect } from 'react';
// import pdfjsLib from 'pdfjs-dist/webpack';

// // Ensure the workerSrc is set. This is necessary for the library to function.
// pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';

function PdfToImageComponent({ pdfURL }) {
    const [images, setImages] = useState([]);
console.warn(pdfURL);
    //  useEffect(() => {
    //     async function convertPdfToImages() {
    //         const loadingTask = pdfjsLib.getDocument(pdfURL);
    //         const pdf = await loadingTask.promise;

    //         const numPages = pdf.numPages;
    //         const imageArray = [];

    //         for (let i = 1; i <= numPages; i++) {
    //             const page = await pdf.getPage(i);
    //             const viewport = page.getViewport({ scale: 1.0 });
    //             const canvas = document.createElement('canvas');
    //             const context = canvas.getContext('2d');
    //             canvas.width = viewport.width;
    //             canvas.height = viewport.height;

    //             const renderContext = {
    //                 canvasContext: context,
    //                 viewport: viewport
    //             };

    //             await page.render(renderContext).promise;

    //             imageArray.push(canvas.toDataURL());
    //         }

    //         setImages(imageArray);
    //     }

    //     convertPdfToImages();
    // }, [pdfURL]);

    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Page ${index + 1}`} />
            ))}
        </div>
    );
}

export default PdfToImageComponent;

