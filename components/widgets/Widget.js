import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const Widget = ({ name, widget, width, children, className, onClickClose, title }) => {
	let classText = 'widget';
	if (className) classText += ' ' + className;

	const isWindowed = classText.includes('windowed');

	const { isOpenned, position } = widget;

	const onStop = (e) => {
		widget.position = {
			x: e.layerX - e.offsetX,
			y: e.layerY - e.offsetY,
		};
		localStorage.setItem(name, JSON.stringify(widget));
	};

	const nodeRef = React.useRef(null);

	const handleClickClose = () => {
		widget.isOpenned = false;
		localStorage.setItem(name, JSON.stringify(widget));
		onClickClose();
	};

	return (
		isOpenned &&
		ReactDOM.createPortal(
			<Draggable
				nodeRef={nodeRef}
				defaultPosition={position ?? { x: 0, y: 0 }}
				onStop={onStop}
				handle={isWindowed ? '.handle-widget' : null}
			>
				<div ref={nodeRef} className={classText} style={{ width: width ?? 'fit-content' }}>
					{isWindowed && <div className='widget-title handle-widget'>{title || ''}</div>}
					<div className='btn-close-window' onClick={handleClickClose}>
						<img src='/img/icons/close-circle.svg' />
					</div>
					{children}
				</div>
			</Draggable>,
			document.querySelector('#main-container')
		)
	);
};

export default Widget;
