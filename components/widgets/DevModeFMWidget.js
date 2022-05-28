import React from 'react';
import 'react-clock/dist/Clock.css';
import { useDispatch, useSelector } from 'react-redux';
import { setDevModeFMWidgetOpenned, setDevTunesFMWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const DevModeFMWidget = () => {
	const dispatch = useDispatch();

	const devModeFMWidget = useSelector((state) => state.devModeFMWidget);

	const onClickClose = () => {
		dispatch(setDevModeFMWidgetOpenned(false));
	};

	return (
		<Widget
			name='devModeFMWidget'
			widget={devModeFMWidget}
			className='windowed'
			onClickClose={onClickClose}
		>
			<iframe
				src='https://devmode.fm/'
				style={{ border: 'none' }}
				width={320}
				height={500}
			></iframe>
		</Widget>
	);
};

export default DevModeFMWidget;
