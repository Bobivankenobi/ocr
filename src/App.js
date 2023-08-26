import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import Test from '../src/test.png';
import PdfToImageComponent from '../src/PDFtoImageComponent';


function App() {
  const worker = createWorker({
    logger: m => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(Test);
    setOcr(text);
  };
  
  const [ocr, setOcr] = useState('Recognizing...');
  useEffect(() => {
    doOCR();
  });
  return (
    <div className="App">
      <PdfToImageComponent pdfURL={'https://www.orimi.com/pdf-test.pdf'}/>
      <p>{ocr}</p>
    </div>
  );
}

export default App;
