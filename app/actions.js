export const setTextWidgetValue = (data) =>{
    return {
        type: 'SET_TEXT_WIDGET_VALUE',
        payload: data
    }
}

export const setTextWidgetOpenned = (data) =>{
    return {
        type: 'SET_TEXT_WIDGET_OPENNED',
        payload: data
    }
}

export const setStickerWidgetValue = (data) =>{
    return {
        type: 'SET_STICKER_WIDGET_VALUE',
        payload: data
    }
}

export const setStickerWidgetOpenned = (data) =>{
    return {
        type: 'SET_STICKER_WIDGET_OPENNED',
        payload: data
    }
}