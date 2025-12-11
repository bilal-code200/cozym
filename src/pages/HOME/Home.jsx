import React, { useState, useEffect } from 'react';
import SlideOne from './slideOne';
import SlideTwo from './slideTwo';
import SlideThree from './slideThree';
import SectionTwo from './sectionTwo';
import Key from '../ABOUT/key';
import HomeKey from './homeKey';
import HomeServiceSection from './homeServiceSection';

export default function Home() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % 3);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="relative w-full h-[calc(100vh-100px)]  overflow-hidden">
				<SlideOne active={index === 0} />
				<SlideTwo active={index === 1} />
				<SlideThree active={index === 2} />
			</div>
			<div>
				<SectionTwo />
				<HomeKey />
				<HomeServiceSection />
			</div>
		</>
	);
}
