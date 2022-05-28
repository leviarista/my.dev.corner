import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTextWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const TextWidget = ({ className }) => {
	const dispatch = useDispatch();

	let classText = 'text-widget';
	if (className) classText += ' ' + className;

	const textWidget = useSelector((state) => state.textWidget);
	const { value } = textWidget;

	const onClickClose = () => {
		dispatch(setTextWidgetOpenned(false));
	};

	return (
		<Widget
			name='textWidget'
			widget={textWidget}
			className={classText}
			onClickClose={onClickClose}
		>
			{value}
		</Widget>
	);
};

export default TextWidget;
