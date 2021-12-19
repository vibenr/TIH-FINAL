import React from 'react';
import Heading from '../PageHeading/PageHeading';
import Footer from '../Footer/Footer';
import {useState,useEffect} from "react";


function Startup() {
	const styleheader = {
		// outline: '1px solid black',
		width: '30%',
		color: 'whitesmoke',
		fontFamily: 'Monospace, Cursive, Sans-serif',
		fontSize: '1.6rem',
		backgroundImage: 'linear-gradient( 89.4deg,  rgba(194,0,39,1) 0.8%, rgba(10,35,104,1) 99.4% )',
		textAlign: 'center',
		// marginLeft: 'st34rem',
		marginTop: '1.5rem',
		borderRadius: '0.5rem',
		boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
		webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
		mozkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
	};


	const [initial,final]=useState([]);


	useEffect(()=>{
	
		let servicedata=async()=>{
			await fetch('/api/startup').then(res=>{
				if(res.ok){
					return res.json();
				}
			}).then(jsonres=>final(jsonres))
		
		}
		servicedata();
	
	},[initial])


	return (
		<div classNameNames='container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start '>
			<Heading pagname='Startups' />
           { initial && initial.map((card)=>(

			<div className='w-full lg:w-3/4 p-3 lg:ml-44'>
				<div className='flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg'>
					<img
						className='block h-auto w-full lg:w-48 flex-none bg-cover h-24' 
						src={require(`../../../public/images/${card.image}`)}
					/>
					<div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-baseline leading-normal'>
					<p className="text-2xl font-bold" >{card.title} </p>
						<p className='text-grey-darker text-base mt-8'>{card.description}</p> {/*heading  */}
					</div>
				</div>
			</div>
		   ),[initial])
		
	}

	{/* 		<div className='w-full lg:w-3/4 p-3 lg:ml-44'>
				<div className='flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg'>
					<img
						className='block h-30 w-full lg:w-36 flex-none bg-cover'
						src='http://www.technoithub.in/static/assets/img/services/s-2.png '
					/>
					<div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						<div className='text-black font-bold text-xl mb-2 leading-tight'>
							Contraweb is a platform specifically designed to provide ease in contacting contractors &
							client . One can acquire profound person & optimal solution for works related to
							construction, repairing, renovating, interior designing, etc. for building an adequate
							dwelling.
						</div>
						<p className='text-grey-darker text-base'>Contra Web</p>
					</div>
				</div>
			</div>

			<div className='w-full lg:w-3/4 p-3 lg:ml-44'>
				<div className='flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg'>
					<img
						className='block h-auto w-full lg:w-48 flex-none bg-cover h-24'
						src='http://www.technoithub.in/static/assets/img/services/s-4.png '
					/>
					<div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						<div className='text-black font-bold text-xl mb-2 leading-tight'>
							Manufacturer of ceramic pulley lagging sheets along with a supplier of various ceramic
							spares, electrical spares, mechanical spares and more'
						</div>
						<p className='text-grey-darker text-base'>Bell Engineering</p>
					</div>
				</div>
			</div>

			<div className='w-full lg:w-3/4 p-3 lg:ml-44'>
				<div className='flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg'>
					<img
						className='block h-30 w-full lg:w-36 flex-none bg-cover'
						src='http://www.technoithub.in/static/assets/img/services/s-5.png '
					/>
					<div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						<div className='text-black font-bold text-xl mb-2 leading-tight'>
						A service-based company to ensure easy and safe travelling across the nation
						</div>
						<p className='text-grey-darker text-base'>Cab-O-Way</p>
					</div>
				</div>
			</div>

			<div className='w-full lg:w-3/4 p-3 lg:ml-44'>
				<div className='flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg'>
					<img
						className='block h-auto w-full lg:w-48 flex-none bg-cover h-24'
						src='http://www.technoithub.in/static/assets/img/services/s-3.png'
					/>
					<div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						<div className='text-black font-bold text-xl mb-2 leading-tight'>
						Tracker of workouts and fitness-related metrics
						</div>
						<p className='text-grey-darker text-base'>Is Fitness</p>
					</div>
				</div>
			</div> */}

			<Footer />
		</div>
	);
}

export default Startup;
