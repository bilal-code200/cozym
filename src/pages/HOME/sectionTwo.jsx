import React, { useState } from 'react';

export default function SectionTwo() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<div>
				<section className=" lg:pt-[160px] lg:pb-[160px] pt-[40px] pb-[100px] max-w-[1370px] lg:px-[100px] px-5 lg:mt-0 mt-10 mx-auto flex flex-col lg:flex-row gap-10">
					<div className="bg-white lg:p-8 p-5 rounded-xl shadow-lg lg:w-1/2 w-full lg:h-[584px]">
						<h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">
							About Us
						</h3>
						<h2 className="lg:text-[36px] text-[#002B45] lg:leading-[43px] text-[22px] leading-[30px] font-bold mb-4">
							Cozym Limited provides integrated EPC capabilities across the oil
							& gas project lifecycle
						</h2>
						<p className="text-[#666666] lg:leading-[28px] lg:pt-0 pt-[10px] lg:text-[20px] text-[14px] leading-[22px]">
							From feasibility and FEED to engineering, procurement,
							construction, commissioning, and post-handover training. We align
							every scope with international standards (API, ASME, ISO, BS,
							NFPA) while applying deep local insight to deliver safe,
							compliant, and cost-effective assets.
						</p>
					</div>

					{/* YOUTUBE VIDEO SECTION */}
					<div
						className="rounded-xl overflow-hidden shadow-lg lg:w-1/2 w-full lg:h-[584px] relative cursor-pointer"
						onClick={openModal}
					>
						{/* Thumbnail */}
						<img
							src="https://img.youtube.com/vi/gOgynd5v_Ok/maxresdefault.jpg"
							alt="YouTube Video Thumbnail"
							className="w-full h-full object-cover rounded-xl shadow-lg"
						/>

						{/* Overlay */}
						<div className="absolute inset-0 bg-black/40 rounded-xl transition"></div>

						{/* Play button */}
						<div className="absolute inset-0 flex justify-center items-center">
							<div className="w-16 h-14 bg-red-700 backdrop-blur-md rounded-lg flex items-center justify-center hover:opacity-35 transition cursor-pointer">
								<div className="w-0 h-0 border-l-[28px] border-[#ffffff] border-y-[16px] border-y-transparent"></div>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<div
						className="relative max-w-4xl w-full mx-4"
						onClick={e => e.stopPropagation()}
					>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition z-10"
							aria-label="Close video modal"
						>
							&times;
						</button>
						<iframe
							src="https://www.youtube.com/embed/gOgynd5v_Ok?autoplay=1"
							title="YouTube video player"
							className="w-full h-auto rounded-lg aspect-video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				</div>
			)}
		</div>
	);
}
