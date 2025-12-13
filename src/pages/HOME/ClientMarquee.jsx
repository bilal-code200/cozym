import React from 'react';
import cli1 from '../../assets/icons/cli1.png';
import cli2 from '../../assets/icons/cli2.png';
import cli3 from '../../assets/icons/cli3.png';
import cli4 from '../../assets/icons/cli4.png';
import cli5 from '../../assets/icons/cli5.png';
import cli6 from '../../assets/icons/cli6.png';
import cli7 from '../../assets/icons/cli7.png';
import cli8 from '../../assets/icons/cli8.png';
import cli9 from '../../assets/icons/cli9.png';
import cli10 from '../../assets/icons/cli10.png';
import cli11 from '../../assets/icons/cli11.png';
import cli12 from '../../assets/icons/cli12.png';

const ClientMarquee = () => {
	const logos = [
		cli1,
		cli2,
		cli3,
		cli4,
		cli5,
		cli6,
		cli7,
		cli8,
		cli9,
		cli10,
		cli11,
		cli12,
	];

	return (
		<div>
			<h1 className="text-[#002B45] text-[50px] font-semibold pt-[200px] text-center leading-[60px]">
				Our Clients
			</h1>
			<div className="w-full bg-white py-[150px] mt-[64px] mb-[200px] overflow-hidden relative">
				{/* Top border */}
				<div className="absolute top-0 left-0 w-full h-[1px] flex">
					<div className="w-1/2 bg-[#002B45]"></div>
					<div className="w-1/2 bg-[#FAA419]"></div>
				</div>
				{/* Bottom border */}
				<div className="absolute bottom-0 left-0 w-full h-[2px] flex">
					<div className="w-1/2 bg-[#FAA419]"></div>
					<div className="w-1/2 bg-[#002B45]"></div>
				</div>
				<div className="relative">
					<div className="flex animate-marquee whitespace-nowrap">
						{/* First set of logos */}
						{logos.map((logo, index) => (
							<div
								key={`first-${index}`}
								className="flex-shrink-0 mx-4"
							>
								<img
									src={logo}
									alt={`Client logo ${index + 1}`}
									className="h-16 w-auto object-contain"
								/>
							</div>
						))}
						{/* Spacer for gap */}
						<div className="flex-shrink-0 w-[50vw]"></div>
						{/* Second set of logos */}
						{logos.map((logo, index) => (
							<div
								key={`second-${index}`}
								className="flex-shrink-0 mx-4"
							>
								<img
									src={logo}
									alt={`Client logo ${index + 1}`}
									className="h-16 w-auto object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientMarquee;
