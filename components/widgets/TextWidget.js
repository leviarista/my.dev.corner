import React from 'react'
import Widget from './Widget';
import { useDispatch, useSelector } from 'react-redux'
import { setTextWidgetOpenned, setTextWidgetPosition } from '../../app/actions';

const TextWidget = ({ className }) => {
  const dispatch = useDispatch();

  let classText = 'text-widget';
  if (className) classText += ' ' + className;

  const textWidget = useSelector(state => state.textWidget)
  const { value, isOpenned, position } = textWidget

  const onClickClose = () => {
    textWidget.isOpenned = false;
    localStorage.setItem('textWidget', JSON.stringify(textWidget));
    dispatch(setTextWidgetOpenned(false));
  }
  
  const onStop = (e) => {
    textWidget.position = {
      x: e.layerX - e.offsetX,
      y: e.layerY - e.offsetY,
    };
    localStorage.setItem('textWidget', JSON.stringify(textWidget));
  }

  return (
    isOpenned &&
    <Widget className={classText} onClickClose={onClickClose} position={position} onStop={onStop}>
      {value}
    </Widget>
  )
}

export default TextWidget