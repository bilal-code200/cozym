import Bg from '../../assets/images/keybg.jpg';
import Keyimage from '../../assets/images/keyimage.png';
import { FaCheckSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegCheckSquare } from 'react-icons/fa';

export default function HomeKey() {
	const items = [
		'Founded in 2012, initially delivering water and environmental engineering projects.',
		'Transitioned into engineering consultancy for oil and gas projects.',
		'Licensed by NUPRC (upstream) and NMDPRA (midstream/downstream).',
		'Delivered over 25 LPG, CNG, and terminal projects for private sector clients.',
		'Cozym Academy launched to strengthen local technical capacity.',
		'Expanding focus on pipelines, gas processing, terminals, and flare elimination systems.',
	];

	return (
		<section
			className="   bg-cover bg-center flex  lg:px-[170px] px-5 lg:pt-0  pb-[60px]  "
			style={{
				backgroundImage: `url(${Bg})`,
			}}
		>
			<div className="relative z-10    text-[#012A42]">
				{/* Yellow Header as Image */}
				<div className="lg:-mt-10 -mt-4 mb-9 lg:ml-16 ml-5">
					<img
						src={Keyimage}
						alt="Key Milestones"
						className="h-auto lg:w-[190px]  w-[100px] "
					/>
				</div>

				{/* Bullet List */}
				<div className="space-y-5 flex justify-start flex-col ">
					{items.map((text, index) => (
						<div
							key={index}
							className="flex items-start  gap-3"
						>
							<FaRegCheckSquare className="text-[#F9AB24]    w-[25px] mt-1" />
							<p className="lg:text-lg text-[14px] leading-[22px] font-semibold text-[#002B45]">
								{text}
							</p>
						</div>
					))}
				</div>

				{/* Button */}
				<Link
					to="/about"
					className="inline-block mt-10"
				>
					<button className="lg:px-10 px-8 lg:py-4 py-2 bg-[#012A42] text-white rounded-lg lg:text-lg text-[14px] font-semibold shadow-lg hover:bg-[#033759] transition">
						About Us
					</button>
				</Link>
			</div>
		</section>
	);
}
