import React from 'react';
import Newshero from './NEWS/newshero';
import Card from './NEWS/card';

export default function News() {
	return (
		<div>
			<div className="font-Montserrat">
				<Newshero />
				<Card />
			</div>
		</div>
	);
}
