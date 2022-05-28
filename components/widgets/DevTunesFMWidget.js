import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDevTunesFMWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const DevTunesFMWidget = () => {
	const dispatch = useDispatch();

	const devTunesFMWidget = useSelector((state) => state.devTunesFMWidget);

	const onClickClose = () => {
		dispatch(setDevTunesFMWidgetOpenned(false));
	};

	return (
		<Widget
			name='devTunesFMWidget'
			widget={devTunesFMWidget}
			className='windowed'
			onClickClose={onClickClose}
		>
			<iframe
				src='https://radio.madza.dev/'
				style={{ border: 'none', marginTop: '25px' }}
				height={400}
			></iframe>
		</Widget>
	);
};

export default DevTunesFMWidget;
