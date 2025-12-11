import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/ser1.png';
import img2 from '../../assets/images/ser2.png';
import img3 from '../../assets/images/ser3.png';
import img4 from '../../assets/images/ser4.png';
import img5 from '../../assets/images/ser5.png';
import img6 from '../../assets/images/ser6.png';
import img7 from '../../assets/images/ser7.png';
import img8 from '../../assets/images/ser8.png';

export default function HomeServiceSection() {
	const cards = [
		{
			img: img1,
			title: 'Oil & Gas Production Facilities',
			desc: 'Design and EPC of onshore & offshore production facilities, flowlines, separators, pumping and compressor stations, custody transfer metering, and utility systems.',
			list: [
				'Flowlines & wellhead tie-ins',
				'Separation & treatment systems',
				'Metering & LACT units',
			],
			link: '/services/oilngas',
		},
		{
			img: img2,
			title: 'Gas Processing & Conditioning',
			desc: 'End-to-end EPC for gas conditioning, dehydration, dew-point control, compression, mini-LNG, and flare elimination systems.',
			list: [
				'Dehydration & dew-point units',
				'Compression & boosting systems',
				'Hydrocarbon recovery & fractionation',
			],
			link: '/services/gasprocessing',
		},
		{
			img: img3,
			title: 'Gas Distribution & Terminals',
			desc: 'CNG/LPG stations, pipelines, PRMS, bulk storage terminals, bottling plants, and fuel retail solutions.',
			list: [
				'CNG mother & daughter stations',
				'LPG terminals & depots',
				'White product terminals & fueling stations',
			],
			link: '/services/gasdistribution',
		},
		{
			img: img4,
			title: 'Technical Training',
			desc: 'Cozym Limited’s Technical Training services equip your project teams with the essential competencies required to excel across every phase of Engineering, Procurement, Construction, and Commissioning (EPCC).',
			list: [],
			link: '/services/technical',
		},
		{
			img: img5,
			title: 'Pipelines & Distribution Networks',
			desc: 'EPC for transmission and distribution pipelines, metering, pigging, integrity systems, and cathodic protection.',
			list: [],
			link: '/services/pipeline',
		},
		{
			img: img6,
			title: 'Storage Facilities',
			desc: 'Design and construction of tank farms, LPG bullets and spheres, firewater systems, and depot automation.',
			list: [],
			link: '/services/storage',
		},
		{
			img: img7,
			title: 'Utility & Support Infrastructure',
			desc: 'Civil works, buildings, structural steel, water/wastewater systems, electrical & instrumentation, and fire protection systems.',
			list: [],
			link: '/services/utility',
		},
		{
			img: img8,
			title: 'Procurement Services',
			desc: 'At Cozym Limited, we elevate procurement beyond sourcing by delivering high-grade supply chain solutions that power efficient, high-performance project execution. With a robust global network spanning the US, EU, and Asia, we procure high-quality materials and specialized equipment that meet the demanding standards of the oil and gas industry.',
			list: [],
			link: '/services/procurement',
		},
	];

	return (
		<div className="w-full py-16 bg-white">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
				{cards.map((card, i) => (
					<div
						key={i}
						className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col overflow-hidden"
					>
						{/* Image */}
						<img
							src={card.img}
							alt={card.title}
							className="h-44 w-full object-cover"
						/>

						{/* Content */}
						<div className="flex flex-col p-6 flex-grow">
							<h3 className="text-xl font-semibold text-[#07355A] mb-3">
								{card.title}
							</h3>

							<p className="text-gray-600 text-sm leading-relaxed mb-4">
								{card.desc}
							</p>

							{/* Bullet list */}
							{card.list.length > 0 && (
								<ul className="text-gray-700 text-sm space-y-2 mb-6">
									{card.list.map((item, index) => (
										<li
											key={index}
											className="list-disc ml-5"
										>
											{item}
										</li>
									))}
								</ul>
							)}

							{/* Push button to bottom */}
							<div className="mt-auto">
								<Link
									to={card.link}
									className="w-full bg-[#07355A] hover:bg-[#0A426F] text-white py-3 rounded-lg text-sm font-medium transition inline-block text-center"
								>
									View More
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
