import React from 'react'
import Button from '../buttons/Button'
import Window from './Window'

const WidgetsWindow = ({ isOpenned, closeWidgetsWindow }) => {
    return (
        <Window title={'Widgets'} width={700}
            className={'widgets-window'}
            isOpenned={isOpenned} zIndex={1002}
            closeWindow={closeWidgetsWindow}
        >
            <em>Add a widget:</em>
            <div style={{ display: 'flex' }}>
                <div className='widget-option'>Text</div>
                <div className='widget-option'>Sticker</div>
                <div className='widget-option'>Clock</div>
                <div className='widget-option'>DEV posts</div>
                <div className='widget-option'>Hashnode posts</div>
            </div>
        </Window>
    )
}

export default WidgetsWindow