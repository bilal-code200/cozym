import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/case1.png';
import img2 from '../../assets/images/case2.png';
import img3 from '../../assets/images/case3.png';
import img4 from '../../assets/images/case4.png';

const CaseStudies = () => {
	const caseStudies = [
		{
			id: 1,
			title: 'LPG Storage & Distribution Terminal — Lagos (2016)',
			description:
				'Delivered a 180 MT LPG terminal (3 × 60 MT tanks) after an optimized FEED reduced CAPEX and enabled safe solution for the client. The project introduced automation, ESD, and firefighting integration and became a benchmark facility for domestic LPG distribution.',
			image: img1,
		},
		{
			id: 2,
			title: 'FEED — 1.6 km LPG Onshore Pipeline — Lagos (2019)',
			description:
				'Comprehensive FEED for an urban pipeline with ROW and constructability challenges. The FEED provided bankable technical and commercial data enabling EPC execution.',
			image: img2,
		},
		{
			id: 3,
			title:
				'DED — 18 km Onshore Gas Distribution Pipeline with PRMS — Sagamu (2020)',
			description:
				'Prepared execution-ready DED for a 12" × 18 km distribution network, including tie-in to ELPS, city gate station design, and full multidisciplinary deliverables that enabled successful construction and operation.',
			image: img3,
		},
		{
			id: 4,
			title:
				'Integrity Assessment & FEED — Petroleum Depot Revamp — Lagos (2021)',
			description:
				'Integrity assessment and revamp FEED restored a 20 million litre depot into a compliant, operable terminal — providing a rehabilitation roadmap that supported procurement, contractor mobilization, and regulatory sign-off.',
			image: img4,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 md:py-16 py-[28px] px-4  lg:px-8">
			<div className="max-w-[1370px] mx-auto lg:px-[100px] px-4">
				{/* Header */}
				<h1 className="md:text-[36px] md:leading-[43px] text-[16px] leading-[60px] font-bold text-[#002B45] md:mb-16 ">
					Selected Case Studies
				</h1>

				{/* Case Studies Grid */}
				<div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:mb-12 mb-6 items-stretch">
					{caseStudies.map(study => (
						<div
							key={study.id}
							className="rounded-lg p-[30px] shadow-lg overflow-hidden h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
						>
							<div className="flex flex-col h-full">
								{/* Title */}
								<div className="mb-4">
									<h2 className="md:text-[24px] text-[16px] leading-[24px] font-semibold text-[#002B45] md:leading-[28px]">
										{study.title}
									</h2>
								</div>

								{/* Image and Description Container */}
								<div className="flex flex-col lg:flex-row flex-grow">
									{/* Image Section */}
									<div className="w-full lg:w-48 flex-shrink-0 mb-4 lg:mb-0">
										<img
											src={study.image}
											alt={study.title}
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Description */}
									<div className="lg:ml-4">
										<p className="md:text-[16px] text-[14px] text-[#666666] leading-[24px] text-justify">
											{study.description}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Portfolio Button */}
				<div className="flex justify-start">
					<Link
						to="/projects/lpg"
						className="bg-[#0a2540] hover:bg-[#163d5e] text-white text-[18px] font-semibold px-11 py-3 rounded-md transition-colors duration-200 inline-block"
					>
						Portfolio
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CaseStudies;
