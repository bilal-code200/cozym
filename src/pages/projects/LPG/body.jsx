import React from 'react';
import checkStyle from '../../../assets/icons/checkStyle.svg';

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
					For years, our client’s operations were anchored on an immobile 18 MT
					trailer tank, relying on manual handling with no automated safety
					protections. Although they had already procured three (3) × 60 MT LPG
					tanks, these remained in storage for years due to the high CAPEX
					associated with constructing a bulk plant expansion. The earlier FEED
					prepared for the project made the facility commercially unfeasible.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					COZYM INTERVENTION
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					In 2016, Cozym was invited to intervene. We executed a new FEED study
					that preserved functionality and safety while re-engineering the plant
					for Nigerian construction realities. By leveraging local resources,
					modular methods, and pragmatic specifications, we significantly
					reduced CAPEX without compromising on code compliance or operating
					integrity.
				</p>

				<h1 className="mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					DELIVERY
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Following the optimized FEED, Cozym executed the EPC of a 180 MT LPG
					storage and distribution terminal (3 × 60 MT tanks). The facility was
					delivered with modern automation and safety systems including
					emergency shutdowns, detection and alarm systems, firefighting
					integration, and process interlocks transitioning our client from
					manual handling to controlled, standards-driven operations.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					RESULTS & IMPACT
				</h1>
				<p className="lg:text-[20px] text-[16px] leading-[25px] pt-[10px] text-[#002B45] text-justify ">
					The project was completed on an accelerated schedule and within our
					client’s expected budget and quality standards, enabling immediate
					commercial operation. The plant quickly became a benchmark facility
					for LPG distribution in Nigeria and propelled our client into the
					front rank of domestic LPG distributors, with an asset that is safer,
					scalable, and operationally efficient.
				</p>
			</div>
		</div>
	);
}
