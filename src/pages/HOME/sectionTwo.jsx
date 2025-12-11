import React, { useRef, useState } from 'react';
import video from '../../assets/images/homeVideo.mp4';

export default function SectionTwo() {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlayPause = () => {
		const video = videoRef.current;

		if (!video) return;

		if (isPlaying) {
			video.pause();
			setIsPlaying(false);
		} else {
			video.play();
			setIsPlaying(true);
		}
	};

	return (
		<div>
			<div>
				<section className="py-[160px] max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10">
					<div className="bg-white p-8 rounded-xl shadow-lg w-1/2 h-[584px]">
						<h3 className="text-[24px] font-semibold mb-4">About Us</h3>
						<h2 className="text-[36px] text-[#002B45] leading-[43px] font-bold mb-4">
							Cozym Limited provides integrated EPC capabilities across the oil
							& gas project lifecycle
						</h2>
						<p className="text-[#666666] leading-[28px] text-[20px]">
							From feasibility and FEED to engineering, procurement,
							construction, commissioning, and post-handover training. We align
							every scope with international standards (API, ASME, ISO, BS,
							NFPA) while applying deep local insight to deliver safe,
							compliant, and cost-effective assets.
						</p>
					</div>

					{/* VIDEO SECTION */}
					<div
						className="rounded-xl overflow-hidden shadow-lg w-1/2 h-[584px] relative cursor-pointer"
						onClick={togglePlayPause}
					>
						{/* Video */}
						<video
							ref={videoRef}
							src={video}
							className="w-full h-full object-cover rounded-xl shadow-lg"
							muted
						/>

						{/* Overlay (only when paused) */}
						{!isPlaying && (
							<div className="absolute inset-0 bg-black/40 rounded-xl transition"></div>
						)}

						{/* Play button (only when paused) */}
						{!isPlaying && (
							<div className="absolute inset-0 flex justify-center items-center">
								<div className="w-20 h-16 bg-red-700 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white transition">
									<div className="w-0 h-0 border-l-[28px] border-[#ffffff] border-y-[16px] border-y-transparent"></div>
								</div>
							</div>
						)}
					</div>
				</section>
			</div>
		</div>
	);
}
