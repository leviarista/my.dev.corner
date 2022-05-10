import React from 'react'
import Widget from './Widget';

const TextWidget = ({ className, isOpenned, closeWidget }) => {
  let classText = 'text-widget';
  if (className) classText += ' ' + className;

  return (
    <Widget className={classText} isOpenned={isOpenned} closeWidget={closeWidget}>
      The dev&#39;s favorite corner.
    </Widget>
  )
}

export default TextWidget