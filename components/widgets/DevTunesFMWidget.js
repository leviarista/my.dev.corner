import React, { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock/dist/umd/Clock';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalogClockWidgetOpenned, setDevToPostsWidgetOpenned, setDevTunesFMWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const DevTunesFMWidget = () => {
    const dispatch = useDispatch();

    const devTunesFMWidget = useSelector(state => state.devTunesFMWidget);
    const { isOpenned, position } = devTunesFMWidget;

    const onClickClose = () => {
        devTunesFMWidget.isOpenned = false;
        localStorage.setItem('devTunesFMWidget', JSON.stringify(devTunesFMWidget));
        dispatch(setDevTunesFMWidgetOpenned(false));
    }

    const onStop = (e) => {
        devTunesFMWidget.position = {
            x: e.layerX - e.offsetX,
            y: e.layerY - e.offsetY,
        };
        localStorage.setItem('devTunesFMWidget', JSON.stringify(devTunesFMWidget));
    }

    return (
        isOpenned &&
        <Widget onClickClose={onClickClose} onStop={onStop} position={position}>
            <iframe src='https://radio.madza.dev/' style={{ border: 'none', marginTop: '25px' }} height={400} ></iframe>
        </Widget>

    );
}

export default DevTunesFMWidget