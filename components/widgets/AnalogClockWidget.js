import React, { useEffect, useState } from 'react'
import Clock from 'react-clock/dist/umd/Clock';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalogClockWidgetOpenned } from '../../app/actions';
import Widget from './Widget';
import 'react-clock/dist/Clock.css';

const AnalogClockWidget = () => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());
    const { isOpenned } = useSelector(state => state.analogClockWidget)

    const onClickClose = () => {
        dispatch(setAnalogClockWidgetOpenned(false));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
            console.log("🚀 ~ file: AnalogClock.js ~ line 11 ~ AnalogClock ~ date", date)
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        isOpenned &&
        <Widget onClickClose={onClickClose} className={'analog-clock-widget'}>
            <Clock value={date} />
        </Widget>

    );
}

export default AnalogClockWidget