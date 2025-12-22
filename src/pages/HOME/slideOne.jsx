import React from 'react';
import img1 from '../../assets/images/homeOne.jpg';
import { Link } from 'react-router-dom';

export default function SlideOne({ active }) {
	return (
		<div
			className={`absolute inset-0  transition-opacity  duration-[1200ms] 
      ${active ? 'opacity-100 z-20' : 'opacity-0 z-0'}
    `}
		>
			<div
				className="absolute inset-0 bg-cover  bg-center scale-110 animate-parallax"
				style={{ backgroundImage: `url(${img1})` }}
			/>

			<div className="absolute inset-0 bg-black/20" />

			<div className="relative max-w-[1370px]  px-4 sm:px-6 md:px-8 lg:px-[90px] pb-6 sm:pb-8 lg:pb-10 mx-auto h-full flex flex-col justify-center pt-10 sm:pt-12 lg:pt-[50px] text-[#ffffff] animate-fadeSlide">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-[50px] lg:leading-[58px] font-bold">
					A 100% Nigerian EPC partner
				</h1>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-[50px] lg:leading-[58px] font-bold">
					Delivering oil & gas infrastructure
				</h1>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-[50px] lg:leading-[58px] font-bold">
					across Nigeria & West Africa
				</h1>
				<div
					className={`flex flex-col max-w-[780px] ml-auto transition-all duration-1000 delay-300 ease-out
						${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
					`}
				>
					<p className="text-[14px]  lg:text-[20px]   leading-[22px] lg:leading-[29px] text-[#ffffff] mt-8 sm:mt-10 lg:mt-[50px]">
						Established in 2012, Cozym began with water and environmental
						engineering and evolved into a trusted EPC partner for oil & gas
						projects — from FEED and detailed engineering to procurement,
						construction, commissioning, and local capacity development through
						Cozym Academy.
					</p>

					<div className="flex gap-4 mt-4 sm:mt-6 lg:mt-[11px]">
						<Link
							to="/contact"
							className="bg-[#FAA419] hover:bg-yellow-400 w-fit px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-3 rounded text-sm sm:text-base lg:text-[18px] leading-tight sm:leading-[24px] lg:leading-[27px] font-semibold transition-all transform hover:scale-105 inline-block"
						>
							Get in Touch
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
