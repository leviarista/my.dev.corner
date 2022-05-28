import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux';

const Widget = ({ name, widget, width, children, className, onClickClose }) => {
	let classText = 'widget';
	if (className) classText += ' ' + className;

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
		localStorage.setItem(name, JSON.stringify(textWidget));
		onClickClose();
	};

	return (
		isOpenned &&
		ReactDOM.createPortal(
			<Draggable
				nodeRef={nodeRef}
				defaultPosition={position ?? { x: 0, y: 0 }}
				onStop={onStop}
			>
				<div ref={nodeRef} className={classText} style={{ width: width ?? 'fit-content' }}>
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
