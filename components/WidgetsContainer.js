import React from 'react';
import { useSelector } from 'react-redux';
import AnalogClockWidget from './widgets/AnalogClockWidget';
import DevModeFMWidget from './widgets/DevModeFMWidget';
import DevToPostsWidget from './widgets/DevToPostsWidget';
import DevTunesFMWidget from './widgets/DevTunesFMWidget';
import FreeCodeCampRadioWidget from './widgets/FreeCodeCampRadioWidget';
import StickerWidget from './widgets/StickerWidget';
import XTeamRadioWidget from './widgets/XTeamRadioWidget';

const WidgetsContainer = () => {
	const {
		analogClockWidget,
		stickerWidget,
		devTunesFMWidget,
		devToPostsWidget,
		xTeamRadioWidget,
		freeCodeCampRadioWidget,
		devModeFMWidget,
	} = useSelector((state) => state);

	return (
		<>
			{stickerWidget.isOpenned && <StickerWidget className={'sticker-widget'} />}
			{analogClockWidget.isOpenned && <AnalogClockWidget />}
			{devTunesFMWidget.isOpenned && <DevTunesFMWidget />}
			{xTeamRadioWidget.isOpenned && <XTeamRadioWidget />}
			{freeCodeCampRadioWidget.isOpenned && <FreeCodeCampRadioWidget />}
			{devModeFMWidget.isOpenned && <DevModeFMWidget />}
			{devToPostsWidget.isOpenned && <DevToPostsWidget />}
		</>
	);
};

export default WidgetsContainer;
