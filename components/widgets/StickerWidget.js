import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStickerWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const StickerWidget = ({ className }) => {
	const dispatch = useDispatch();

	let classText = 'sticker-widget';
	if (className) classText += ' ' + className;

	const stickerWidget = useSelector((state) => state.stickerWidget);
	const { value } = stickerWidget;

	const onClickClose = () => {
		dispatch(setStickerWidgetOpenned(false));
	};

	return (
		<Widget
			name='stickerWidget'
			widget={stickerWidget}
			className={classText}
			onClickClose={onClickClose}
		>
			{/* <img src='/img/stickers/headphones-cat.gif' width={150} /> */}
			<img src={value} width={150} height={150} alt='sticker' />
		</Widget>
	);
};

export default StickerWidget;
