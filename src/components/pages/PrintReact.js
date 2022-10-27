import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintReact = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Mehedi',
        onAfterPrint: ()=> alert('print')
    });
    return (
        <div>
            <div ref={componentRef}>
                <h1>Your Name</h1>
            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    );
};

export default PrintReact;