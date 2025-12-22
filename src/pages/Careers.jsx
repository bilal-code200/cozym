import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // for safe CSV parsing
import CareerH from './careersH';

// Google Sheet CSV endpoint
const SHEET_CSV_URL =
	'https://docs.google.com/spreadsheets/d/e/2PACX-1vTCM9npf0dLhng9d1YddxfZy8B7eVnCIcoqwiydvDMBNEfyCxXhj_7D0yc-b5sCYJte38GY99vZDPCr/pub?output=csv';

// Static Google Form link (same for all jobs)
const STATIC_FORM_LINK =
	'https://docs.google.com/forms/d/e/1FAIpQLSfO8R-iUZbSmlvcGGXDhIKV9_vJ-FMW0jl55sntNat01tOPWQ/viewform?usp=dialog';

export default function Careers() {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(SHEET_CSV_URL);
				const csvText = await response.text();

				// Parse CSV safely (supports commas & long text)
				Papa.parse(csvText, {
					header: true,
					skipEmptyLines: true,
					complete: results => {
						setJobs(results.data);
					},
				});
			} catch (err) {
				console.error('Error loading jobs', err);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	return (
		<div className="min-h-screen bg-white max-w-[1320px] mx-auto font-Montserrat px-4 md:px-[60px]">
			<CareerH />
			<div className="w-full md:max-w-[50%] mt-16 md:mt-[111px]">
				<h1 className="text-2xl md:text-[30px] leading-[42px] text-[#002B45] font-extrabold">
					Build a future you can feature in
				</h1>
				<p className="text-sm md:text-[16px] leading-[30px] text-[#002B45] pt-[18px]">
					Join a team of passionate engineers, project managers, and innovators
					driving the future of energy infrastructure in Nigeria and West
					Africa. Explore our current job openings below.
				</p>
			</div>
			<div className="w-full md:max-w-[50%] mt-12 md:mt-[90px]">
				<h1 className="text-2xl md:text-[30px] leading-[42px] text-[#002B45] font-extrabold">
					Open roles
				</h1>
				<p className="text-sm md:text-[16px] leading-[30px] text-[#002B45] pt-[18px]">
					We are always happy to receive open applications, even if we are not
					actively hiring.
				</p>
			</div>

			<div className="md:grid grid-cols-1 md:grid-cols-12 gap-6 mt-12 md:mt-[90px] hidden">
				<h2 className="col-span-3 text-2xl md:text-[30px] leading-[42px] font-extrabold text-[#002B45]">
					Job Title
				</h2>
				<h2 className="col-span-6 text-2xl md:text-[30px] leading-[42px] font-extrabold text-[#002B45]">
					Description
				</h2>
			</div>

			{loading ? (
				<p>Loading job listings...</p>
			) : (
				jobs.map((job, index) => (
					<div
						key={index}
						className="grid grid-cols-1 md:grid-cols-12 lg:gap-6 gap-4 items-center mt-10 mb-16 md:mb-[110px]"
					>
						{/* Job Title */}
						<div className="col-span-3">
							<h2 className="col-span-3 md:hidden block text-2xl md:text-[30px] leading-[42px] font-extrabold text-[#002B45]">
								Job Title
							</h2>
							<p className="text-[#FAA419] text-[16px] md:text-[16px] font-medium">
								{job.Type}
							</p>
							<p className="text-[#002B45] text-sm md:text-[16px] mt-1 font-bold">
								{job.Title}
							</p>
						</div>

						{/* Job Description */}
						<div className="col-span-6 text-[#002B45] text-sm md:text-[16px] md:mt-0 mt-5  leading-[30px] font-medium">
							<h2 className="col-span-6 md:hidden block text-2xl md:text-[30px] leading-[42px] font-extrabold text-[#002B45]">
								Description
							</h2>
							<p>{job.Description}</p>
							<p className="mt-1 text-[#F4A300]">
								Location: {job.Location} | Experience: {job.Experience} |
								Deadline: {job.Deadline}
							</p>
						</div>

						{/* Apply Button */}
						<div className="col-span-3 flex justify-start md:justify-end mt-4 md:mt-0">
							<button
								onClick={() => window.open(job.FormLink, '_blank')}
								className="bg-[#002B45] text-white px-6 md:px-8 md:py-2 py-3 rounded-lg text-sm hover:bg-[#014166] transition w-1/2 md:w-auto"
							>
								Apply
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}
