import React from 'react'
import ReactDOM from "react-dom";
import Draggable from 'react-draggable'

const Widget = ({ width, children, className, position, onClickClose, onStop }) => {

    let classText = 'widget';
    if (className) classText += ' ' + className;

    const nodeRef = React.useRef(null);

    return (
        ReactDOM.createPortal(
            <Draggable
                nodeRef={nodeRef}
                defaultPosition={position ?? { x: 0, y: 0 }}
                onStop={onStop}
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