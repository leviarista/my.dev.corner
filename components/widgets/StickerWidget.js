import React from 'react'
import Draggable from 'react-draggable';

const StickerWidget = ({ className }) => {
  let classText = 'widget sticker-widget';
  if (className) classText += ' ' + className;
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className={classText} >
        <div className='btn-close-window'>
          <img src='/img/icons/close-circle.svg' />
        </div>

        <img src='/img/stickers/headphones-cat.gif' width={150} />
      </div>
    </Draggable>
  )
}

export default StickerWidget