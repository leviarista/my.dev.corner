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
			title={
				<>
					<a
						className='btn-link'
						href='https://radio.madza.dev/'
						target='_blank'
						rel='noopener noreferrer'
					>
						DevTunes FM
					</a>
					by
					<a
						className='btn-link'
						href='https://www.madza.dev/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Madza
					</a>
				</>
			}
		>
			<iframe
				src='https://radio.madza.dev/'
				style={{ border: 'none' }}
				width={340}
				height={420}
			></iframe>
		</Widget>
	);
};

export default DevTunesFMWidget;
