import Image from 'next/image';
import React from 'react'
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { setStickerWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const StickerWidget = ({ className }) => {
  const dispatch = useDispatch();

  let classText = 'sticker-widget';
  if (className) classText += ' ' + className;

  const { value, isOpenned } = useSelector(state => state.stickerWidget)

  const onClickClose = () => {
    console.log("🚀")
    dispatch(setStickerWidgetOpenned(false));
  }

  return (
    isOpenned &&
    <Widget className={classText} onClickClose={onClickClose}>
      {/* <img src='/img/stickers/headphones-cat.gif' width={150} /> */}
      <img src={value} width={150} height={150} alt='sticker' />
    </Widget>
  )
}

export default StickerWidget