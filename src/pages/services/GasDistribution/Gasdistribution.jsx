import React from 'react';
import { motion } from 'framer-motion';
import ServiceCover from '../serviceCover';

import GasDistributionContent from './GasdistributionContent';

export default function Gasdistribution() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover font-Montserrat bg-center">
				<ServiceCover />
				<GasDistributionContent />
			</div>
		</motion.div>
	);
}
