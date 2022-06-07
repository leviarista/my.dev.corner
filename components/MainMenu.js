import React, { useState } from 'react';
import Button from './buttons/Button';

const MainMenu = ({ handleClickAddButton, handleClickTuneButton }) => {
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const [showInfoModal, setShowInfoModal] = useState(false);

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
					<a href='#' className='btn-link' onClick={() => setShowInfoModal(true)}>
						Info & Credits
					</a>
				</div>
			)}
			{showInfoModal && (
				<div id='info-modal' className='modal'>
					<div>
						<a
							href='#'
							title='Close'
							className='modal-close'
							onClick={() => setShowInfoModal(false)}
						>
							<img
								src='/img/icons/close-circle.svg'
								width='15'
								height='15'
								alt='close icon'
							/>
						</a>
						<div className='modal-title'>
							<b>Info & Credits</b>
						</div>
						<p>
							Quotes from:
							<span
								style={{
									zIndex: 50,
									fontSize: '0.9em',
									fontWeight: 'bold',
									display: 'flex',
									marginTop: '10px',
								}}
							>
								<img
									src='https://theysaidso.com/branding/theysaidso.png'
									height='20'
									width='20'
									alt='theysaidso.com'
								/>
								<a
									href='https://theysaidso.com'
									title='Powered by quotes from theysaidso.com'
									style={{
										color: '#ccc',
										marginLeft: '4px',
										verticalAlign: 'middle',
									}}
								>
									They Said So®
								</a>
							</span>
						</p>
						<div className='modal-info-text'>
							<br />
							<a
								href='https://github.com/leviarista/my.dev.corner'
								target='_blank'
								rel='noopener noreferrer'
							>
								Github Repository
							</a>
							<br />
							<a
								href='https://github.com/leviarista/my.dev.corner/blob/main/LICENSE'
								target='_blank'
								rel='noopener noreferrer'
							>
								MIT License
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MainMenu;
