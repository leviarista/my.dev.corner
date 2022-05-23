import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFreeCodeCampRadioWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const FreeCodeCampRadioWidget = () => {
    const dispatch = useDispatch();

    const freeCodeCampRadioWidget = useSelector(state => state.freeCodeCampRadioWidget);
    const { isOpenned, position } = freeCodeCampRadioWidget;

    const onClickClose = () => {
        freeCodeCampRadioWidget.isOpenned = false;
        localStorage.setItem('freeCodeCampRadioWidget', JSON.stringify(freeCodeCampRadioWidget));
        dispatch(setFreeCodeCampRadioWidgetOpenned(false));
    }

    const onStop = (e) => {
        freeCodeCampRadioWidget.position = {
            x: e.layerX - e.offsetX,
            y: e.layerY - e.offsetY,
        };
        localStorage.setItem('freeCodeCampRadioWidget', JSON.stringify(freeCodeCampRadioWidget));
    }

    return (
        isOpenned &&
        <Widget className='windowed' onClickClose={onClickClose} onStop={onStop} position={position}>
            <iframe src='https://coderadio.freecodecamp.org/' style={{ border: 'none', marginTop: '25px' }} height={450} ></iframe>
        </Widget>

    );
}

export default FreeCodeCampRadioWidget