function reducer(state = {
    textWidget: {
        id: 'text',
        isOpenned: false,
        value: '',
    },
    stickerWidget: {
        id: 'text',
        isOpenned: false,
        value: '',
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
                    ...state.textWidget,
                    value: action.payload
                }
            }
        default:
            return state;
    }
}

export default reducer