import React from 'react';
import { motion } from 'framer-motion';
import ServiceCover from '../serviceCover';
import StorageContent from './StorageContent';

export default function Storage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit font-Montserrat  bg-cover bg-center">
				<ServiceCover />
				<StorageContent />
			</div>
		</motion.div>
	);
}
