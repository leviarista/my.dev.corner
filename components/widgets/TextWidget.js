import React from 'react'
import Widget from './Widget';
import { useDispatch, useSelector } from 'react-redux'
import { setTextWidgetOpenned } from '../../app/actions';

const TextWidget = ({ className }) => {
  const dispatch = useDispatch();

  let classText = 'text-widget';
  if (className) classText += ' ' + className;

  const { value, isOpenned } = useSelector(state => state.textWidget)
  
  const onClickClose = () => {
    // console.log("🚀")
    dispatch(setTextWidgetOpenned(false));
  }

  return (
    isOpenned &&
    <Widget className={classText} onClickClose={onClickClose}>
      {value}
    </Widget>
  )
}

export default TextWidget