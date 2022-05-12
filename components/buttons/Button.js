import React from 'react'

const Button = ({ type, text, variant, size, children, handleClick, className }) => {
    let classText = 'btn';
    if (variant) classText += ' btn-' + variant;
    if (size) classText += ' btn-' + size;
    if (className) classText += ' ' + className;

    return (
        <div className={classText} onClick={handleClick}>
            {type === 'icon' ?
                children
                :
                text
            }
        </div>
    )
}

export default Button