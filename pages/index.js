import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAnalogClockWidgetOpenned, setAnalogClockWidgetPosition, setDevTunesFMWidgetOpenned, setDevTunesFMWidgetPosition, setFreeCodeCampRadioWidgetOpenned, setFreeCodeCampRadioWidgetPosition, setStickerWidgetOpenned, setStickerWidgetPosition, setStickerWidgetValue, setTextWidgetOpenned, setTextWidgetPosition, setTextWidgetValue, setXTeamRadioWidgetOpenned, setXTeamRadioWidgetPosition } from '../app/actions';
import Button from '../components/buttons/Button';
import MainBackground from '../components/MainBackground';
import Meta from '../components/Meta';
import AnalogClockWidget from '../components/widgets/AnalogClockWidget';
import DevTunesFMWidget from '../components/widgets/DevTunesFMWidget';
import FreeCodeCampRadioWidget from '../components/widgets/FreeCodeCampRadioWidget';
import StickerWidget from '../components/widgets/StickerWidget';
import TextWidget from '../components/widgets/TextWidget';
import XTeamRadioWidget from '../components/widgets/XTeamRadioWidget';
import SettingsWindow from '../components/windows/SettingsWindow';
import WidgetsWindow from '../components/windows/WidgetsWindow';

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


  /* *********************************** *** *********************************** */

  useEffect(() => {
    // Background
    let background = localStorage.getItem('_background');
    if (background) {
      const { type, value } = JSON.parse(background);
      setBackgroundType(type);
      setBackgroundValue(value);
    } else {
      setBackgroundType('video');
      setBackgroundValue('/videos/defaultVideoBg.webm');
    }

    // Widgets

    dispatch(setStickerWidgetValue('/img/stickers/headphones-cat.gif'));
    // dispatch(setStickerWidgetOpenned(true));

    let analogClockWidget = localStorage.getItem('analogClockWidget');
    if (analogClockWidget) {
      analogClockWidget = JSON.parse(analogClockWidget);
      dispatch(setAnalogClockWidgetOpenned(analogClockWidget.isOpenned));
      dispatch(setAnalogClockWidgetPosition(analogClockWidget.position));
    } else {
      dispatch(setAnalogClockWidgetOpenned(true));
      dispatch(setAnalogClockWidgetPosition({ x: (window.innerWidth - 240), y: (window.innerHeight - 245) }));
    }

    let textWidget = localStorage.getItem('textWidget');
    if (textWidget) {
      textWidget = JSON.parse(textWidget);
      dispatch(setTextWidgetPosition(textWidget.position));
      dispatch(setTextWidgetOpenned(textWidget.isOpenned));
      dispatch(setTextWidgetValue(textWidget.value));
    } else {
      dispatch(setTextWidgetOpenned(true));
      dispatch(setTextWidgetValue("The dev's favorite corner."));
      dispatch(setTextWidgetPosition({ x: 145, y: (window.innerHeight - 85) }));
    }

    let stickerWidget = localStorage.getItem('stickerWidget');
    if (stickerWidget) {
      stickerWidget = JSON.parse(stickerWidget);
      dispatch(setStickerWidgetOpenned(stickerWidget.isOpenned));
      dispatch(setStickerWidgetPosition(stickerWidget.position));
    } else {
      dispatch(setStickerWidgetOpenned(true));
      dispatch(setStickerWidgetPosition({ x: (window.innerWidth - 400), y: (window.innerHeight - 220) }));
    }

    let devTunesFMWidget = localStorage.getItem('devTunesFMWidget');
    if (devTunesFMWidget) {
      devTunesFMWidget = JSON.parse(devTunesFMWidget);
      dispatch(setDevTunesFMWidgetOpenned(devTunesFMWidget.isOpenned));
      dispatch(setDevTunesFMWidgetPosition(devTunesFMWidget.position));
    } else {
      dispatch(setDevTunesFMWidgetOpenned(true));
    }
    
    let xTeamRadioWidget = localStorage.getItem('xTeamRadioWidget');
    if (xTeamRadioWidget) {
      xTeamRadioWidget = JSON.parse(xTeamRadioWidget);
      dispatch(setXTeamRadioWidgetOpenned(xTeamRadioWidget.isOpenned));
      dispatch(setXTeamRadioWidgetPosition(xTeamRadioWidget.position));
    } else {
      dispatch(setXTeamRadioWidgetOpenned(true));
    }
    
    let freeCodeCampRadioWidget = localStorage.getItem('freeCodeCampRadioWidget');
    if (freeCodeCampRadioWidget) {
      freeCodeCampRadioWidget = JSON.parse(freeCodeCampRadioWidget);
      dispatch(setFreeCodeCampRadioWidgetOpenned(freeCodeCampRadioWidget.isOpenned));
      dispatch(setFreeCodeCampRadioWidgetPosition(freeCodeCampRadioWidget.position));
    } else {
      dispatch(setFreeCodeCampRadioWidgetOpenned(true));
    }
  }, [])

  /* *********************************** *** *********************************** */

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const resetSettings = () => {
    localStorage.clear();
    location.reload();
  }

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
          <TextWidget />
        </header>

        <MainBackground type={backgroundType} value={backgroundValue} />

        <div className='buttons-container'>
          <Button type={'icon'} variant={'primary'} handleClick={handleClickAddButton}>
            <img src='/img/icons/add.svg' />
          </Button>
          <Button type={'icon'} variant={'primary'} handleClick={handleClickTuneButton}>
            <img src='/img/icons/tune.svg' />
          </Button>
          <Button type={'icon'} variant={'primary'} handleClick={() => setShowMoreOptions(!showMoreOptions)}>
            <img src='/img/icons/more.svg' />
          </Button>
        </div>

        {showMoreOptions &&
          <div className='more-options-container'>
            <a href='https://github.com/leviarista/my.dev.corner'
              className='btn-link'
              rel='noopenner noreferrer' target={'_blank'}
            >
              Github
            </a>
            <a href='#'
              className='btn-link'
              onClick={() => resetSettings()}
            >
              Reset settings
            </a>
          </div>
        }

        <div id="main-container"></div>

        <StickerWidget className={'sticker-widget'} />
        <AnalogClockWidget />
        <DevTunesFMWidget />
        <XTeamRadioWidget />
        <FreeCodeCampRadioWidget />

        <SettingsWindow
          isOpenned={settingsWindowOpened}
          closeSettingsWindow={closeSettingsWindow}
          setBackgroundType={setBackgroundType}
          setBackgroundValue={setBackgroundValue}
        />
        <WidgetsWindow
          isOpenned={widgetsWindowOpened}
          closeWidgetsWindow={closeWidgetsWindow}
        />
      </main>
    </>
  )
}
