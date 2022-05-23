import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setXTeamRadioWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const XTeamRadioWidget = () => {
    const dispatch = useDispatch();

    const xTeamRadioWidget = useSelector(state => state.xTeamRadioWidget);
    const { isOpenned, position } = xTeamRadioWidget;

    const onClickClose = () => {
        xTeamRadioWidget.isOpenned = false;
        localStorage.setItem('xTeamRadioWidget', JSON.stringify(xTeamRadioWidget));
        dispatch(setXTeamRadioWidgetOpenned(false));
    }

    const onStop = (e) => {
        xTeamRadioWidget.position = {
            x: e.layerX - e.offsetX,
            y: e.layerY - e.offsetY,
        };
        localStorage.setItem('xTeamRadioWidget', JSON.stringify(xTeamRadioWidget));
    }

    return (
        isOpenned &&
        <Widget className='windowed' onClickClose={onClickClose} onStop={onStop} position={position}>
            <iframe src='https://radio.x-team.com/' style={{ border: 'none', marginTop: '25px' }} width={350} height={500} ></iframe>
        </Widget>

    );
}

export default XTeamRadioWidget