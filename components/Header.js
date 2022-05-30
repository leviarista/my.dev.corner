import Image from 'next/image';
import React from 'react';
import TextWidget from './widgets/TextWidget';

const Header = () => {
	return (
		<header>
			<div className='logo'>
				<Image
					src='/img/my.dev.corner-logo.png'
					alt='my dev corner logo'
					width={150}
					height={150}
				/>
			</div>
			<TextWidget />
		</header>
	);
};

export default Header;
