import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTextWidgetOpenned, setTextWidgetPosition, setTextWidgetValue } from '../../app/actions';
import Button from '../buttons/Button'
import WidgetOptions from './WidgetOptions'

const TextWidgetOptions = ({ isOpenned, toggleWidgetOption, toggleWidget }) => {
    const dispatch = useDispatch();
    const input = useRef(null);

    const textWidget = useSelector(state => state.textWidget);

    const onClickAdd = () => {
        const text = input.current.value.trim();
        if (text !== "") {
            // console.log("🚀")
            
            textWidget.isOpenned = true;
            textWidget.value = text;
            textWidget.position =  { x: 0, y: 0 };
            localStorage.setItem('textWidget', JSON.stringify(textWidget));
            dispatch(setTextWidgetOpenned(true));
            dispatch(setTextWidgetValue(text));
            dispatch(setTextWidgetPosition(textWidget.position));
            
            toggleWidgetOption();
        }
    }

    return (
        isOpenned &&
        <WidgetOptions width={250} toggleWidgetOption={toggleWidgetOption}>
            <div className='center' style={{ paddingTop: '35px' }}>
                {/* <label htmlFor='text-widget-input'>Text</label> */}
                &nbsp;&nbsp;
                <input ref={input}
                    type='text' id='text-widget-input' name='text-widget-input'
                    placeholder='Text'
                    style={{ width: '80%' }}
                />
                <br />
            </div>
            <div className='center' style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                <Button variant={'primary'} size={'md'} text={'Add Widget'} handleClick={onClickAdd} />
            </div>
        </WidgetOptions>
    )
}

export default TextWidgetOptions