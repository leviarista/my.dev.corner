import React from 'react'
import Window from './Window'

const SettingsWindow = ({ isOpenned, closeSettingsWindow, setBackgroundType, setBackgroundValue }) => {

    const handleChangeColorInput = (e) => {
        setBackgroundType('color');
        setBackgroundValue(e.target.value)
    }

    const handleClickImageOption = (value) => {
        setBackgroundType('image');
        setBackgroundValue(value);
    }

    const handleClickVideoOption = (value) => {
        setBackgroundType('video');
        setBackgroundValue(value);
    }

    return (
        <Window title={'Settings'} width={700}
            isOpenned={isOpenned} zIndex={1001} componentClass={'settings-window'}
            closeWindow={closeSettingsWindow}
        >
            <div style={{ textAlign: 'center' }}>
                <em>Select a color</em>
                <div>
                    <div>
                        {/* <label htmlFor='main-bg-color'>Select a color:</label> */}
                        <input type="color" id="bg-color-input" name="favcolor" onChange={handleChangeColorInput} />
                    </div>
                </div>
                <em>... image</em>
                <div>
                    <img src='/img/bg-1.jpg' width={170}
                        className='bg-image-option'
                        onClick={() => handleClickImageOption('url("/img/bg-1.jpg")')}
                        alt='bg-1'
                    />
                    <img src='/img/bg-2.jpg' width={170}
                        className='bg-image-option'
                        onClick={() => handleClickImageOption('url("/img/bg-2.jpg")')}
                        alt='bg-2'
                    />
                    <img src='/img/bg-3.jpg' width={170}
                        className='bg-image-option'
                        onClick={() => handleClickImageOption('url("/img/bg-3.jpg")')}
                        alt='bg-3'
                    />
                    <img src='/img/bg-4.jpg' width={170}
                        className='bg-image-option'
                        onClick={() => handleClickImageOption('url("/img/bg-4.jpg")')}
                        alt='bg-4'
                    />
                    <img src='/img/bg-5.jpg' width={170}
                        className='bg-image-option'
                        onClick={() => handleClickImageOption('url("/img/bg-5.jpg")')}
                        alt='bg-5'
                    />
                </div>
                <em>or video</em>
                <div>
                    <img src='/img/bg-2.jpg' width={200}
                        className='bg-image-option'
                        onClick={() => handleClickVideoOption('/videos/bg-2.mp4')}
                        alt='bg-2'
                    />
                    <img src='/img/bg-4.jpg' width={200}
                        className='bg-image-option'
                        onClick={() => handleClickVideoOption('/videos/bg-4.mp4')}
                        alt='bg-4'
                    />
                    <img src='/img/bg-5.jpg' width={200}
                        className='bg-image-option'
                        onClick={() => handleClickVideoOption('/videos/bg-5.mp4')}
                        alt='bg-5'
                    />
                </div>

            </div>
        </Window >
    )
}

export default SettingsWindow;