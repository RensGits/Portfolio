import React from 'react';

function Modal ({open , children, onClose}) {
    if (!open) return null;
    return (
        <div>
            
            <button onClick = {onClose}>close me</button>
            {children}
        </div>
    )

}


export default Modal;