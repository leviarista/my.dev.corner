import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFreeCodeCampRadioWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const FreeCodeCampRadioWidget = () => {
	const dispatch = useDispatch();

	const freeCodeCampRadioWidget = useSelector((state) => state.freeCodeCampRadioWidget);

	const onClickClose = () => {
		dispatch(setFreeCodeCampRadioWidgetOpenned(false));
	};

	return (
		<Widget
			name='freeCodeCampRadioWidget'
			widget={freeCodeCampRadioWidget}
			className='windowed'
			onClickClose={onClickClose}
		>
			<iframe
				src='https://coderadio.freecodecamp.org/'
				style={{ border: 'none', marginTop: '25px' }}
				height={450}
			></iframe>
		</Widget>
	);
};

export default FreeCodeCampRadioWidget;
