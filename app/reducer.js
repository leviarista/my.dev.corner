function reducer(
	state = {
		textWidget: {
			id: 'text',
			isOpenned: false,
			value: '',
			position: { x: 0, y: 0 },
		},
		stickerWidget: {
			id: 'sticker',
			isOpenned: false,
			value: '',
			position: { x: 0, y: 0 },
		},
		analogClockWidget: {
			id: 'analogClock',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		devTunesFMWidget: {
			id: 'devTunesFM',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		xTeamRadioWidget: {
			id: 'xTeamRadio',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		freeCodeCampRadioWidget: {
			id: 'freeCodeCampRadio',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		devModeFMWidget: {
			id: 'devModeFM',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		devToPostsWidget: {
			id: 'devToPosts',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
		zenQuotesWidget: {
			id: 'zenQuotes',
			isOpenned: false,
			position: { x: 0, y: 0 },
		},
	},
	action
) {
	switch (action.type) {
		case 'SET_TEXT_WIDGET_OPENNED':
			return {
				...state,
				textWidget: {
					...state.textWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_TEXT_WIDGET_VALUE':
			return {
				...state,
				textWidget: {
					...state.textWidget,
					value: action.payload,
				},
			};
		case 'SET_TEXT_WIDGET_POSITION':
			return {
				...state,
				textWidget: {
					...state.textWidget,
					position: action.payload,
				},
			};
		case 'SET_STICKER_WIDGET_OPENNED':
			return {
				...state,
				stickerWidget: {
					...state.stickerWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_STICKER_WIDGET_VALUE':
			return {
				...state,
				stickerWidget: {
					...state.stickerWidget,
					value: action.payload,
				},
			};
		case 'SET_STICKER_WIDGET_POSITION':
			return {
				...state,
				stickerWidget: {
					...state.stickerWidget,
					position: action.payload,
				},
			};
		case 'SET_ANALOG_CLOCK_WIDGET_OPENNED':
			return {
				...state,
				analogClockWidget: {
					...state.analogClockWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_ANALOG_CLOCK_WIDGET_POSITION':
			return {
				...state,
				analogClockWidget: {
					...state.analogClockWidget,
					position: action.payload,
				},
			};
		case 'SET_DEV_TUNES_FM_WIDGET_OPENNED':
			return {
				...state,
				devTunesFMWidget: {
					...state.devTunesFMWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_DEV_TUNES_FM_WIDGET_POSITION':
			return {
				...state,
				devTunesFMWidget: {
					...state.devTunesFMWidget,
					position: action.payload,
				},
			};
		case 'SET_X_TEAM_RADIO_WIDGET_OPENNED':
			return {
				...state,
				xTeamRadioWidget: {
					...state.xTeamRadioWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_X_TEAM_RADIO_WIDGET_POSITION':
			return {
				...state,
				xTeamRadioWidget: {
					...state.xTeamRadioWidget,
					position: action.payload,
				},
			};
		case 'SET_FREE_CODE_CAMP_RADIO_WIDGET_OPENNED':
			return {
				...state,
				freeCodeCampRadioWidget: {
					...state.freeCodeCampRadioWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_FREE_CODE_CAMP_RADIO_WIDGET_POSITION':
			return {
				...state,
				freeCodeCampRadioWidget: {
					...state.freeCodeCampRadioWidget,
					position: action.payload,
				},
			};
		case 'SET_DEV_MODE_FM_WIDGET_OPENNED':
			return {
				...state,
				devModeFMWidget: {
					...state.devModeFMWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_DEV_MODE_FM_WIDGET_POSITION':
			return {
				...state,
				devModeFMWidget: {
					...state.devModeFMWidget,
					position: action.payload,
				},
			};
		case 'SET_DEV_TO_POSTS_WIDGET_OPENNED':
			return {
				...state,
				devToPostsWidget: {
					...state.devToPostsWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_DEV_TO_POSTS_WIDGET_POSITION':
			return {
				...state,
				devToPostsWidget: {
					...state.devToPostsWidget,
					position: action.payload,
				},
			};
		case 'SET_ZEN_QUOTES_WIDGET_OPENNED':
			return {
				...state,
				zenQuotesWidget: {
					...state.zenQuotesWidget,
					isOpenned: action.payload,
				},
			};
		case 'SET_ZEN_QUOTES_WIDGET_POSITION':
			return {
				...state,
				zenQuotesWidget: {
					...state.zenQuotesWidget,
					position: action.payload,
				},
			};
		default:
			return state;
	}
}

export default reducer;
