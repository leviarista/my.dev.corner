import React, { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock/dist/umd/Clock';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalogClockWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const AnalogClockWidget = () => {
	const dispatch = useDispatch();

	const [date, setDate] = useState(new Date());
	const analogClockWidget = useSelector((state) => state.analogClockWidget);

	const onClickClose = () => {
		dispatch(setAnalogClockWidgetOpenned(false));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Widget
			name='analogClockWidget'
			widget={analogClockWidget}
			className={'analog-clock-widget'}
			onClickClose={onClickClose}
		>
			<Clock value={date} />
		</Widget>
	);
};

export default AnalogClockWidget;
