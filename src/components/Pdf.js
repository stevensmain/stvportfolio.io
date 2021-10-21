import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import pdfFile from '../Document/StivensCV.pdf';

export const Pdf = () => {
   
    const [defaultPdfFile] = useState(pdfFile);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

        return (
            <div className= 'pdf-container' >
                {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={defaultPdfFile}
                    plugins={[defaultLayoutPluginInstance]} />
                </Worker></>}
            </div>
        );
}
