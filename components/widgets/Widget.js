import React from 'react'
import ReactDOM from "react-dom";
import Draggable from 'react-draggable'

const Widget = ({ children, className, isOpenned, closeWidget }) => {

    let classText = 'widget';
    if (className) classText += ' ' + className;  

    const nodeRef = React.useRef(null);

    return (
        isOpenned &&
        ReactDOM.createPortal(
            <Draggable
                nodeRef={nodeRef}
            >
                <div ref={nodeRef}
                    className={classText}
                    style={{}}
                >
                    <div className='btn-close-window' onClick={closeWidget}>
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