import React from 'react'
import Window from './Window'

const WidgetsWindow = ({ isOpenned, closeWidgetsWindow }) => {
    return (
        <Window title={'Widgets'} width={700} isOpenned={isOpenned} zIndex={1002} componentClass={'widgets-window'} closeWindow={closeWidgetsWindow}>
            Add a widget
        </Window>
    )
}

export default WidgetsWindow