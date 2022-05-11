import React, { useEffect, useState } from 'react'
import Clock from 'react-clock/dist/umd/Clock';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalogClockWidgetOpenned } from '../../app/actions';
import Widget from './Widget';
import 'react-clock/dist/Clock.css';

const AnalogClockWidget = () => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());
    const analogClockWidget = useSelector(state => state.analogClockWidget);
    const { isOpenned, position } = analogClockWidget;

    const onClickClose = () => {
        dispatch(setAnalogClockWidgetOpenned(false));
    }

    const onStop = (e) => {
        analogClockWidget.position = {
            x: e.layerX - e.offsetX,
            y: e.layerY - e.offsetY,
        };
        localStorage.setItem('analogClock', JSON.stringify(analogClockWidget));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        isOpenned &&
        <Widget className={'analog-clock-widget'} onClickClose={onClickClose} onStop={onStop} position={position}>
            <Clock value={date} />
        </Widget>

    );
}

export default AnalogClockWidget