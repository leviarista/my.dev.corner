import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAnalogClockWidgetOpenned,
	setAnalogClockWidgetPosition,
	setDevModeFMWidgetOpenned,
	setDevModeFMWidgetPosition,
	setDevToPostsWidgetOpenned,
	setDevToPostsWidgetPosition,
	setDevTunesFMWidgetOpenned,
	setDevTunesFMWidgetPosition,
	setFreeCodeCampRadioWidgetOpenned,
	setFreeCodeCampRadioWidgetPosition,
	setStickerWidgetOpenned,
	setStickerWidgetPosition,
	setTheySaidSoQuotesWidgetOpenned,
	setTheySaidSoQuotesWidgetPosition,
	setXTeamRadioWidgetOpenned,
	setXTeamRadioWidgetPosition,
} from '../../app/actions';
import StickerWidgetOptions from '../widgets/StickerWidgetOptions';
import TextWidgetOptions from '../widgets/TextWidgetOptions';
import Window from './Window';

const WidgetsWindow = ({ isOpenned, closeWidgetsWindow }) => {
	const dispatch = useDispatch();

	const [showTextWidgetOptions, setShowTextWidgetOptions] = useState(false);
	const [showStickerWidgetOptions, setShowStickerWidgetOptions] = useState(false);

	const {
		analogClockWidget,
		stickerWidget,
		devTunesFMWidget,
		xTeamRadioWidget,
		freeCodeCampRadioWidget,
		devModeFMWidget,
		devToPostsWidget,
		theySaidSoQuotesWidget,
	} = useSelector((state) => state);

	const handleClickWidgetOption = (id) => {
		hideAll();
		switch (id) {
			case 'text':
				setShowTextWidgetOptions(!showTextWidgetOptions);
				break;
			case 'sticker':
				// setShowStickerWidgetOptions(!showStickerWidgetOptions);
				stickerWidget.isOpenned = true;
				stickerWidget.position = { x: 0, y: 0 };
				localStorage.setItem('stickerWidget', JSON.stringify(stickerWidget));
				dispatch(setStickerWidgetOpenned(true));
				dispatch(setStickerWidgetPosition(stickerWidget.position));
				break;
			case 'analogClock':
				analogClockWidget.isOpenned = true;
				analogClockWidget.position = { x: 0, y: 0 };
				localStorage.setItem('analogClockWidget', JSON.stringify(analogClockWidget));
				dispatch(setAnalogClockWidgetOpenned(true));
				dispatch(setAnalogClockWidgetPosition(analogClockWidget.position));
				break;
			case 'devTunesFM':
				devTunesFMWidget.isOpenned = true;
				devTunesFMWidget.position = { x: 0, y: 0 };
				localStorage.setItem('devTunesFMWidget', JSON.stringify(devTunesFMWidget));
				dispatch(setDevTunesFMWidgetOpenned(true));
				dispatch(setDevTunesFMWidgetPosition(devTunesFMWidget.position));
				break;
			case 'xTeamRadio':
				xTeamRadioWidget.isOpenned = true;
				xTeamRadioWidget.position = { x: 0, y: 0 };
				localStorage.setItem('xTeamRadioWidget', JSON.stringify(xTeamRadioWidget));
				dispatch(setXTeamRadioWidgetOpenned(true));
				dispatch(setXTeamRadioWidgetPosition(xTeamRadioWidget.position));
				break;
			case 'freeCodeCampRadio':
				freeCodeCampRadioWidget.isOpenned = true;
				freeCodeCampRadioWidget.position = { x: 0, y: 0 };
				localStorage.setItem(
					'freeCodeCampRadioWidget',
					JSON.stringify(freeCodeCampRadioWidget)
				);
				dispatch(setFreeCodeCampRadioWidgetOpenned(true));
				dispatch(setFreeCodeCampRadioWidgetPosition(freeCodeCampRadioWidget.position));
				break;
			case 'devModeFM':
				devModeFMWidget.isOpenned = true;
				devModeFMWidget.position = { x: 0, y: 0 };
				localStorage.setItem('devModeFMWidget', JSON.stringify(devModeFMWidget));
				dispatch(setDevModeFMWidgetOpenned(true));
				dispatch(setDevModeFMWidgetPosition(devModeFMWidget.position));
				break;
			case 'devToPosts':
				devToPostsWidget.isOpenned = true;
				devToPostsWidget.position = { x: 0, y: 0 };
				localStorage.setItem('devToPostsWidget', JSON.stringify(devToPostsWidget));
				dispatch(setDevToPostsWidgetOpenned(true));
				dispatch(setDevToPostsWidgetPosition(devToPostsWidget.position));
				break;
			case 'theySaidSoQuotes':
				theySaidSoQuotesWidget.isOpenned = true;
				theySaidSoQuotesWidget.position = { x: 0, y: 0 };
				localStorage.setItem(
					'theySaidSoQuotesWidget',
					JSON.stringify(theySaidSoQuotesWidget)
				);
				dispatch(setTheySaidSoQuotesWidgetOpenned(true));
				dispatch(setTheySaidSoQuotesWidgetPosition(theySaidSoQuotesWidget.position));
				break;
			default:
				break;
		}
	};

	const hideAll = () => {
		setShowTextWidgetOptions(false);
		setShowStickerWidgetOptions(false);
	};

	useEffect(() => {
		hideAll();
	}, [isOpenned]);

	return (
		isOpenned && (
			<>
				<Window
					title={'Widgets'}
					width={700}
					className={'widgets-window'}
					zIndex={1002}
					closeWindow={closeWidgetsWindow}
				>
					<div>
						<em>Add a widget:</em>
						<div className='widgets-options-group center' style={{ padding: '10px' }}>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('text')}
							>
								Text
								<img src='/img/widgets/textWidget.png' width={110} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('sticker')}
							>
								Sticker
								<img src='/img/widgets/stickerWidget.png' width={100} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('analogClock')}
							>
								Clock
								<img src='/img/widgets/analogClockWidget.png' width={100} />
							</div>
						</div>
						<div className='widgets-options-group center' style={{ padding: '10px' }}>
							{/* <div className='widget-option' onClick={() => handleClickWidgetOption('devToPosts')}>DEV posts</div> */}
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('devTunesFM')}
							>
								DevTunes FM
								<img src='/img/widgets/devTunesFMWidget.png' width={150} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('xTeamRadio')}
							>
								X-Team Radio
								<img src='/img/widgets/xTeamRadioWidget.png' width={90} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('freeCodeCampRadio')}
							>
								freeCodeCamp Radio
								<img src='/img/widgets/freeCodeCampRadioWidget.png' width={90} />
							</div>
						</div>
						<div className='widgets-options-group center' style={{ padding: '10px' }}>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('devModeFM')}
							>
								devMode.fm
								<img src='/img/widgets/devModeFMWidget.png' width={150} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('devToPosts')}
							>
								dev.to Posts
								<img src='/img/widgets/devToPostsWidget.png' width={90} />
							</div>
							<div
								className='widget-option'
								onClick={() => handleClickWidgetOption('theySaidSoQuotes')}
							>
								They Said So Quotes
								<img src='/img/widgets/theySaidSoQuotesWidget.png' width={90} />
							</div>
						</div>
					</div>
				</Window>
				<div>
					<TextWidgetOptions
						isOpenned={showTextWidgetOptions}
						toggleWidgetOption={() => setShowTextWidgetOptions(!showTextWidgetOptions)}
					/>
					<StickerWidgetOptions
						isOpenned={showStickerWidgetOptions}
						toggleWidgetOption={() =>
							setShowStickerWidgetOptions(!showStickerWidgetOptions)
						}
					/>
				</div>
			</>
		)
	);
};

export default WidgetsWindow;
