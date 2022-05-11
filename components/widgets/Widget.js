import React from 'react'
import ReactDOM from "react-dom";
import Draggable from 'react-draggable'

const Widget = ({ children, className, onClickClose, width }) => {

    let classText = 'widget';
    if (className) classText += ' ' + className;

    const nodeRef = React.useRef(null);

    return (
        ReactDOM.createPortal(
            <Draggable
                nodeRef={nodeRef}
                defaultPosition={{x: 0, y: 0}}
            >
                <div ref={nodeRef}
                    className={classText}
                    style={{ width: width ?? 'fit-content' }}
                >
                    <div className='btn-close-window' onClick={onClickClose}>
                        <img src='/img/icons/close-circle.svg' />
                    </div>
                    {children}
                </div>
            </Draggable>
            , document.querySelector("#main-container")
        )

    )
}

export default Widget