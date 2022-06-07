import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheySaidSoQuotesWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const TheySaidSoQuotesWidget = () => {
	const dispatch = useDispatch();

	const theySaidSoQuotesWidget = useSelector((state) => state.theySaidSoQuotesWidget);

	const onClickClose = () => {
		dispatch(setTheySaidSoQuotesWidgetOpenned(false));
	};

	const [quote, setQuote] = useState();

	useEffect(() => {
		fetch('https://quotes.rest/qod?language=en')
			.then((res) => res.json())
			.then((res) => {
				setQuote(res.contents.quotes[0]);
			})
			.catch((error) => {
				console.log(error);
			});

		return () => {
			//
		};
	}, []);

	return (
		<Widget
			name='theySaidSoQuotesWidget'
			widget={theySaidSoQuotesWidget}
			onClickClose={onClickClose}
			width={300}
		>
			<div
				style={{
					background: `url('${quote?.background}')`,
					padding: '5px',
					borderRadius: 'var(--border-radius)',
				}}
			>
				<blockquote style={{ textAlign: 'center', fontStyle: 'italic', padding: 0 }}>
					&ldquo;{quote?.quote}&rdquo;
					<footer style={{ marginTop: '10px' }}>{quote?.author}</footer>
				</blockquote>
			</div>
		</Widget>
	);
};

export default TheySaidSoQuotesWidget;
