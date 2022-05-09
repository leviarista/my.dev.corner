import React from 'react'
import Window from './Window'

const SettingsWindow = ({ isOpenned, closeSettingsWindow, setBackgroundType, setBackgroundValue }) => {

    const handleChangeColorInput = (e) => {
        setBackgroundType('color');
        setBackgroundValue(e.target.value)
    }

    const handleClickImageOption = (value) => {
        setBackgroundType('image');
        setBackgroundValue(value)
    }

    return (
        <Window title={'Settings'} width={700} isOpenned={isOpenned} zIndex={1001} componentClass={'settings-window'} closeWindow={closeSettingsWindow}>
            <div>Backgrounds</div>
            <div>
                <div>
                    <input type="color" id="favcolor" name="favcolor" onChange={handleChangeColorInput} />
                </div>
            </div>
            <div>
                <div>
                    <img src='/img/bg-1.jpg' width={200} onClick={(e) => handleClickImageOption(e.target.getAttribute('src'))} />
                </div>
            </div>
        </Window>
    )
}

export default SettingsWindow;