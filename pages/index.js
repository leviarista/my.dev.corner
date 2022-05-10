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

export default function Home() {

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

  const closeWidget = (id) => {
    if (id === 'text') {
      setTextWidgetState(false);
    }
  }

  /* *********************************** *** *********************************** */

  useEffect(() => {
    // Background
    setBackgroundType('image');
    setBackgroundValue('url("/img/bg-2.jpg")');
    // Default Widgets
    setTextWidgetState(true);
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
          <TextWidget className={'slogan-text-widget'} isOpenned={textWidgetState} closeWidget={() => closeWidget('text')} />
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

        {/* <StickerWidget className={'sticker-widget'} isOpenned={widgets.sticker} /> */}

        <SettingsWindow
          isOpenned={settingsWindowOpened}
          closeSettingsWindow={closeSettingsWindow}
          setBackgroundType={setBackgroundType}
          setBackgroundValue={setBackgroundValue}
        />
        <WidgetsWindow isOpenned={widgetsWindowOpened} closeWidgetsWindow={closeWidgetsWindow} />
      </main>
    </>
  )
}
