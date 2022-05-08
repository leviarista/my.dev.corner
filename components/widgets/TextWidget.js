import React from 'react'
import Draggable from 'react-draggable';

const TextWidget = ({ className }) => {
  let classText = 'widget text-widget';
  if (className) classText += ' ' + className;
  const nodeRef = React.useRef(null);
  
  return (
      <Draggable
        nodeRef={nodeRef}
      >
      <div ref={nodeRef} className={classText} >The dev's favorite corner.</div>
    </Draggable>
  )
}

export default TextWidget