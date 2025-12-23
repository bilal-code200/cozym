import React from 'react';
import sectionOne from '../../../assets/images/ded.jpg';

export default function SectionOne() {
	return (
		<div className="max-w-[1100px] mx-auto my-8 md:my-[46px] px-4 md:px-0">
			<div>
				<img
					src={sectionOne}
					alt=""
					className="lg:w-full lg:h-auto h-[300px] object-cover"
				/>

				<p className="text-[#FAA419] text-[20px] md:text-[30px] font-extrabold lg:leading-[42px] pt-6 md:pt-[39px]">
					Detailed Engineering Design (DED) for 18 km Onshore Gas Distribution
					Pipeline with PRMS Sagamu (2020)
				</p>
			</div>
		</div>
	);
}
