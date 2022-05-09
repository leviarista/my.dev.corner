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

  console.log('first ');
  useEffect(() => {
    console.log('loaded');
  }, [])

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

  // const [backgroundType, setbackgroundType] = useState('color');
  // const [backgroundValue, setbackgroundValue] = useState('var(--primary)');
  const [backgroundType, setBackgroundType] = useState('image');
  const [backgroundValue, setBackgroundValue] = useState('url("/img/bg-4.jpg")');
  // const [backgroundType, setbackgroundType] = useState('video');
  // const [backgroundValue, setbackgroundValue] = useState('https://www.w3schools.com/howto/rain.mp4');
  // const [backgroundValue, setbackgroundValue] = useState('/videos/bg-5.mp4');

  const [settingsWindowOpened, setSettingsWindowOpened] = useState(false);
  const [widgetsWindowOpened, setWidgetsWindowOpened] = useState(false);

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
