import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTextWidgetOpenned, setTextWidgetValue } from '../../app/actions';
import Button from '../buttons/Button'
import WidgetOptions from './WidgetOptions'

const TextWidgetOptions = ({ isOpenned, toggleWidgetOption, toggleWidget }) => {
    const dispatch = useDispatch();
    const input = useRef(null);

    const onClickAdd = () => {
        const text = input.current.value.trim();
        if (text !== "") {
            // console.log("🚀")
            dispatch(setTextWidgetOpenned(true));
            dispatch(setTextWidgetValue(text));
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