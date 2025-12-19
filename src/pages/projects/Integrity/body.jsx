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
		<div className="max-w-[1100px] mx-auto  my-[46px]">
			<div>
				<h1 className="text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					CONTEXT & CHALLENGE
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					In 2021, our client acquired a petroleum storage depot in Lagos with
					an installed capacity of approximately 20 million litres. The facility
					had been idle for several years, with infrastructure degradation and
					partial fire damage rendering it nonoperational. The client’s
					objective was to restore the depot into a fully functional,
					revenue-generating terminal that could meet regulatory requirements
					and serve as a competitive player in downstream petroleum logistics.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					COZYM INTERVENTION
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Cozym was engaged to execute a comprehensive integrity assessment of
					the depot infrastructure, covering tankage systems, product piping,
					firefighting and utility networks, civil foundations, and structural
					works. The assessment identified key deficiencies while confirming the
					facility’s recoverability. Based on the findings, Cozym developed
					multiple revamp concepts, each engineered to balance CAPEX efficiency
					with constructability, operability, and compliance with industry codes
					(API 650/620, ASME, NFPA). Upon client review, a preferred option was
					selected and advanced into a Front-End Engineering Design (FEED)
					package. The FEED defined specifications, design layouts, technical
					guidelines, and preliminary cost models, forming the basis for
					procurement and EPC execution.
				</p>

				<h1 className="mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					DELIVERY
				</h1>
				<p className="text-[20px] leading-[25px] pt-3 text-[#002B45] text-justify ">
					Cozym’s work provided the client with a clear, risk-mitigated roadmap
					for asset rehabilitation, transforming a dormant and underutilized
					depot into a technically viable, commercially bankable project. The
					FEED outputs supported procurement planning, contractor mobilization,
					and regulatory interface.
				</p>
				<h1 className=" mt-14 text-[20px] text-[#002B45] font-extrabold leading-[30px]">
					RESULTS & IMPACT
				</h1>
				<p className="text-[20px] leading-[25px] pt-[10px] text-[#002B45] text-justify ">
					The depot has since been successfully redeveloped, commissioned, and
					integrated into Nigeria’s downstream supply chain. With this facility,
					our client is position to generate sustained revenue from a strategic
					brownfield asset. The project stands as proof of Cozym’s ability to
					engineer the recovery of distressed infrastructure into fully
					operational energy facilities.
				</p>
			</div>
		</div>
	);
}
