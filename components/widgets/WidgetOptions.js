import React from 'react'
import ReactDOM from 'react-dom';

const WidgetOptions = ({ width, height, children, toggleWidgetOption }) => {
    return (
        ReactDOM.createPortal(
            <div
                className='widget-options-box'
                style={{
                    width: width ?? 250,
                    height: height ?? 200, 
                    left: `calc(50% - ${(width ?? 125) / 2}px)`,
                    top: `calc(50% - ${(height ?? 125) / 2}px)`,
                }}
            >
                <div className='btn-close-window'
                    onClick={toggleWidgetOption}
                >
                    <img src='/img/icons/close-circle.svg' />
                </div>
                {children}
            </div>
            , document.querySelector("#main-container")
        )
    )
}

export default WidgetOptions