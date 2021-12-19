import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import Footer from '../Footer/Footer';
import {useState,useEffect} from "react";

function About() {

	const [initial,final]=useState([]);
	/* useEffect(()=>{
	
		let servicedata=async()=>{
			await fetch('/api/about').then(res=>{
				if(res.ok){
					return res.json();
				}
			}).then(jsonres=>final(jsonres.data))
		
		}
		servicedata();
	
	},[initial]) */




	return (
		<>
			<div className=''>
				<div className='mt-3 p-4'>
					<div className=' grid  lg:grid-cols-2 md:text-lg md:grid-cols-1'>
						<div className='  '>
							<p className='break-normal ml-4'>
								Techno IT Hub is a startup and mentoring hub which offers guidance and encouragement
							</p>
							<ul className='break-words ml-8 list-inside list-disc'>
								<li className='mt-2'>Create Opportunities</li>
								<li className='mt-2'> Offer technical as well as non-technical solutions</li>
								<li className='mt-2'> Support aspiring minds</li>
							</ul>
						</div>
						<div className = "md:mt-4">
							<p className='break-normal md:text-lg flex justify-content-center align-items-center'>
								{' '}
								With an aim to to blur line between students and industries, Techno IT Hub offers
								mentorship,start-up support,internships, hackathon guidance, workspace for live projects
								and far more benefits. it encourages coding and management skills. apart from providing
								quality education at affordable prices, Techno It hub enlightens future prospects.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className = "relative bottom-0 w-full"> 
			<Footer />
			</div>

			</>
	);
}

export default About;
