import React from 'react';

export default function Body() {
	const items = [
		"Tie-in to ELPS (14'' × 0.5 km) – engineering design for integration with the transmission system.",
		"12'' × 18 km distribution pipeline – route alignment, hydraulic simulations, stress analysis, material specifications, and constructability input.",
		'City Gate station design – including pressure regulating systems, metering skids, isolation valves, and redundancy provisions.',
		'Execution-ready documentation – specifications, engineering drawings, guidelines, and material take-off (MTO) lists for use by procurement and construction teams.',
	];
	return (
		<div className="max-w-[1100px] mx-auto md:px-[0px] px-4  my-[46px]">
			<div>
				<h1 className="text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					CONTEXT & CHALLENGE
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					In 2019, our client sought to construct a 1.6 km LPG onshore pipeline
					connecting a jetty to a storage and distribution hub in one of the
					busiest and most densely populated areas of Lagos State. The location
					presented major right-of-way (ROW) and constructability challenges,
					given the urban congestion and competing land uses. The client needed
					a robust Front-End Engineering Design (FEED) to define the project
					scope, address technical risks, and enable investment approval.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					COZYM INTERVENTION
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Cozym was engaged to prepare a comprehensive FEED study for the
					pipeline. Our multidisciplinary scope covered route alignment,
					hydraulic simulations, material selection, constructability
					assessment, and cost estimation, while ensuring compliance with API,
					ASME, and BS codes as well as Nigerian regulatory requirements. We
					also coordinated survey and geotechnical investigations, generating
					critical data that informed alignment decisions and design integrity.
				</p>

				<h1 className="mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					DELIVERY
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					The FEED package provided a bankable technical and commercial basis
					for the project, reducing uncertainties around cost, constructability,
					and ROW selection. By addressing these elements upfront, Cozym enabled
					the client to progress the pipeline into EPC execution with
					confidence.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					RESULTS & IMPACT
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-[10px] text-[#002B45] text-justify ">
					The pipeline has since been constructed, and although not yet
					operational due to downstream facilities still under development, it
					stands as a ready-to-operate asset that will significantly enhance LPG
					supply security and distribution capacity once integrated.
				</p>
			</div>
		</div>
	);
}
