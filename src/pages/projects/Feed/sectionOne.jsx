import React from 'react';
import sectionOne from '../../../assets/images/feed.jpg';

export default function SectionOne() {
	return (
		<div className="max-w-[1100px] mx-auto  my-[46px]">
			<div>
				<img
					src={sectionOne}
					alt=""
				/>

				<p className="text-[#FAA419] text-[30px] font-extrabold leading-[42px] pt-[39px]">
					FEED for 1.6 km LPG Onshore Pipeline Lagos (2019)
				</p>
			</div>
		</div>
	);
}
