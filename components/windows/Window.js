import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import Draggable from 'react-draggable';


const Window = (props) => {
    let { title, children, width, isOpenned, zIndex, componentClass, closeWindow } = props

    let classText = 'window';
    if (componentClass) classText += ' ' + componentClass;

    const nodeRef = React.useRef(null);
    const handleClick = () => { }

    return (
        isOpenned &&
        ReactDOM.createPortal(
            <Draggable
                nodeRef={nodeRef}
            >
                <div ref={nodeRef}
                    className={classText}
                    style={{ width: width, zIndex: zIndex ?? 10 }}
                    onClick={handleClick}
                >
                    <div className='window-title'>
                        {title}
                        <div className='btn-close-window' onClick={closeWindow}>
                            <img src='/img/icons/close-circle.svg' />
                        </div>
                    </div>
                    <div className='window-body'>
                        {children}
                    </div>
                </div>
            </Draggable>
            , document.querySelector("#main-container")
        )
    )
}

export default Window