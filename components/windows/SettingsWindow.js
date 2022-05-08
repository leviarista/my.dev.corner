import React from 'react'
import Window from './Window'

const SettingsWindow = ({ isOpenned, closeSettingsWindow }) => {
    return (
        <Window title={'Settings'} width={700} isOpenned={isOpenned} zIndex={1001} componentClass={'settings-window'} closeWindow={closeSettingsWindow}>
            <div>CHANGE BACKGROUND</div>
                Color:
            <div>
                <div>
                    
                </div>
            </div>
        </Window>
    )
}

export default SettingsWindow