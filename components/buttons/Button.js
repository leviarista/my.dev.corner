import React from 'react'

const Button = ({ type, text, variant, size, children, handleClick }) => {
    let classText = 'btn';
    if (variant) classText += ' btn-' + variant;
    if (size) classText += ' btn-' + size;

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