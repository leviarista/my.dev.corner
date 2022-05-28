import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

const Window = (props) => {
	let { title, children, className, width, zIndex, closeWindow } = props;

	let classText = 'window';
	if (className) classText += ' ' + className;

	const nodeRef = React.useRef(null);
	const handleClick = () => {};

	return ReactDOM.createPortal(
		<Draggable nodeRef={nodeRef} handle='.handle-window'>
			<div
				ref={nodeRef}
				className={classText}
				style={{ width: width, zIndex: zIndex ?? 10 }}
				onClick={handleClick}
			>
				<div className='window-title handle-window'>{title}</div>
				<div
					className='btn-close-window'
					onClick={closeWindow}
					style={{ top: '5px', right: '5px' }}
				>
					<img src='/img/icons/close-circle.svg' />
				</div>
				<div className='window-body'>{children}</div>
			</div>
		</Draggable>,
		document.querySelector('#main-container')
	);
};

export default Window;
