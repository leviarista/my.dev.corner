import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setZenQuotesWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const ZenQuotesWidget = () => {
	const dispatch = useDispatch();

	const zenQuotesWidget = useSelector((state) => state.zenQuotesWidget);

	const onClickClose = () => {
		dispatch(setZenQuotesWidgetOpenned(false));
	};

	const [quote, setQuote] = useState();

	useEffect(() => {
		fetch('https://zenquotes.io/api/today')
			.then((res) => res.json())
			.then((res) => {
				setQuote(res[0]);
			})
			.catch((error) => {
				setQuote({
					q: 'Keep your face always toward the sunshine -  shadows will fall behind you.',
					a: 'Walt Whitman',
					h: '<blockquote>&ldquo;Keep your face always toward the sunshine -  shadows will fall behind you.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>',
				});
				console.log(error);
			});

		return () => {
			//
		};
	}, []);

	return (
		<Widget
			name='zenQuotesWidget'
			widget={zenQuotesWidget}
			onClickClose={onClickClose}
			width={300}
		>
			<div>
				<blockquote style={{ textAlign: 'center', fontStyle: 'italic' }}>
					&ldquo;{quote?.q}&rdquo;
					<footer>{quote?.a}</footer>
				</blockquote>
			</div>
		</Widget>
	);
};

export default ZenQuotesWidget;
