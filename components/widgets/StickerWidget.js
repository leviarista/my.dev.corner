import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStickerWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const StickerWidget = ({ className }) => {
  const dispatch = useDispatch();

  let classText = 'sticker-widget';
  if (className) classText += ' ' + className;

  const stickerWidget = useSelector(state => state.stickerWidget)
  const { value, isOpenned, position } = stickerWidget

  const onClickClose = () => {
    stickerWidget.isOpenned = false;
    localStorage.setItem('stickerWidget', JSON.stringify(stickerWidget));
    dispatch(setStickerWidgetOpenned(false));
  }

  const onStop = (e) => {
    stickerWidget.position = {
      x: e.layerX - e.offsetX,
      y: e.layerY - e.offsetY,
    };
    localStorage.setItem('stickerWidget', JSON.stringify(stickerWidget));
  }

  return (
    isOpenned &&
    <Widget className={classText} onClickClose={onClickClose} onStop={onStop} position={position} >
      {/* <img src='/img/stickers/headphones-cat.gif' width={150} /> */}
      <img src={value} width={150} height={150} alt='sticker' />
    </Widget>
  )
}

export default StickerWidget