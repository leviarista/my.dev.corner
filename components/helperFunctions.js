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
	setStickerWidgetValue,
	setTextWidgetOpenned,
	setTextWidgetPosition,
	setTextWidgetValue,
	setXTeamRadioWidgetOpenned,
	setXTeamRadioWidgetPosition,
	setZenQuotesWidgetOpenned,
	setZenQuotesWidgetPosition,
} from '../app/actions';

export const initHomeStates = ({ dispatch }) => {
	// Widgets

	dispatch(setStickerWidgetValue('/img/stickers/headphones-cat.gif'));
	// dispatch(setStickerWidgetOpenned(true));

	let analogClockWidget = localStorage.getItem('analogClockWidget');
	if (analogClockWidget) {
		analogClockWidget = JSON.parse(analogClockWidget);
		dispatch(setAnalogClockWidgetOpenned(analogClockWidget.isOpenned));
		dispatch(setAnalogClockWidgetPosition(analogClockWidget.position));
	} else {
		dispatch(setAnalogClockWidgetOpenned(true));
		dispatch(
			setAnalogClockWidgetPosition({
				x: window.innerWidth - 240,
				y: window.innerHeight - 245,
			})
		);
	}

	let textWidget = localStorage.getItem('textWidget');
	if (textWidget) {
		textWidget = JSON.parse(textWidget);
		dispatch(setTextWidgetPosition(textWidget.position));
		dispatch(setTextWidgetOpenned(textWidget.isOpenned));
		dispatch(setTextWidgetValue(textWidget.value));
	} else {
		dispatch(setTextWidgetOpenned(true));
		dispatch(setTextWidgetValue("The dev's favorite corner."));
		dispatch(setTextWidgetPosition({ x: 145, y: window.innerHeight - 85 }));
	}

	let stickerWidget = localStorage.getItem('stickerWidget');
	if (stickerWidget) {
		stickerWidget = JSON.parse(stickerWidget);
		dispatch(setStickerWidgetOpenned(stickerWidget.isOpenned));
		dispatch(setStickerWidgetPosition(stickerWidget.position));
	} else {
		dispatch(setStickerWidgetOpenned(true));
		dispatch(
			setStickerWidgetPosition({
				x: window.innerWidth - 400,
				y: window.innerHeight - 220,
			})
		);
	}

	let devTunesFMWidget = localStorage.getItem('devTunesFMWidget');
	if (devTunesFMWidget) {
		devTunesFMWidget = JSON.parse(devTunesFMWidget);
		dispatch(setDevTunesFMWidgetOpenned(devTunesFMWidget.isOpenned));
		dispatch(setDevTunesFMWidgetPosition(devTunesFMWidget.position));
	} else {
		dispatch(setDevTunesFMWidgetOpenned(false));
	}

	let xTeamRadioWidget = localStorage.getItem('xTeamRadioWidget');
	if (xTeamRadioWidget) {
		xTeamRadioWidget = JSON.parse(xTeamRadioWidget);
		dispatch(setXTeamRadioWidgetOpenned(xTeamRadioWidget.isOpenned));
		dispatch(setXTeamRadioWidgetPosition(xTeamRadioWidget.position));
	} else {
		dispatch(setXTeamRadioWidgetOpenned(false));
	}

	let freeCodeCampRadioWidget = localStorage.getItem('freeCodeCampRadioWidget');
	if (freeCodeCampRadioWidget) {
		freeCodeCampRadioWidget = JSON.parse(freeCodeCampRadioWidget);
		dispatch(setFreeCodeCampRadioWidgetOpenned(freeCodeCampRadioWidget.isOpenned));
		dispatch(setFreeCodeCampRadioWidgetPosition(freeCodeCampRadioWidget.position));
	} else {
		dispatch(setFreeCodeCampRadioWidgetOpenned(false));
	}

	let devModeFMWidget = localStorage.getItem('devModeFMWidget');
	if (devModeFMWidget) {
		devModeFMWidget = JSON.parse(devModeFMWidget);
		dispatch(setDevModeFMWidgetOpenned(devModeFMWidget.isOpenned));
		dispatch(setDevModeFMWidgetPosition(devModeFMWidget.position));
	} else {
		dispatch(setDevModeFMWidgetOpenned(false));
	}

	let devToPostsWidget = localStorage.getItem('devToPostsWidget');
	if (devToPostsWidget) {
		devToPostsWidget = JSON.parse(devToPostsWidget);
		dispatch(setDevToPostsWidgetOpenned(devToPostsWidget.isOpenned));
		dispatch(setDevToPostsWidgetPosition(devToPostsWidget.position));
	} else {
		dispatch(setDevToPostsWidgetOpenned(false));
	}

	let zenQuotesWidget = localStorage.getItem('zenQuotesWidget');
	if (zenQuotesWidget) {
		zenQuotesWidget = JSON.parse(zenQuotesWidget);
		dispatch(setZenQuotesWidgetOpenned(zenQuotesWidget.isOpenned));
		dispatch(setZenQuotesWidgetPosition(zenQuotesWidget.position));
	} else {
		dispatch(setZenQuotesWidgetOpenned(false));
	}
};
