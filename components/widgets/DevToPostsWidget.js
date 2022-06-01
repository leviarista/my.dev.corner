import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDevToPostsWidgetOpenned } from '../../app/actions';
import Widget from './Widget';

const DevToPostsWidget = () => {
	const dispatch = useDispatch();

	const devToPostsWidget = useSelector((state) => state.devToPostsWidget);

	const onClickClose = () => {
		dispatch(setDevToPostsWidgetOpenned(false));
	};

	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch('https://dev.to/api/articles')
			.then((res) => res.json())
			.then((res) => {
				setArticles(res);
			});

		return () => {
			//
		};
	}, []);

	return (
		<Widget
			name='devToPostsWidget'
			widget={devToPostsWidget}
			className={'windowed dev-to-posts-widget'}
			onClickClose={onClickClose}
			title='dev.to | Latest posts'
			width={350}
		>
			<div className='dev-to-posts-container'>
				<div className='dev-to-header'>
					<img src='/img/widgets/devToPostsWidget.png' width={55} />
				</div>

				{articles.map((article) => {
					return (
						<div key={article.id} className='dev-to-post-article'>
							<a href={article.url} className='dev-to-post-title'>
								<img src={article.social_image} alt={article.title}></img>
								<b>{article.title}</b>
							</a>
							<div>
								{article.readable_publish_date} |{' '}
								<a href={'https://dev.to/t/' + article.user.name}>
									{article.user.name}
								</a>
							</div>
							<div className='dev-to-post-description'>
								{article.description} <br />
								<a href={article.url}>Read More</a>
							</div>
							<div>
								<small>
									{article.tags.split(', ').map((tag) => '#' + tag + ' ')}
								</small>
								<br />
								<small>
									<span> {article.public_reactions_count} reactions</span> -
									<span> {article.comments_count} comments</span>
								</small>
							</div>
						</div>
					);
				})}
			</div>
		</Widget>
	);
};

export default DevToPostsWidget;
