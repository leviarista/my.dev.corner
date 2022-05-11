import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTextWidgetOpenned, setTextWidgetValue } from '../../app/actions';
import Button from '../buttons/Button'
import WidgetOptions from './WidgetOptions'

const StickerWidgetOptions = ({ isOpenned, toggleWidgetOption, toggleWidget }) => {
    const dispatch = useDispatch();
    const input = useRef(null);

    const onClickAdd = () => {
        const value = input.current.value.trim();
        console.log("🚀 ~ file: StickerWidgetOptions.js ~ line 13 ~ onClickAdd ~ value", value)
        // if (text !== "") {
        //     dispatch(setTextWidgetOpenned(true));
        //     dispatch(setTextWidgetValue(text));
        //     toggleWidgetOption();
        // }
    }

    return (
        isOpenned &&
        <WidgetOptions width={250} toggleWidgetOption={toggleWidgetOption}>
            <div className='center' style={{ paddingTop: '35px' }}>
                {/* <label htmlFor='text-widget-input'>Text</label> */}
                &nbsp;&nbsp;
                <input ref={input}
                    type='file' id='sticker-widget-input' name='sticker-widget-input'
                    // style={{ width: '80%' }}
                />
                <br />
            </div>
            <div className='center' style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                <Button variant={'primary'} size={'md'} text={'Add Widget'} handleClick={onClickAdd} />
            </div>
        </WidgetOptions>
    )
}

export default StickerWidgetOptions