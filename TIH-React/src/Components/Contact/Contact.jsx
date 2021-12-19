import React from 'react';
import { Avatar } from '@mui/material';
import Heading from '../PageHeading/PageHeading';
import Footer from "../Footer/Footer";
import {useState,useEffect} from "react";

 



function Contact() {
	const style = {
		border: '0',
		width:'40vw',
		height: '50vh'
	};





	const [initial,final]=useState([]);
	/* useEffect(()=>{
	
		let servicedata=async()=>{
			await fetch('/api/contact').then(res=>{
				if(res.ok){
					return res.json();
				}
			}).then(jsonres=>final(jsonres.data))
		
		}
		servicedata();
	
	},[initial]) */










const style1={
	resize:"none"
}

	return (

		<>

	     	 <Heading pagname = "Contact Us" /> 
		
         
		 <div className="flex justify-center align-items-center">


		   <div className = " grid  lg:grid-cols-2 md:grid-cols-1  "> 
           
					<div className='map mt-5 ml-20 md:w-full sm:w-full '>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.60369312146!2d72.56334564300455!3d23.031668564003056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85a79eebdec9%3A0xd0ab8cb58ab0d0dc!2sTechno%20IT%20HUB!5e0!3m2!1sen!2sin!4v1636615698970!5m2!1sen!2sin'
							style={style} 
							allowfullscreen=''
							loading='lazy'
							title='map_location'
						/>
					</div>

              <div className = "contact-details ml-20 mt-5" > 
				
						<div className=" flex align-items-center justify-content-baseline ml-16  ">
							<h2 className="font-bold md:text-xl text-3xl sm:text-sm"> Techno IT Hub</h2>
						</div>
               
					
						<div className="mt-10">
							<div className="flex mt-5 ">
								<Avatar src="https://thumbs.dreamstime.com/b/red-maps-pin-location-map-icon-location-pin-pin-icon-vector-red-maps-pin-location-map-icon-location-pin-pin-icon-vector-vector-140200096.jpg"/>
									
									<div className="ml-5" >
									<h2 className="font-bold md:text-lg">Address:</h2>
									<p class="font-semibold md:text-lg">GIC Block 3,L.D Engg Boys Hostel, </p>
									</div>
							</div>
						</div>


						<div> 
							<div className="flex mt-5"> 
							<Avatar src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"/>
							<div className="ml-5">
								<h2 className="font-bold md:text-lg">Email:</h2> 
								<p className = "font-semibold md:text-lg sm:text-sm text-xl" >technoithub111@gmail.com</p>
							</div>
							</div>
						</div>
						<div>
									<div className="flex mt-5">
									<Avatar src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"/>
									<div  className="ml-5">
									<h2 className="font-bold md:text-lg">Call:</h2>
									<p class="font-semibold md:text-lg"> +91 9898 6609 70</p>
									</div>
								</div>
						</div>
              </div>
 </div>
</div>	
			<div className='contactForm  flex justify-content-center align-items-center mt-12 mb-4'>
				<form class='w-full max-w-lg border-gray-300'>
					<div class='flex flex-wrap -mx-3 mb-6'>
						<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'>
								First Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='Jane'
							/>
						</div>
						<div class='w-full md:w-1/2 px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-last-name'>
								Last Name
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-last-name'
								type='text'
								placeholder='Doe'
							/>
						</div>
					</div>
					<div class='flex flex-wrap -mx-3 mb-6'>
						<div class='w-full px-3'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-email'>
								Email
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='grid-email'
								type='email'
								placeholder='Enter Your Email'
							/>
						</div>
					</div>
					<div class='flex flex-wrap -mx-3 mb-2'>
						<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-first-name'>
								Contact No
							</label>
							<input
								class='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
								id='grid-first-name'
								type='text'
								placeholder='+91'
							/>
						</div>
						<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
							<label
								class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								for='grid-state'>
								Apply For
							</label>
							<div class='relative'>
								<select
									class='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='grid-state'>
									<option>Choose..</option>
									<option>Graphics Designer</option>
									<option>Tutor</option>
									<option>Intern</option>
									<option>Student/Member</option>
									<option>Developer</option>
									<option>Others</option>
								</select>
								<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
									<svg
										class='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div>
						<textarea
							className=' appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='Message'
							style={style1}
						/>
					</div>
					<div className='flex justify-content-center align-items-center'>
						<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
							Submit
						</button>
					</div>
				</form>{' '}
			</div>
				<Footer />
		</>
	);
}

export default Contact;
