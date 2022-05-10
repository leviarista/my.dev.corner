import React from 'react'
import Button from '../buttons/Button'

const TextWidgetOptions = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor='text-widget-input'>Text</label>
            &nbsp;&nbsp;
            <input type='text' id='text-widget-input' name='text-widget-input' />
            &nbsp;&nbsp;
            <Button variant={'primary'} size={'md'} text={'Add Widget'} />
        </div>
    )
}

export default TextWidgetOptions