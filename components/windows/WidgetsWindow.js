import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnalogClockWidgetOpenned, setStickerWidgetOpenned } from '../../app/actions'
import Button from '../buttons/Button'
import AnalogClockWidget from '../widgets/AnalogClockWidget'
import StickerWidget from '../widgets/StickerWidget'
import StickerWidgetOptions from '../widgets/StickerWidgetOptions'
import TextWidgetOptions from '../widgets/TextWidgetOptions'
import Window from './Window'

const WidgetsWindow = ({ isOpenned, closeWidgetsWindow }) => {
    const dispatch = useDispatch();

    const [showTextWidgetOptions, setShowTextWidgetOptions] = useState(false);
    const [showStickerWidgetOptions, setShowStickerWidgetOptions] = useState(false);

    const handleClickWidgetOption = (id) => {
        hideAll();
        switch (id) {
            case 'text':
                setShowTextWidgetOptions(!showTextWidgetOptions);
                break;
            case 'sticker':
                // setShowStickerWidgetOptions(!showStickerWidgetOptions);
                dispatch(setStickerWidgetOpenned(true));
                break;
            case 'analogClock':
                dispatch(setAnalogClockWidgetOpenned(true));
                break;
            default:
                break;
        }
    }

    const hideAll = () => {
        setShowTextWidgetOptions(false);
        setShowStickerWidgetOptions(false);
    }

    useEffect(() => {
        hideAll();
    }, [isOpenned])

    return (
        isOpenned &&
        <>
            <Window title={'Widgets'} width={700}
                className={'widgets-window'}
                zIndex={1002}
                closeWindow={closeWidgetsWindow}
            >
                <div>
                    <em>Add a widget:</em>
                    <div className='center' style={{ padding: '10px' }}>
                        <div className='widget-option' onClick={() => handleClickWidgetOption('text')}>Text</div>
                        <div className='widget-option' onClick={() => handleClickWidgetOption('sticker')}>Sticker</div>
                        <div className='widget-option' onClick={() => handleClickWidgetOption('analogClock')}>Clock</div>
                        {/* <div className='widget-option' onClick={() => handleClickWidgetOption()}>DEV posts</div>
                        <div className='widget-option' onClick={() => handleClickWidgetOption()}>Hashnode posts</div> */}
                    </div>
                </div>
            </Window>
            <div>
                <TextWidgetOptions
                    isOpenned={showTextWidgetOptions}
                    toggleWidgetOption={() => setShowTextWidgetOptions(!showTextWidgetOptions)}
                />
                <StickerWidgetOptions
                    isOpenned={showStickerWidgetOptions}
                    toggleWidgetOption={() => setShowStickerWidgetOptions(!showStickerWidgetOptions)}
                />
            </div>
        </>
    )
}

export default WidgetsWindow