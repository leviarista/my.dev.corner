import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react';
import TextWidget from '../components/widgets/TextWidget';
import Button from '../components/buttons/Button';
import Window from '../components/windows/Window';
import SettingsWindow from '../components/windows/SettingsWindow';
import WidgetsWindow from '../components/windows/WidgetsWindow';
import StickerWidget from '../components/widgets/StickerWidget';
import MainBackground from '../components/MainBackground';

export default function Home() {

  const handleClickAddButton = () => {
    setSettingsWindowOpened(false);
    setWidgetsWindowOpened(true);
  }

  const handleClickTuneButton = () => {
    setSettingsWindowOpened(true);
    setWidgetsWindowOpened(false);
  }

  const closeSettingsWindow = () => {
    console.log('closeSettingsWindow')
    setSettingsWindowOpened(false);
  }

  const closeWidgetsWindow = () => {
    console.log('closeWidgetsWindow')
    setWidgetsWindowOpened(false);
  }

  const [backgroundType, setBackgroundType] = useState('color');
  const [backgroundValue, setBackgroundValue] = useState('var(--bg-default)');

  const [settingsWindowOpened, setSettingsWindowOpened] = useState(false);
  const [widgetsWindowOpened, setWidgetsWindowOpened] = useState(false);

  useEffect(() => {
    console.log('loaded');
    setBackgroundType('image');
    setBackgroundValue('url("/img/bg-2.jpg")');
  }, [])

  return (
    <div>
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


        <SettingsWindow
          isOpenned={settingsWindowOpened}
          closeSettingsWindow={closeSettingsWindow}
          setBackgroundType={setBackgroundType}
          setBackgroundValue={setBackgroundValue}
        />
        <WidgetsWindow isOpenned={widgetsWindowOpened} closeWidgetsWindow={closeWidgetsWindow} />

      </main>
    </div>
  )
}
