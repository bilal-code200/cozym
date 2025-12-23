import React from 'react';
import projectOne from '../../assets/images/serviceCover.jpg';
export default function ServiceCover() {
	return (
		<div>
			{' '}
			<div
				className="w-full h-[402px] font-Montserrat bg-cover bg-center flex items-center justify-center relative"
				style={{
					backgroundImage: `url(${projectOne})`,
				}}
			>
				{/* <div className="absolute inset-0 bg-blue-900/60"></div> */}
				<div className="max-[1100px] mx-auto lg:pt-0 pt-20 ">
					<h1 className="text-center font-semibold lg:text-[14px] text-[12px] lg:px-[60px] px-4 leading-[27px] tracking-[1.4px] text-[#ffffff]">
						Home / Gas Processing & Conditioning | Gas Distribution & Terminals
						| Pipelines & Distribution Networks | <br /> Storage Facilities |
						Utility & Support Infrastructure{' '}
					</h1>

					<h1 className="relative z-10 text-white lg:text-[50px] text-[35px] font-bold text-center">
						Services
					</h1>
				</div>
			</div>
		</div>
	);
}
