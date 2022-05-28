import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setXTeamRadioWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const XTeamRadioWidget = () => {
	const dispatch = useDispatch();

	const xTeamRadioWidget = useSelector((state) => state.xTeamRadioWidget);

	const onClickClose = () => {
		dispatch(setXTeamRadioWidgetOpenned(false));
	};

	return (
		<Widget
			name='xTeamRadioWidget'
			widget={xTeamRadioWidget}
			className='windowed'
			onClickClose={onClickClose}
		>
			<iframe
				src='https://radio.x-team.com/'
				style={{ border: 'none', marginTop: '25px' }}
				width={350}
				height={500}
			></iframe>
		</Widget>
	);
};

export default XTeamRadioWidget;
