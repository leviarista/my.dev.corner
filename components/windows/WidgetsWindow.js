import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAnalogClockWidgetOpenned, setAnalogClockWidgetPosition, setDevTunesFMWidgetOpenned, setDevTunesFMWidgetPosition, setFreeCodeCampRadioWidgetOpenned, setFreeCodeCampRadioWidgetPosition, setStickerWidgetOpenned, setStickerWidgetPosition, setXTeamRadioWidgetOpenned, setXTeamRadioWidgetPosition } from '../../app/actions'
import StickerWidgetOptions from '../widgets/StickerWidgetOptions'
import TextWidgetOptions from '../widgets/TextWidgetOptions'
import Window from './Window'

const WidgetsWindow = ({ isOpenned, closeWidgetsWindow }) => {
    const dispatch = useDispatch();

    const [showTextWidgetOptions, setShowTextWidgetOptions] = useState(false);
    const [showStickerWidgetOptions, setShowStickerWidgetOptions] = useState(false);

    const analogClockWidget = useSelector(state => state.analogClockWidget);
    const stickerWidget = useSelector(state => state.stickerWidget);
    const devTunesFMWidget = useSelector(state => state.devTunesFMWidget);
    const xTeamRadioWidget = useSelector(state => state.xTeamRadioWidget);
    const freeCodeCampRadioWidget = useSelector(state => state.freeCodeCampRadioWidget);

    const handleClickWidgetOption = (id) => {
        hideAll();
        switch (id) {
            case 'text':
                setShowTextWidgetOptions(!showTextWidgetOptions);
                break;
            case 'sticker':
                // setShowStickerWidgetOptions(!showStickerWidgetOptions);
                stickerWidget.isOpenned = true;
                stickerWidget.position = { x: 0, y: 0 };
                localStorage.setItem('stickerWidget', JSON.stringify(stickerWidget));
                dispatch(setStickerWidgetOpenned(true));
                dispatch(setStickerWidgetPosition(stickerWidget.position));
                break;
            case 'analogClock':
                analogClockWidget.isOpenned = true;
                analogClockWidget.position = { x: 0, y: 0 };
                localStorage.setItem('analogClockWidget', JSON.stringify(analogClockWidget));
                dispatch(setAnalogClockWidgetOpenned(true));
                dispatch(setAnalogClockWidgetPosition(analogClockWidget.position));
                break;
            case 'devTunesFM':
                devTunesFMWidget.isOpenned = true;
                devTunesFMWidget.position = { x: 0, y: 0 };
                localStorage.setItem('devTunesFMWidget', JSON.stringify(devTunesFMWidget));
                dispatch(setDevTunesFMWidgetOpenned(true));
                dispatch(setDevTunesFMWidgetPosition(devTunesFMWidget.position));
                break;
            case 'xTeamRadio':
                xTeamRadioWidget.isOpenned = true;
                xTeamRadioWidget.position = { x: 0, y: 0 };
                localStorage.setItem('xTeamRadioWidget', JSON.stringify(xTeamRadioWidget));
                dispatch(setXTeamRadioWidgetOpenned(true));
                dispatch(setXTeamRadioWidgetPosition(xTeamRadioWidget.position));
                break;
            case 'freeCodeCampRadio':
                freeCodeCampRadioWidget.isOpenned = true;
                freeCodeCampRadioWidget.position = { x: 0, y: 0 };
                localStorage.setItem('freeCodeCampRadioWidget', JSON.stringify(freeCodeCampRadioWidget));
                dispatch(setFreeCodeCampRadioWidgetOpenned(true));
                dispatch(setFreeCodeCampRadioWidgetPosition(freeCodeCampRadioWidget.position));
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
                        {/* <div className='widget-option' onClick={() => handleClickWidgetOption('devToPosts')}>DEV posts</div> */}
                        <div className='widget-option' onClick={() => handleClickWidgetOption('devTunesFM')}>DevTunes FM</div>
                        <div className='widget-option' onClick={() => handleClickWidgetOption('xTeamRadio')}>X-Team Radio</div>
                        <div className='widget-option' onClick={() => handleClickWidgetOption('freeCodeCampRadio')}>freeCodeCamp Radio</div>
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