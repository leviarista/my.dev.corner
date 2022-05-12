function reducer(state = {
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
}, action) {
    switch (action.type) {
        case 'SET_TEXT_WIDGET_OPENNED':
            return {
                ...state,
                textWidget: {
                    ...state.textWidget,
                    isOpenned: action.payload
                }
            }
        case 'SET_TEXT_WIDGET_VALUE':
            return {
                ...state,
                textWidget: {
                    ...state.textWidget,
                    value: action.payload
                }
            }
        case 'SET_TEXT_WIDGET_POSITION':
            return {
                ...state,
                textWidget: {
                    ...state.textWidget,
                    position: action.payload
                }
            }
        case 'SET_STICKER_WIDGET_OPENNED':
            return {
                ...state,
                stickerWidget: {
                    ...state.stickerWidget,
                    isOpenned: action.payload
                }
            }
        case 'SET_STICKER_WIDGET_VALUE':
            return {
                ...state,
                stickerWidget: {
                    ...state.stickerWidget,
                    value: action.payload
                }
            }
        case 'SET_STICKER_WIDGET_POSITION':
            return {
                ...state,
                stickerWidget: {
                    ...state.stickerWidget,
                    position: action.payload
                }
            }
        case 'SET_ANALOG_CLOCK_WIDGET_OPENNED':
            return {
                ...state,
                analogClockWidget: {
                    ...state.analogClockWidget,
                    isOpenned: action.payload
                }
            }
        case 'SET_ANALOG_CLOCK_WIDGET_POSITION':
            return {
                ...state,
                analogClockWidget: {
                    ...state.analogClockWidget,
                    position: action.payload
                }
            }
        default:
            return state;
    }
}

export default reducer