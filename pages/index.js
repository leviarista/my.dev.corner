import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { initHomeStates } from '../components/helperFunctions';
import MainBackground from '../components/MainBackground';
import MainMenu from '../components/MainMenu';
import Meta from '../components/Meta';
import AnalogClockWidget from '../components/widgets/AnalogClockWidget';
import DevModeFMWidget from '../components/widgets/DevModeFMWidget';
import DevTunesFMWidget from '../components/widgets/DevTunesFMWidget';
import FreeCodeCampRadioWidget from '../components/widgets/FreeCodeCampRadioWidget';
import StickerWidget from '../components/widgets/StickerWidget';
import XTeamRadioWidget from '../components/widgets/XTeamRadioWidget';
import SettingsWindow from '../components/windows/SettingsWindow';
import WidgetsWindow from '../components/windows/WidgetsWindow';

export default function Home() {
	const dispatch = useDispatch();

	/* *********************************** Windows *********************************** */

	const [settingsWindowOpened, setSettingsWindowOpened] = useState(false);
	const [widgetsWindowOpened, setWidgetsWindowOpened] = useState(false);

	const handleClickAddButton = () => {
		setSettingsWindowOpened(false);
		setWidgetsWindowOpened(true);
	};

	const handleClickTuneButton = () => {
		setSettingsWindowOpened(true);
		setWidgetsWindowOpened(false);
	};

	const closeSettingsWindow = () => {
		setSettingsWindowOpened(false);
	};

	const closeWidgetsWindow = () => {
		setWidgetsWindowOpened(false);
	};

	/* *********************************** Background *********************************** */

	const [backgroundType, setBackgroundType] = useState('color');
	const [backgroundValue, setBackgroundValue] = useState('var(--bg-default)');

	/* *********************************** *** *********************************** */

	useEffect(() => {
		// Background
		let background = localStorage.getItem('_background');
		if (background) {
			const { type, value } = JSON.parse(background);
			setBackgroundType(type);
			setBackgroundValue(value);
		} else {
			setBackgroundType('video');
			setBackgroundValue('/videos/defaultVideoBg.webm');
		}

		initHomeStates({ dispatch });
	}, []);

	/* *********************************** *** *********************************** */

	return (
		<>
			<Meta title={''} description={"The dev's favorite corner."} />

			<main className='main-page'>
				<Header />

				<MainBackground type={backgroundType} value={backgroundValue} />

				<MainMenu
					handleClickAddButton={handleClickAddButton}
					handleClickTuneButton={handleClickTuneButton}
				/>

				<div id='main-container'></div>

				<StickerWidget className={'sticker-widget'} />
				<AnalogClockWidget />
				<DevTunesFMWidget />
				<XTeamRadioWidget />
				<FreeCodeCampRadioWidget />
				<DevModeFMWidget />

				<SettingsWindow
					isOpenned={settingsWindowOpened}
					closeSettingsWindow={closeSettingsWindow}
					setBackgroundType={setBackgroundType}
					setBackgroundValue={setBackgroundValue}
				/>
				<WidgetsWindow
					isOpenned={widgetsWindowOpened}
					closeWidgetsWindow={closeWidgetsWindow}
				/>
			</main>
		</>
	);
}
