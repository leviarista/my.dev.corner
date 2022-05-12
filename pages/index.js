import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react';
import TextWidget from '../components/widgets/TextWidget';
import Button from '../components/buttons/Button';
import Window from '../components/windows/Window';
import SettingsWindow from '../components/windows/SettingsWindow';
import WidgetsWindow from '../components/windows/WidgetsWindow';
import StickerWidget from '../components/widgets/StickerWidget';
import MainBackground from '../components/MainBackground';
import Meta from '../components/Meta';
import { setAnalogClockWidgetOpenned, setAnalogClockWidgetPosition, setStickerWidgetOpenned, setStickerWidgetValue, setTextWidgetOpenned, setTextWidgetValue } from '../app/actions';
import { useDispatch } from 'react-redux';
import AnalogClockWidget from '../components/widgets/AnalogClockWidget';

export default function Home() {

  const dispatch = useDispatch();

  /* *********************************** Windows *********************************** */

  const [settingsWindowOpened, setSettingsWindowOpened] = useState(false);
  const [widgetsWindowOpened, setWidgetsWindowOpened] = useState(false);

  const handleClickAddButton = () => {
    setSettingsWindowOpened(false);
    setWidgetsWindowOpened(true);
  }

  const handleClickTuneButton = () => {
    setSettingsWindowOpened(true);
    setWidgetsWindowOpened(false);
  }

  const closeSettingsWindow = () => {
    setSettingsWindowOpened(false);
  }

  const closeWidgetsWindow = () => {
    setWidgetsWindowOpened(false);
  }

  /* *********************************** Background *********************************** */

  const [backgroundType, setBackgroundType] = useState('color');
  const [backgroundValue, setBackgroundValue] = useState('var(--bg-default)');

  /* *********************************** Widgets *********************************** */

  const [textWidgetState, setTextWidgetState] = useState(false);

  const toggleWidget = (id, value) => {
    if (id === 'text') {
      setTextWidgetState(value ?? !textWidgetState);
    }
  }

  /* *********************************** *** *********************************** */

  useEffect(() => {
    // Background
    let background = localStorage.getItem('_background');
    console.log("🚀 ~ file: index.js ~ line 62 ~ useEffect ~ background", background)
    if (background) {
      const { type, value } = JSON.parse(background);
      setBackgroundType(type);
      setBackgroundValue(value);
    } else {
      setBackgroundType('video');
      setBackgroundValue('/videos/defaultVideoBg.webm');
    }
    // Default Widgets
    setTextWidgetState(true);
    dispatch(setTextWidgetOpenned(true));
    dispatch(setTextWidgetValue("The dev's favorite corner."));

    dispatch(setStickerWidgetValue('/img/stickers/headphones-cat.gif'));
    dispatch(setStickerWidgetOpenned(true));

    dispatch(setAnalogClockWidgetOpenned(true));
    let analogClockWidget = localStorage.getItem('analogClock');
    if (analogClockWidget) {
      analogClockWidget = JSON.parse(analogClockWidget);
      // console.log("🚀 ", analogClockWidget)
      dispatch(setAnalogClockWidgetPosition(analogClockWidget.position));
      // dispatch(setAnalogClockWidgetPosition({ x: 100, y: 0 }));
    }
  }, [])

  /* *********************************** *** *********************************** */

  return (
    <>
      <Meta
        title={""}
        description={"The dev's favorite corner."}
      />

      <main className='main-page'>
        <header>
          <div className='logo'>
            <Image src="/img/my.dev.corner-logo.png" alt="my dev corner logo" width={150} height={150} />
          </div>
          <TextWidget className={'slogan-text-widget'} />
        </header>

        <MainBackground type={backgroundType} value={backgroundValue} />

        <div className='buttons-container'>
          <Button type={'icon'} variant={'primary'} handleClick={handleClickAddButton}>
            <img src='/img/icons/add.svg' />
          </Button>
          <Button type={'icon'} variant={'primary'} handleClick={handleClickTuneButton}>
            <img src='/img/icons/tune.svg' />
          </Button>
          <Button type={'icon'} variant={'primary'}>
            <img src='/img/icons/more.svg' />
          </Button>
        </div>

        <div id="main-container"></div>

        <StickerWidget className={'sticker-widget'} />
        <AnalogClockWidget />

        <SettingsWindow
          isOpenned={settingsWindowOpened}
          closeSettingsWindow={closeSettingsWindow}
          setBackgroundType={setBackgroundType}
          setBackgroundValue={setBackgroundValue}
        />
        <WidgetsWindow
          isOpenned={widgetsWindowOpened}
          closeWidgetsWindow={closeWidgetsWindow}
          toggleWidget={toggleWidget}
        />
      </main>
    </>
  )
}
