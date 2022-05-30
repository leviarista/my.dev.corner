import React, { useState } from 'react';
import Button from './buttons/Button';

const MainMenu = ({ handleClickAddButton, handleClickTuneButton }) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	const resetSettings = () => {
		localStorage.clear();
		location.reload();
	};

	return (
		<>
			<div className='buttons-container'>
				<Button type={'icon'} variant={'primary'} handleClick={handleClickAddButton}>
					<img src='/img/icons/add.svg' />
				</Button>
				<Button type={'icon'} variant={'primary'} handleClick={handleClickTuneButton}>
					<img src='/img/icons/tune.svg' />
				</Button>
				<Button
					type={'icon'}
					variant={'primary'}
					handleClick={() => setShowMoreOptions(!showMoreOptions)}
				>
					<img src='/img/icons/more.svg' />
				</Button>
			</div>
			{showMoreOptions && (
				<div className='more-options-container'>
					<a
						href='https://github.com/leviarista/my.dev.corner'
						className='btn-link'
						rel='noopenner noreferrer'
						target={'_blank'}
					>
						Github
					</a>
					<a href='#' className='btn-link' onClick={() => resetSettings()}>
						Reset settings
					</a>
				</div>
			)}
		</>
	);
};

export default MainMenu;
