import React, { useState, useEffect } from 'react';
import img1 from '../../assets/images/p1.png';
import img2 from '../../assets/images/p2.png';
import img3 from '../../assets/images/p3.png';
import img4 from '../../assets/images/p4.png';
import img5 from '../../assets/images/p5.png';

export default function ImageSliderSection() {
	const images = [img1, img2, img3, img4, img5];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="py-20 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
			{/* Left side - Text content */}
			<div className="bg-white p-8 rounded-xl shadow-lg">
				<h3 className="text-[24px] font-semibold mb-4">Our Expertise</h3>
				<h2 className="text-[36px] text-[#002B45] leading-[43px] font-bold mb-4">
					Delivering Excellence in Oil & Gas Engineering
				</h2>
				<p className="text-[#666666] leading-[28px] text-[20px]">
					With over a decade of experience, Cozym Limited specializes in
					comprehensive EPC solutions across the entire oil and gas project
					lifecycle. Our commitment to international standards and local
					expertise ensures safe, compliant, and efficient project execution.
				</p>
			</div>

			{/* Right side - Image slider */}
			<div className="rounded-xl overflow-hidden shadow-lg">
				<div className="relative w-full h-[400px]">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Slide ${index + 1}`}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
								index === currentIndex ? 'opacity-100' : 'opacity-0'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
