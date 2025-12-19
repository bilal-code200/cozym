import React from 'react';
import { motion } from 'framer-motion';
import ServiceCover from '../serviceCover';
import ProcurementContent from './ProcurementContent';

export default function Procurement() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit font-Montserrat  bg-cover bg-center">
				<ServiceCover />
				<ProcurementContent />
			</div>
		</motion.div>
	);
}
