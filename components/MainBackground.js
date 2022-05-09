import React, { useState } from 'react'

const MainBackground = ({ type, value }) => {
    console.log(type, value)
    let style = {};
    if (type === 'color') {
        style.backgroundColor = value;
    } else if (type === 'image') {
        style.backgroundImage = value;
    }

    return (
        <div id='background' style={style}>
            {type === 'video' &&
                <>
                    <video autoPlay loop muted
                        src={value}
                    >
                    </video>
                </>
            }
        </div>)
}

export default MainBackground