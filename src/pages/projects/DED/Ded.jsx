import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../heroSection';
import SectionOne from './sectionOne';
import Body from './body';
import ProjectsImageSection from '../DED/projectImageSection';

export default function Ded() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="font-Montserrat">
				<HeroSection />
				<div className="">
					<SectionOne />
					<Body />
					<ProjectsImageSection />
				</div>
			</div>
		</motion.div>
	);
}
