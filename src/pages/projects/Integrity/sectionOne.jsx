import React from 'react';
import sectionOne from '../../../assets/images/integrity.jpg';

export default function SectionOne() {
	return (
		<div className="max-w-[1100px] mx-auto  my-[46px]">
			<div>
				<img
					src={sectionOne}
					alt=""
				/>

				<p className="text-[#FAA419] text-[30px] font-extrabold leading-[42px] pt-[39px]">
					Integrity Assessment & FEED for Petroleum Storage Facility Revamp
					Lagos (2019)
				</p>
			</div>
		</div>
	);
}
