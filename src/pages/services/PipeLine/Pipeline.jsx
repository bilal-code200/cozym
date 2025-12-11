import React from 'react';
import ServiceCover from '../serviceCover';
import PipelineContent from './PipelineContent';

export default function Pipeline() {
	return (
		<div>
			<div className="bg-[url('/src/assets/images/services.jpg')] w-full h-fit  bg-cover bg-center">
				<ServiceCover />
				<PipelineContent />
			</div>
		</div>
	);
}
